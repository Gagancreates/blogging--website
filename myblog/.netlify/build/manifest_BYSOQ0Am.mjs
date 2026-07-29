import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_1B55ykNw.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/gagan/Developer/blogging--website/myblog/","adapterName":"@astrojs/netlify","routes":[{"file":"blogs/education-needs-change/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blogs/education-needs-change","isIndex":false,"type":"page","pattern":"^\\/blogs\\/education-needs-change\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"education-needs-change","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/education-needs-change.astro","pathname":"/blogs/education-needs-change","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blogs/how-i-use-claude-code/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blogs/how-i-use-claude-code","isIndex":false,"type":"page","pattern":"^\\/blogs\\/how-i-use-claude-code\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"how-i-use-claude-code","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/how-i-use-claude-code.astro","pathname":"/blogs/how-i-use-claude-code","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blogs/i-built-a-startup-at-18/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blogs/i-built-a-startup-at-18","isIndex":false,"type":"page","pattern":"^\\/blogs\\/i-built-a-startup-at-18\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"i-built-a-startup-at-18","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/i-built-a-startup-at-18.astro","pathname":"/blogs/i-built-a-startup-at-18","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blogs/indexold/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blogs/indexold","isIndex":false,"type":"page","pattern":"^\\/blogs\\/indexold\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"indexold","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/indexold.astro","pathname":"/blogs/indexold","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blogs/RNNs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blogs/rnns","isIndex":false,"type":"page","pattern":"^\\/blogs\\/RNNs\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"RNNs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/RNNs.astro","pathname":"/blogs/RNNs","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blogs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blogs","isIndex":true,"type":"page","pattern":"^\\/blogs\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/index.astro","pathname":"/blogs","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"indexold/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/indexold","isIndex":false,"type":"page","pattern":"^\\/indexold\\/?$","segments":[[{"content":"indexold","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/indexold.astro","pathname":"/indexold","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"notes/3rd_sem/dsa/unit1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/notes/3rd_sem/dsa/unit1","isIndex":false,"type":"page","pattern":"^\\/notes\\/3rd_sem\\/dsa\\/unit1\\/?$","segments":[[{"content":"notes","dynamic":false,"spread":false}],[{"content":"3rd_sem","dynamic":false,"spread":false}],[{"content":"dsa","dynamic":false,"spread":false}],[{"content":"unit1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/notes/3rd_sem/dsa/unit1.astro","pathname":"/notes/3rd_sem/dsa/unit1","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"notes/3rd_sem/dsa/unit2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/notes/3rd_sem/dsa/unit2","isIndex":false,"type":"page","pattern":"^\\/notes\\/3rd_sem\\/dsa\\/unit2\\/?$","segments":[[{"content":"notes","dynamic":false,"spread":false}],[{"content":"3rd_sem","dynamic":false,"spread":false}],[{"content":"dsa","dynamic":false,"spread":false}],[{"content":"unit2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/notes/3rd_sem/dsa/unit2.astro","pathname":"/notes/3rd_sem/dsa/unit2","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"notes/3rd_sem/dsa/unit3/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/notes/3rd_sem/dsa/unit3","isIndex":false,"type":"page","pattern":"^\\/notes\\/3rd_sem\\/dsa\\/unit3\\/?$","segments":[[{"content":"notes","dynamic":false,"spread":false}],[{"content":"3rd_sem","dynamic":false,"spread":false}],[{"content":"dsa","dynamic":false,"spread":false}],[{"content":"unit3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/notes/3rd_sem/dsa/unit3.astro","pathname":"/notes/3rd_sem/dsa/unit3","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"notes/3rd_sem/dsa/unit4/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/notes/3rd_sem/dsa/unit4","isIndex":false,"type":"page","pattern":"^\\/notes\\/3rd_sem\\/dsa\\/unit4\\/?$","segments":[[{"content":"notes","dynamic":false,"spread":false}],[{"content":"3rd_sem","dynamic":false,"spread":false}],[{"content":"dsa","dynamic":false,"spread":false}],[{"content":"unit4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/notes/3rd_sem/dsa/unit4.astro","pathname":"/notes/3rd_sem/dsa/unit4","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"notes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/notes","isIndex":true,"type":"page","pattern":"^\\/notes\\/?$","segments":[[{"content":"notes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/notes/index.astro","pathname":"/notes","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"project/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/project","isIndex":true,"type":"page","pattern":"^\\/project\\/?$","segments":[[{"content":"project","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/project/index.astro","pathname":"/project","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"project/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/project","isIndex":false,"type":"page","pattern":"^\\/project\\/?$","segments":[[{"content":"project","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/project.astro","pathname":"/project","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projectold/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projectold","isIndex":false,"type":"page","pattern":"^\\/projectold\\/?$","segments":[[{"content":"projectold","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projectold.astro","pathname":"/projectold","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"research/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/research","isIndex":false,"type":"page","pattern":"^\\/research\\/?$","segments":[[{"content":"research","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/research.astro","pathname":"/research","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"work/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/work","isIndex":false,"type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work.astro","pathname":"/work","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://gaganp.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/gagan/Developer/blogging--website/myblog/src/pages/blogs/indexold.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/indexold.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/project.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/projectold.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/blogs/RNNs.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/blogs/education-needs-change.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/blogs/how-i-use-claude-code.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/blogs/i-built-a-startup-at-18.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/notes/3rd_sem/dsa/unit1.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/notes/3rd_sem/dsa/unit2.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/notes/3rd_sem/dsa/unit3.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/notes/3rd_sem/dsa/unit4.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/blogs/index.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/notes/index.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/research.astro",{"propagation":"none","containsHead":true}],["/Users/gagan/Developer/blogging--website/myblog/src/pages/work.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blogs/education-needs-change@_@astro":"pages/blogs/education-needs-change.astro.mjs","\u0000@astro-page:src/pages/blogs/how-i-use-claude-code@_@astro":"pages/blogs/how-i-use-claude-code.astro.mjs","\u0000@astro-page:src/pages/blogs/i-built-a-startup-at-18@_@astro":"pages/blogs/i-built-a-startup-at-18.astro.mjs","\u0000@astro-page:src/pages/blogs/indexold@_@astro":"pages/blogs/indexold.astro.mjs","\u0000@astro-page:src/pages/blogs/RNNs@_@astro":"pages/blogs/rnns.astro.mjs","\u0000@astro-page:src/pages/blogs/index@_@astro":"pages/blogs.astro.mjs","\u0000@astro-page:src/pages/indexold@_@astro":"pages/indexold.astro.mjs","\u0000@astro-page:src/pages/notes/3rd_sem/dsa/unit1@_@astro":"pages/notes/3rd_sem/dsa/unit1.astro.mjs","\u0000@astro-page:src/pages/notes/3rd_sem/dsa/unit2@_@astro":"pages/notes/3rd_sem/dsa/unit2.astro.mjs","\u0000@astro-page:src/pages/notes/3rd_sem/dsa/unit3@_@astro":"pages/notes/3rd_sem/dsa/unit3.astro.mjs","\u0000@astro-page:src/pages/notes/3rd_sem/dsa/unit4@_@astro":"pages/notes/3rd_sem/dsa/unit4.astro.mjs","\u0000@astro-page:src/pages/notes/index@_@astro":"pages/notes.astro.mjs","\u0000@astro-page:src/pages/project/index@_@astro":"pages/project.astro.mjs","\u0000@astro-page:src/pages/project@_@astro":"pages/project.astro2.mjs","\u0000@astro-page:src/pages/projectold@_@astro":"pages/projectold.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/research@_@astro":"pages/research.astro.mjs","\u0000@astro-page:src/pages/work@_@astro":"pages/work.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BYSOQ0Am.mjs","/astro/hoisted.js?q=0":"_astro/hoisted._bowq0tv.js","/astro/hoisted.js?q=1":"_astro/hoisted.CCiZm1IT.js","/astro/hoisted.js?q=2":"_astro/hoisted.DubrSFP_.js","/astro/hoisted.js?q=3":"_astro/hoisted.CyuFsrvZ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/RNNs.yVy8xT-P.css","/favicon.ico","/favicon1.ico","/favicon2.ico","/sitemap.xml","/_astro/hoisted.CCiZm1IT.js","/_astro/hoisted.CyuFsrvZ.js","/_astro/hoisted.DubrSFP_.js","/_astro/hoisted._bowq0tv.js","/_astro/index.astro_astro_type_script_index_0_lang.KUryc4Xb.js","/images/arxiv.png","/images/bgitagpt.png","/images/bhairav.jpg","/images/bhairav1.jpg","/images/blog.png","/images/blog_add.jpg","/images/crais.jpeg","/images/ddok.png","/images/eunice-cli.png","/images/feynman.png","/images/mailstone.png","/images/mediaforge.png","/images/notesai.png","/images/notesai1.png","/images/pesuio.png","/images/resume.png","/images/rnn.png","/images/rnn_bptt.png","/images/rowboat_labs_logo.jpg","/images/ytmindmap.png","/images/ztutor-logo.png","/images/ztutor.png","/research/aria.pdf","/blogs/education-needs-change/index.html","/blogs/how-i-use-claude-code/index.html","/blogs/i-built-a-startup-at-18/index.html","/blogs/indexold/index.html","/blogs/RNNs/index.html","/blogs/index.html","/indexold/index.html","/notes/3rd_sem/dsa/unit1/index.html","/notes/3rd_sem/dsa/unit2/index.html","/notes/3rd_sem/dsa/unit3/index.html","/notes/3rd_sem/dsa/unit4/index.html","/notes/index.html","/project/index.html","/project/index.html","/projectold/index.html","/projects/index.html","/research/index.html","/work/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"CE5AeaEkYF0dUf8p6YXMcIGZEVm2B2Bl+hZTleYUKBQ=","experimentalEnvGetSecretEnabled":false});

export { manifest };
