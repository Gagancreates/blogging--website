/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bpyf8DWs.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Ccaw54AA.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "gagan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-100 mt-5"> <section class="max-w-2xl mx-auto"> <h1 class="font-playfair text-4xl mb-4 font-bold">hey, this is gagan !</h1> <p class="font-playfair text-xl mb-8 font-normal">I'm a freshman studying Computer Science. I love building cool stuff and making machines learn. I write about machine learning, tech, and random niche topics that grab my curiosity. Figuring things out and sharing along the way :)</p> <div class="space-y-12"> <section> <h2 class="font-playfair text-3xl mb-4 font-bold">about me</h2> <p class="font-playfair text-xl mb-4">to be filled</p> </section> <section> <h2 class="font-playfair text-3xl mb-4 font-bold">blogs</h2> <ul class="font-playfair list-disc pl-5"> <li><a href="/blogs/build" class="hover:text-gray-600 underline text-lg">build with me</a></li> <li><a href="/blogs/ml" class="hover:text-gray-600 underline text-lg">machine learning</a></li> </ul> </section> <section> <h2 class="font-playfair text-3xl mb-4 font-bold">projects</h2> <ul class="font-playfair list-disc pl-5"> <li><a href="/projects#side" class="hover:text-gray-600 underline text-lg">side projects</a></li> <li><a href="/projects#main" class="hover:text-gray-600 underline text-lg">main projects</a></li> </ul> </section> <section> <h2 class="font-playfair text-3xl mb-4 font-bold">research</h2> <p class="font-playfair text-lg mb-4">yet to be filled</p> </section> <section> <h2 class="font-playfair text-3xl mb-4 font-bold">ongoings</h2> <p class="font-playfair text-lg mb-4">Currently working on a deep learning project exploring neural network architectures for computer vision tasks.</p> <p class="font-playfair text-lg mb-4">Writing a comprehensive blog series about my journey into quantum computing and its applications.</p> <p class="font-playfair text-lg mb-4">Building a full-stack web application to help students track their learning progress and set academic goals.</p> </section> <section> <h2 class="font-playfair text-3xl mb-4 font-bold">notes</h2> <p class="font-playfair text-lg mb-4">yet to be filled</p> </section> </div> </section> </main> ` })}`;
}, "D:/Blogging/myblog/src/pages/index.astro", undefined);

const $$file = "D:/Blogging/myblog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
