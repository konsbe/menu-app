if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),d={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B0kbNSQQ.css",revision:null},{url:"assets/index-DmjoARxL.js",revision:null},{url:"index.html",revision:"49f17d03575dfd8441bf73380224eaae"},{url:"registerSW.js",revision:"ed97b1c01a50041097a8df92fd0c8a7e"},{url:"icons/icon-192x192.png",revision:"94d331f12cc00945b253c21fda394ad7"},{url:"icons/icon-512x512.png",revision:"124e5c270523ec5bf2336e196ac0ffe0"},{url:"manifest.webmanifest",revision:"6e81ef1a908ad096970c9767cae0ca8b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));