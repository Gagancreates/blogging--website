// Everything on /shelf comes from this file.
//
// To add something: drop the image into src/assets/shelf/<section>/ and add one
// line below. `src` / `cover` are paths relative to src/assets/shelf/.
// Images are resized and compressed at build time, so originals of any size are fine.
// Newest first — the page shows items in the order listed here.
// Reading / Watching = what you've read and watched recently.
//
// PLACEHOLDERS: every entry below is sample content for previewing the layout.
// Replace them with your own before merging.

// Are.na channel slugs (the last part of the channel URL, e.g. are.na/gagan-p/<slug>).
// When a slug is set, that tab pulls from Are.na and the local list below is ignored.
// Channels must be public or closed, not private.
// Reading / Watching from Are.na: save the cover image, set the block title to the
// book or film name, and the description to the author or director.
export const arena = {
  inspiration: 'images-x-hqrhmezhg',
  photographs: '',
  reading: '',
  watching: '',
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

export const inspiration: ShelfImage[] = [
  { src: 'inspiration/inspo-1.jpg', alt: 'Placeholder', credit: 'https://picsum.photos' },
  { src: 'inspiration/inspo-2.jpg', alt: 'Placeholder', credit: 'https://picsum.photos' },
  { src: 'inspiration/inspo-3.jpg', alt: 'Placeholder', credit: 'https://picsum.photos' },
  { src: 'inspiration/inspo-4.jpg', alt: 'Placeholder', credit: 'https://picsum.photos' },
  { src: 'inspiration/inspo-5.jpg', alt: 'Placeholder', credit: 'https://picsum.photos' },
  { src: 'inspiration/inspo-6.jpg', alt: 'Placeholder', credit: 'https://picsum.photos' },
  { src: 'inspiration/inspo-7.jpg', alt: 'Placeholder', credit: 'https://picsum.photos' },
  { src: 'inspiration/inspo-8.jpg', alt: 'Placeholder', credit: 'https://picsum.photos' },
];

export const photographs: ShelfImage[] = [
  { src: 'photographs/photo-1.jpg', alt: 'Placeholder', caption: 'Placeholder caption' },
  { src: 'photographs/photo-2.jpg', alt: 'Placeholder' },
  { src: 'photographs/photo-3.jpg', alt: 'Placeholder' },
  { src: 'photographs/photo-4.jpg', alt: 'Placeholder', caption: 'Placeholder caption' },
  { src: 'photographs/photo-5.jpg', alt: 'Placeholder' },
  { src: 'photographs/photo-6.jpg', alt: 'Placeholder' },
];

export const reading: ShelfItem[] = [
  { title: "Surely You're Joking, Mr. Feynman!", by: 'Richard Feynman', cover: 'books/feynman.jpg' },
  { title: 'The Almanack of Naval Ravikant', by: 'Eric Jorgenson', cover: 'books/naval.jpg' },
  { title: 'Zero to One', by: 'Peter Thiel', cover: 'books/zero-to-one.jpg' },
  { title: 'Siddhartha', by: 'Hermann Hesse', cover: 'books/siddhartha.jpg' },
];

export const watching: ShelfItem[] = [
  { title: 'Oppenheimer', by: 'Christopher Nolan', cover: 'films/oppenheimer.jpg', year: 2023 },
  { title: 'Interstellar', by: 'Christopher Nolan', cover: 'films/interstellar.jpg', year: 2014 },
];
