if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-a3b6cda6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.6daf3ceb.css",revision:"4414770c1f939399c145f4c475ed7298"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/20.28b3c59b.js",revision:"8936b19d4b9d38eab483382d14a7279a"},{url:"assets/js/21.9898108f.js",revision:"9fc31a0ddde85e72f0cd8169034e5b75"},{url:"assets/js/22.b29de803.js",revision:"15a253868f6e6e6fb9a5eeee6a870b4a"},{url:"assets/js/23.c570e496.js",revision:"4020856fcda5a4df6ebb2184ed1c5319"},{url:"assets/js/24.0a0618de.js",revision:"d5656d994749414404ec362788e084e0"},{url:"assets/js/app.987ee321.js",revision:"a6428ef24d3545571a7ae120874b8b6f"},{url:"assets/js/layout-Blog.e895ae5e.js",revision:"db43efdd67a47cb407d73804e85ee792"},{url:"assets/js/layout-Layout.6f9808d2.js",revision:"dcb9009cfee07caebdfade19a6337ff0"},{url:"assets/js/layout-NotFound.7e514ed0.js",revision:"920e857d18acafc29112b5c6b6ccab82"},{url:"assets/js/layout-Slide.3fcaff95.js",revision:"89a8b48328f3736c448cab97f4cc9fc1"},{url:"assets/js/page-主要内容.21c082b3.js",revision:"3bfd384a008e6205db4b00be5eb1e1ed"},{url:"assets/js/page-学习资源.9b4458cf.js",revision:"0d0a3f52e3f7db2523083842acf7bb66"},{url:"assets/js/page-工作室介绍.bc75364f.js",revision:"2a53aeabdf18d518c14611e5406bb9d4"},{url:"assets/js/page-工作室招新.9da67452.js",revision:"1370d1f78ca0c2a7f2880c2a546865a7"},{url:"assets/js/page-希望工作室.e1634dfb.js",revision:"d89681329d53a78eabdad178005f7f39"},{url:"assets/js/page-情况说明.2e32438e.js",revision:"bb29731d8fe037e4a57e1b911c741d77"},{url:"assets/js/page-招新要求.06b97222.js",revision:"b5808da07146d37b8bd490f8a975d714"},{url:"assets/js/vendors~flowchart.3e2e28ee.js",revision:"30f680e671bba04b6e22908930fe0508"},{url:"assets/js/vendors~layout-Blog~layout-Layout.2367418e.js",revision:"37b268b951e947da449b77b356e7f2bc"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.09af6070.js",revision:"dd9c1364ca47d08ff651a0f42fc00b24"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.f2e900a5.js",revision:"15ba50c8550274301d0c12ae0dab3f61"},{url:"assets/js/vendors~photo-swipe.46ef9aef.js",revision:"2b9f3a871a371853f2d95d1aa4787bc0"},{url:"assets/js/vendors~reveal.963b0700.js",revision:"a088ab4b3d415ab95d4b0058348fef1f"},{url:"assets/js/vendors~valine.754fd3e9.js",revision:"eeff528cec0ad785474a32b18c15ad79"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"9e1ec37b7fffa64f00aac2f93b61a34a"},{url:"about/index.html",revision:"71799839cae3833fc5fd37b0696035b4"},{url:"article/index.html",revision:"1dbdd6143fcbd2574491f30a0fcc2c98"},{url:"category/index.html",revision:"3ea3641093410adcb278a9db491b96a6"},{url:"encrypt/index.html",revision:"9e2f0e13f0f78fbe63fb5f7ec6b748e5"},{url:"index.html",revision:"9e8366edb6db5a6d1c819772515db625"},{url:"invite/content/index.html",revision:"a3e166cfcb74dd85925daf847e5f8863"},{url:"invite/index.html",revision:"508698aed28b7207d32967651cd89f2f"},{url:"invite/need/index.html",revision:"4606acaab374db961c5870bad37e5773"},{url:"invite/notice/index.html",revision:"9dc1a1528da4083e515c10ecc6b3e8bf"},{url:"resource/index.html",revision:"35b24730b4f83b6b8f922e4d1d1e7955"},{url:"slide/index.html",revision:"57178f9f63ee70f15a7b8c6b80a71744"},{url:"star/index.html",revision:"be7d2b844efbb8277c833b7a01d8862f"},{url:"tag/index.html",revision:"0b9828f4454313620ae66c466b30eba7"},{url:"timeline/index.html",revision:"f6ea70d91f0568e4fd99a2c86c954754"}],{}),e.cleanupOutdatedCaches()}));
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
