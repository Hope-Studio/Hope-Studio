if(!self.define){let s,e={};const a=(a,c)=>(a=new URL(a+".js",c).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(c,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let f={};const d=s=>a(s,r),t={module:{uri:r},exports:f,require:d};e[r]=Promise.all(c.map((s=>t[s]||d(s)))).then((s=>(i(...s),f)))}}define(["./workbox-2572b17b"],(function(s){"use strict";s.setCacheNameDetails({prefix:"希望工作室"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.e518909e.js",revision:"c22d239a190820665e82e86543aabf7e"},{url:"assets/404.html.6372a999.js",revision:"20566b1123848d68cd10a2dadc5e6113"},{url:"assets/404.html.6a639a5a.js",revision:"a3955139a1c6c041e949aa67bb83e2db"},{url:"assets/about.html.72d1e83f.js",revision:"951a5f46884a8ec28ae122445a302350"},{url:"assets/about.html.790a564f.js",revision:"6d14eab0ec4018fb9b216521f9e5bdc8"},{url:"assets/app.3d191d86.js",revision:"a067c3e03e48a364497de584234236df"},{url:"assets/content.html.00bf489f.js",revision:"5fb5083cd2861ed1c4b17c4e7840a3f8"},{url:"assets/content.html.e5e37a28.js",revision:"ffaccc165faa306866494aa39fffeafa"},{url:"assets/index.html.0d59cfa3.js",revision:"0a144bd9516a2e4d1bdc6e4d79e58e2b"},{url:"assets/index.html.38009cc1.js",revision:"4f1ba2249c324b2ff2f907ecb5f1ab86"},{url:"assets/index.html.7477d574.js",revision:"06f4ff3bfba01e60a8027e5323c87832"},{url:"assets/index.html.ad27025a.js",revision:"da16ffe8b8318b2b2205c212a79e4337"},{url:"assets/index.html.ce608433.js",revision:"be32637f9e6421f9f20da74640c8d567"},{url:"assets/index.html.f31001e5.js",revision:"b748aa2709c8ea9774c1c1524ccc76ff"},{url:"assets/Layout.d24d59b2.js",revision:"646f2ff8835b7fd2606934105cd4834d"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.832a189d.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/need.html.8d6825db.js",revision:"089f6c562e6d31f7c7cd0a244725220b"},{url:"assets/need.html.9ac69dfb.js",revision:"95eaa65f9dda5dbbbe148e71df26c73e"},{url:"assets/notice.html.08a62ac3.js",revision:"37ca370cd1c41979c4293a2fb38564bf"},{url:"assets/notice.html.3c845df3.js",revision:"35fb2cb9c928191b9c37e92b23c71fa2"},{url:"assets/photoswipe.esm.092fbc15.js",revision:"061d11f047773ba6b19d1c9acb8c37b9"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/reveal.esm.b96f05d8.js",revision:"835fe5d11b24b0dc2193b11c893d234c"},{url:"assets/SkipLink.ead5eb8b.js",revision:"b6509f76928ae97123e2ca2fb3f543ad"},{url:"assets/Slide.db2f8b33.js",revision:"46b299bfb8d8b12aee452e980483bab3"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.f7f20891.css",revision:"24d0f166853116ccbb3a263a39c93c5c"},{url:"index.html",revision:"98a0a8cacf0e811605680e59d9ab8d5c"},{url:"404.html",revision:"91a9875bf233a57fa8de0fd56caabc0c"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
