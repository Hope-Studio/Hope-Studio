if(!self.define){let e,s={};const a=(a,r)=>(a=new URL(a+".js",r).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let f={};const d=e=>a(e,i),t={module:{uri:i},exports:f,require:d};s[i]=Promise.all(r.map((e=>t[e]||d(e)))).then((e=>(c(...e),f)))}}define(["./workbox-24a20688"],(function(e){"use strict";e.setCacheNameDetails({prefix:"希望工作室"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.64b51653.js",revision:"b739482d42e56b3a9157515f1d1fde53"},{url:"assets/404.html.a3bce0de.js",revision:"0c86c9ebdf365fb8e1af86360ab6a375"},{url:"assets/about.html.43f79c89.js",revision:"ad30a93d2b9e21535ac021cc3fa1af8f"},{url:"assets/about.html.5c09a331.js",revision:"a371cd7f1ef6d73d11dc3363ed0a5701"},{url:"assets/app.73ae010d.js",revision:"e05811b62eed3e83af669ae6ff686fc7"},{url:"assets/content.html.77cd479e.js",revision:"5e42ce15ef1aa88af7e31464598dba56"},{url:"assets/content.html.93a3f911.js",revision:"d7ebe79811563fb0670841546cc6b13d"},{url:"assets/index.html.255e06b7.js",revision:"c92183a247a293d43846b5cff4bcb26f"},{url:"assets/index.html.5155290b.js",revision:"c39c4d8480f9cedb4a524e223d04204b"},{url:"assets/index.html.ae6ff060.js",revision:"c61ff3139d92d64214e2f975ae549449"},{url:"assets/index.html.b2502976.js",revision:"61fb95de52b551731092812d94405722"},{url:"assets/index.html.b45cd08f.js",revision:"53b05fb813ec7b052135c7910b82d4da"},{url:"assets/index.html.ebe005fc.js",revision:"fdf455082081eb546521dd536448592a"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.36cfeb92.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/need.html.06e3ce88.js",revision:"8eaee9c05834cb7b782e5d922edfa4f6"},{url:"assets/need.html.d8b768dd.js",revision:"29984351c84fa0178a2ba4fe7f15e467"},{url:"assets/notice.html.3a4a59e0.js",revision:"6c945e4e6516be934a6cb78bc33788eb"},{url:"assets/notice.html.fe1e3797.js",revision:"4f3d31aae432edf2a55f661e2878aad8"},{url:"assets/photoswipe.esm.09e03fed.js",revision:"317c562e1a4f43455c48b2cc085d9520"},{url:"assets/reveal.esm.e6b6f4fd.js",revision:"2ae13f3f401294fee79646ed1f70afec"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.02c8190a.css",revision:"166d3ad3ab282f0352feb04bc4ba1ec6"},{url:"assets/waline-meta.eb136eb5.js",revision:"614e9510b9a7a9c2164ae5827a7649f4"},{url:"index.html",revision:"b2e7770db9e60735c172410c5dfcf4bb"},{url:"404.html",revision:"ffd1df4c972c2670cadb25bc850446da"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
