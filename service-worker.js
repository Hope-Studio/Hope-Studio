if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const t=e=>a(e,r),o={module:{uri:r},exports:i,require:t};s[r]=Promise.all(c.map((e=>o[e]||t(e)))).then((e=>(d(...e),i)))}}define(["./workbox-24a20688"],(function(e){"use strict";e.setCacheNameDetails({prefix:"希望工作室"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.a024d679.js",revision:"4bdca5e2c76da0568bdafc113edf7019"},{url:"assets/404.html.d212afeb.js",revision:"88fec3d2570c9b5f716a3545a060327a"},{url:"assets/about.html.48140d25.js",revision:"e16f838d74e3d8d87263a168a456a3c8"},{url:"assets/about.html.75c73310.js",revision:"36040e6ec8a36a1f0097b078dbed7980"},{url:"assets/app.9616a2e9.js",revision:"89fb04879f2fdb140b9bd03c37f9686e"},{url:"assets/content.html.06b12c3b.js",revision:"30641088270eefed7ae96203538abfd7"},{url:"assets/content.html.65a8c793.js",revision:"5a332e25c5c76a53e2e4b5e5f90a6341"},{url:"assets/index.html.5b820dec.js",revision:"43fedbadd99a782cf7c1d64a23687cc3"},{url:"assets/index.html.76d17c97.js",revision:"b5dce1652c0c7c4c77d1b0a991199840"},{url:"assets/index.html.7b24429e.js",revision:"2bda7ad1a2e553983dc75dd6eb2c9430"},{url:"assets/index.html.8f5d27d8.js",revision:"ddcbda7860fdff47950aa712d6a835eb"},{url:"assets/index.html.aa238a99.js",revision:"5e60bc5c552c0b39b15b89e6e4db6c70"},{url:"assets/index.html.fd26c547.js",revision:"d2b5e202b1d8a8dae08c1824829fcdf2"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.36cfeb92.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/need.html.66564885.js",revision:"5a26803bed86230dfd6392c7be00e5ac"},{url:"assets/need.html.fdd8e871.js",revision:"d60806919e69ce1f74011b6e3b7042ad"},{url:"assets/notice.html.c61ed35f.js",revision:"5b899acdb1e2dcf80f79268b71ccaec3"},{url:"assets/notice.html.d1a39d7e.js",revision:"e31367a8426a654874c34a5dd403849c"},{url:"assets/photoswipe.esm.a73472bf.js",revision:"a161e9f0f413b7279a37a1b80c9d0cf2"},{url:"assets/reveal.esm.e6b6f4fd.js",revision:"2ae13f3f401294fee79646ed1f70afec"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.4481c530.css",revision:"1aa587f62a3e38a60a393391064a335d"},{url:"assets/waline-meta.1d122caf.js",revision:"614e9510b9a7a9c2164ae5827a7649f4"},{url:"index.html",revision:"1b02a0cd86db527d45fc4ca7f6d97614"},{url:"404.html",revision:"0d9402141d6a44e9a6ae49939611be9c"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
