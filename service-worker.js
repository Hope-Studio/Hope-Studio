if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-13431ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.6b9facff.css",revision:"c426f4463cdce74aafb0edcc3d66463e"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/19.fb93c61c.js",revision:"b19b1da3f2c2c64ad7b361affc03d5b9"},{url:"assets/js/app.40fe915c.js",revision:"037818f8f5ff8b5a50f20f553d0001e1"},{url:"assets/js/layout-Blog.6081a024.js",revision:"eaa0d2c90752a2756f8958282f793190"},{url:"assets/js/layout-Layout.8ff0b7df.js",revision:"2f6c0725a4425c7440fe13e01412926c"},{url:"assets/js/layout-NotFound.23c62638.js",revision:"eaa155473cc6474236805723da3c492d"},{url:"assets/js/layout-Slide.71798ef0.js",revision:"3179ac60054ad7066c2e76824f315859"},{url:"assets/js/page-主要内容.3dc988a6.js",revision:"8fd098076416a5dd969894502474c0ec"},{url:"assets/js/page-学习资源.134fa4b4.js",revision:"b15948024fd3a1fa094fb2f7c776088c"},{url:"assets/js/page-工作室介绍.22e5ffcb.js",revision:"3d2c4350a9e12786e64a91d850fc716f"},{url:"assets/js/page-工作室招新.6d6bc384.js",revision:"c2f517f768963a0612091ca92e1590f4"},{url:"assets/js/page-希望工作室.c2f6a587.js",revision:"006bddd103d7b4b4602f34086295baf2"},{url:"assets/js/page-情况说明.e84afce8.js",revision:"e40b316b551d5812a796e583d5d966ec"},{url:"assets/js/page-招新要求.46057372.js",revision:"608a02f449fb0bc26a4158b388570db2"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.76ecfdf9.js",revision:"8751857352e0fb4a5d876983aecf622c"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.d73940e9.js",revision:"32a673f1eb61d1ba24dabe72a39ac684"},{url:"assets/js/vendors~layout-Layout.1c62060b.js",revision:"20e5ca7ee8df0b104202450dfc843dc0"},{url:"assets/js/vendors~photo-swipe.f1c28b90.js",revision:"5b6d8c0654a4c3debf4b81fdde1524fe"},{url:"assets/js/vendors~reveal.50a2d934.js",revision:"d7fd84661531e307150d8abe7aa777f7"},{url:"assets/js/vendors~waline.547a1df0.js",revision:"7dec00822525f5860f3fc90ec050cace"},{url:"404.html",revision:"b4f8a273e2b93376b10fb6022ee1195f"},{url:"about/index.html",revision:"a09dc9b5181c2c4ad6b0b2f0cf8c9787"},{url:"article/index.html",revision:"945f3187aecbf93f44e8f9784d83093c"},{url:"category/index.html",revision:"c97f62e633c37b1373af07c5bcf9e7cd"},{url:"encrypt/index.html",revision:"b275209a358c570ba70470487b29f25a"},{url:"index.html",revision:"62a1f6834abea461f070d7506b4f3466"},{url:"invite/content/index.html",revision:"8e9b7c1cf361a58228c89877ac6d0aae"},{url:"invite/index.html",revision:"6951ae2d8aec234315e5f0941f914eed"},{url:"invite/need/index.html",revision:"b0671c86dfef784b45b3448e94ffb253"},{url:"invite/notice/index.html",revision:"114599a9ae0a9fa2511f72777e1d9c27"},{url:"resource/index.html",revision:"913bd76159b3745cd9a2fc0781ff5736"},{url:"slide/index.html",revision:"33decc255865163cab562961ff70db07"},{url:"star/index.html",revision:"dcbb3af0b0079bb171eeb05043c00686"},{url:"tag/index.html",revision:"48b270702230dc04e244597666951212"},{url:"timeline/index.html",revision:"45a284353691232add25eb289f502d04"}],{}),e.cleanupOutdatedCaches()}));
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
