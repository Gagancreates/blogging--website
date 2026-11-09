// Everything on /shelf comes from this file.
//
// To add something: drop the image into src/assets/shelf/<section>/ and add one
// line below. `src` / `cover` are paths relative to src/assets/shelf/.
// Images are resized and compressed at build time, so originals of any size are fine.
// Newest first — the page shows items in the order listed here.
// Reading / Watching = what you've read and watched recently.

// Are.na channel slugs (the last part of the channel URL, e.g. are.na/gagan-p/<slug>).
// When a slug is set, that tab pulls from Are.na and the local list below is ignored.
// Channels must be public or closed, not private.
// Reading / Watching from Are.na: save the cover image, set the block title to the
// book or film name, and the description to the author or director.
export const arena = {
  inspiration: 'images-x-hqrhmezhg',
  photographs: 'pics-smrizb8l1di',
  reading: '',
  watching: 'watchpad',
};

export interface ShelfImage {
  src: string;
  alt: string;
  caption?: string; // shown when the image is opened
  credit?: string;  // link to the original, for images that aren't yours
}

export interface ShelfItem {
  title: string;
  by: string;       // author or director
  cover: string;
  year?: number;
  href?: string;    // optional Goodreads / Letterboxd link
}

export const inspiration: ShelfImage[] = [];

export const photographs: ShelfImage[] = [];

export const reading: ShelfItem[] = [];

export const watching: ShelfItem[] = [];
