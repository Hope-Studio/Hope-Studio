if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-c81aca33"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.c09599a0.css",revision:"3185f00c7c0db4598a5bb6eb6efcdde0"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/19.a70accd7.js",revision:"aed52a71d2ba1867c2dce700a279a9f0"},{url:"assets/js/app.1f1567ba.js",revision:"00ecc500227d177f1dbe4badb5393ba7"},{url:"assets/js/layout-Blog.8d857b6f.js",revision:"c82985492280877f81d1605034cfb075"},{url:"assets/js/layout-Layout.21eb7cb4.js",revision:"09d6a1af91939b6cbf81f1e0e475345a"},{url:"assets/js/layout-NotFound.8bcbe73f.js",revision:"ac27bd3d01ceb26bcc4aadfca4335316"},{url:"assets/js/layout-Slide.fabb7f9b.js",revision:"80668b7577dfd763d28e43b95f2412ac"},{url:"assets/js/page-主要内容.2c14110c.js",revision:"f55255d9dba9ad1ffbba46251edc62bd"},{url:"assets/js/page-学习资源.7c6bcb38.js",revision:"728f200cc5c2a2d594b91933bfed6f8b"},{url:"assets/js/page-工作室介绍.f1ce2426.js",revision:"5a2c174b37b97a2bd331e93cb78c8d7e"},{url:"assets/js/page-工作室招新.b30259c1.js",revision:"7c928c9eb54db6052debdfc633a89b80"},{url:"assets/js/page-希望工作室.4d639823.js",revision:"3f39f51f2f8eb22b9b6750a77139d732"},{url:"assets/js/page-情况说明.6d84dd27.js",revision:"de58d1d845432b636c248c2eaed58a37"},{url:"assets/js/page-招新要求.96ce3e38.js",revision:"7d0cbd8e04e18006238997bd844acac6"},{url:"assets/js/vendors~layout-Blog~layout-Layout.9aaff2e3.js",revision:"83c7c65150aca3cd5b820b05d39af305"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.151b5591.js",revision:"6d244c3e982a88a3166cf38be3890940"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.cc782302.js",revision:"129fbc85bc61f2ba4f2f366d5a8b3915"},{url:"assets/js/vendors~photo-swipe.3bbae270.js",revision:"c5591e4121aa5df6dfd38682a34cd779"},{url:"assets/js/vendors~reveal.5b6e7d41.js",revision:"7e6d4b3b1c79a930fe413060121e8e86"},{url:"assets/js/vendors~waline.62f4ebce.js",revision:"9138d420cc7d4c425e8793fc8e6183ef"},{url:"404.html",revision:"e241568344b52625ebc44aa3b0655dde"},{url:"about/index.html",revision:"fc7c66a3d22d32c10854199e258a5428"},{url:"article/index.html",revision:"3b2188dd0dc7eb605f0acf2d44b33aad"},{url:"category/index.html",revision:"06564984928636f8978a430e7472d3aa"},{url:"encrypt/index.html",revision:"e794eb879cf4ff9daa3dd802709f9aa7"},{url:"index.html",revision:"71ea4ce53e0acbdb658e653ae6d33284"},{url:"invite/content/index.html",revision:"b8309796c5003582825a8d9b9cd32962"},{url:"invite/index.html",revision:"2a0c5694b8f7b84ce3d4183f970de9d4"},{url:"invite/need/index.html",revision:"ae5c29e8365cfa568b05a70c29d320d5"},{url:"invite/notice/index.html",revision:"83b3659f685e7a5d6fa46139320e43d2"},{url:"resource/index.html",revision:"8cf15750ba72b90bf09f438351339e5f"},{url:"slide/index.html",revision:"415fcc26a99cd6b62640ac3e6d49a157"},{url:"star/index.html",revision:"4cb9c477f2b6b724c2af95d3512c04b1"},{url:"tag/index.html",revision:"44b238a0a0238f0e76dd414d523ab379"},{url:"timeline/index.html",revision:"c02cf67381a8f83bd289fdc3c0bbf8ea"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
