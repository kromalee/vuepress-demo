/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "965fc9e7ea6dd3a05ddca412fe2d3a70"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "64e7898cfb3772c29adab4d98c93e261"
  },
  {
    "url": "assets/css/0.styles.4ffe7481.css",
    "revision": "6bc76693961b06f628653a0041712bfe"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0f12939f.js",
    "revision": "e57df8d4acceab0275457e295814c71b"
  },
  {
    "url": "assets/js/11.dee58499.js",
    "revision": "7d7abde9b2485d08819067bbbeafc5f7"
  },
  {
    "url": "assets/js/2.3a059302.js",
    "revision": "5e4cdb883de55d2db7c8597deba0770a"
  },
  {
    "url": "assets/js/3.0f555113.js",
    "revision": "53ff311b3c4aa267aa2828d80a401c10"
  },
  {
    "url": "assets/js/4.30bb3e5e.js",
    "revision": "3350dd9dff641efc22816cb17cae94d4"
  },
  {
    "url": "assets/js/5.bb741b98.js",
    "revision": "6d022585dcaad9a6ed4a02b96f0e7548"
  },
  {
    "url": "assets/js/6.4d619825.js",
    "revision": "1f82fd5cdd4e52eb8b0f20fcac30b228"
  },
  {
    "url": "assets/js/7.9dc03991.js",
    "revision": "7c75c8b5b784632ff9b9d35bc268ed57"
  },
  {
    "url": "assets/js/8.ef274357.js",
    "revision": "363c2ba4d3df9289a6afda26addfc9fa"
  },
  {
    "url": "assets/js/9.9534677b.js",
    "revision": "e30041750b15f065e7734ad1e614c2c1"
  },
  {
    "url": "assets/js/app.c829e94c.js",
    "revision": "91763d2bed536345114c139483aafb8a"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bbcb33fcb5c30a8823c3d1f1726a3e1e"
  },
  {
    "url": "guide/index.html",
    "revision": "d8defddeb36326b97194ff2e9f88bfef"
  },
  {
    "url": "guide/testGuide.html",
    "revision": "78f313cb08bc1ff59438088e66c926a3"
  },
  {
    "url": "icon/icon-128x128.png",
    "revision": "ba8adf3512b4745c910f0d2428f18ff8"
  },
  {
    "url": "icon/icon-144x144.png",
    "revision": "caf3fa68eb7536fcf76c4ae2186da40e"
  },
  {
    "url": "icon/icon-152x152.png",
    "revision": "60e4982a750b5eb464c15fef4abcc655"
  },
  {
    "url": "icon/icon-192x192.png",
    "revision": "523c0fb8f57f93b468e0ed78ecdf86e8"
  },
  {
    "url": "icon/icon-384x384.png",
    "revision": "c38228266f233432c21c871626ffaacd"
  },
  {
    "url": "icon/icon-512x512.png",
    "revision": "7f78124d42ce759625665a6b36ecba5b"
  },
  {
    "url": "icon/icon-72x72.png",
    "revision": "0f3cc531ed40a48f2dfaac0c236c173d"
  },
  {
    "url": "icon/icon-96x96.png",
    "revision": "220c53a703dfabc0bdbfa56063264a00"
  },
  {
    "url": "index.html",
    "revision": "ce1f359204cc039dff062c5d103848f2"
  },
  {
    "url": "logo.jpg",
    "revision": "d6443253ba4ca09982289a59c69cc2f3"
  },
  {
    "url": "test1/index.html",
    "revision": "eb0f3ee848f013decfba314684dec2e0"
  },
  {
    "url": "test1/testTest1.html",
    "revision": "7d776141b1f0db219f1060002eba3e4c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
