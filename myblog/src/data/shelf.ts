// Everything on /shelf comes from this file.
//
// To add something: drop the image into src/assets/shelf/<section>/ and add one
// line below. `src` / `cover` are paths relative to src/assets/shelf/.
// Images are resized and compressed at build time, so originals of any size are fine.
// Newest first — the page shows items in the order listed here.
// Reading / Watching = what you've read and watched recently.

// Are.na channel slugs (the last part of the channel URL, e.g. are.na/gagan-p/<slug>).
// When a slug is set, that tab shows Are.na items first, then the local list below.
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
  current?: boolean; // Reading: listed under "Currently reading" instead of "Reads"
  recommended?: boolean; // Watching: listed under "Recommended" instead of "Recently watched"
}

export const inspiration: ShelfImage[] = [];

export const photographs: ShelfImage[] = [];

export const reading: ShelfItem[] = [
  { title: 'Demian', by: 'Hermann Hesse', cover: 'reading/demian.jpg', current: true },
  { title: 'Symposium', by: 'Plato', cover: 'reading/symposium.jpg', current: true },
  { title: 'Napoleon: A Life', by: 'Andrew Roberts', cover: 'reading/napoleon.jpg', current: true },
];

export const watching: ShelfItem[] = [
  { title: 'Zindagi Na Milegi Dobara', by: 'Zoya Akhtar', cover: 'watching/znmd.jpg', year: 2011 },
  { title: 'Catch Me If You Can', by: 'Steven Spielberg', cover: 'watching/catch-me-if-you-can.jpg', year: 2002 },
  { title: 'Project X', by: 'Nima Nourizadeh', cover: 'watching/project-x.png', year: 2012 },
  { title: 'Reply 1988', by: 'Shin Won-ho', cover: 'watching/reply-1988.jpg', year: 2015, recommended: true },
  { title: 'Frankenstein', by: 'Guillermo del Toro', cover: 'watching/frankenstein.jpg', year: 2025, recommended: true },
  { title: 'American Psycho', by: 'Mary Harron', cover: 'watching/american-psycho.png', year: 2000, recommended: true },
];
