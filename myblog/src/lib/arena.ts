// Pulls Shelf content from public Are.na channels at build time.
// A failed fetch fails the build on purpose: Vercel then keeps the last good
// deploy live instead of publishing an empty page.

const API = 'https://api.are.na/v2';
const PER_PAGE = 100;
const MAX_ITEMS = 300;

export interface ArenaImage {
  id: number;
  url: string;
  title: string;
  description: string;
  source?: string;
}

interface Block {
  id: number;
  class: string;
  title: string | null;
  description: string | null;
  image?: { original?: { url: string } } | null;
  source?: { url?: string } | null;
}

/** Image blocks from a channel, newest first. */
export async function channelImages(slug: string): Promise<ArenaImage[]> {
  const out: ArenaImage[] = [];
  for (let page = 1; out.length < MAX_ITEMS; page++) {
    const res = await fetch(
      `${API}/channels/${encodeURIComponent(slug)}/contents?per=${PER_PAGE}&page=${page}&sort=position&direction=desc`
    );
    if (!res.ok) {
      throw new Error(
        `Are.na: couldn't load channel "${slug}" (HTTP ${res.status}). ` +
          'Check the slug and that the channel is public or closed, not private.'
      );
    }
    const { contents } = (await res.json()) as { contents: Block[] };
    for (const b of contents) {
      const url = b.image?.original?.url;
      if (b.class !== 'Image' || !url) continue;
      out.push({
        id: b.id,
        url,
        title: b.title ?? '',
        description: (b.description ?? '').trim(),
        source: b.source?.url || undefined,
      });
    }
    if (contents.length < PER_PAGE) break;
  }
  return out.slice(0, MAX_ITEMS);
}
