if(!self.define){let e,n={};const a=(a,s)=>(a=new URL(a+".js",s).href,n[a]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=n,document.head.appendChild(e)}else e=a,importScripts(a),n()})).then((()=>{let e=n[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let i={};const b=e=>a(e,c),r={module:{uri:c},exports:i,require:b};n[c]=Promise.all(s.map((e=>r[e]||b(e)))).then((e=>(t(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/lab/next/_next/static/6qGmVNH_-TDT0__OnyEAC/_buildManifest.js",revision:"4b5dba267b84d82e4c69105caa642034"},{url:"/lab/next/_next/static/6qGmVNH_-TDT0__OnyEAC/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/lab/next/_next/static/chunks/279.8265cf893f293717.js",revision:"8265cf893f293717"},{url:"/lab/next/_next/static/chunks/848.8f0dc669fbdb30b1.js",revision:"8f0dc669fbdb30b1"},{url:"/lab/next/_next/static/chunks/884.a979473e4febfbb5.js",revision:"a979473e4febfbb5"},{url:"/lab/next/_next/static/chunks/fb7d5399.bbf0b1b140446299.js",revision:"bbf0b1b140446299"},{url:"/lab/next/_next/static/chunks/framework-26e25db8f64defed.js",revision:"26e25db8f64defed"},{url:"/lab/next/_next/static/chunks/main-b0022a438d57af40.js",revision:"b0022a438d57af40"},{url:"/lab/next/_next/static/chunks/pages/_app-e51fd25451b41e31.js",revision:"e51fd25451b41e31"},{url:"/lab/next/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/lab/next/_next/static/chunks/pages/hello-9f265be8f6faad3f.js",revision:"9f265be8f6faad3f"},{url:"/lab/next/_next/static/chunks/pages/index-b18b6189479c4374.js",revision:"b18b6189479c4374"},{url:"/lab/next/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/lab/next/_next/static/chunks/webpack-8839a2cebe954150.js",revision:"8839a2cebe954150"},{url:"/lab/next/_next/static/css/0629a9b39eed2cc6.css",revision:"0629a9b39eed2cc6"},{url:"/lab/next/_next/static/css/938b3bd2985a4b5b.css",revision:"938b3bd2985a4b5b"},{url:"/lab/next/_next/static/css/d638e8c312605b14.css",revision:"d638e8c312605b14"},{url:"/lab/next/_next/static/media/2aaf0723e720e8b9.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/lab/next/_next/static/media/9c4f34569c9b36ca.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/lab/next/_next/static/media/ae9ae6716d4f8bf8.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/lab/next/_next/static/media/b1db3e28af9ef94a.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/lab/next/_next/static/media/b967158bc7d7a9fb.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/lab/next/_next/static/media/c0f5ec5bbf5913b7.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/lab/next/_next/static/media/d1d9458b69004127.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/lab/next/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/lab/next/icons/android-icon-192x192.png",revision:"9f29f1d7c8f6da2d2e64bce1d3136d3f"},{url:"/lab/next/icons/android-icon-512x512.png",revision:"9f29f1d7c8f6da2d2e64bce1d3136d3f"},{url:"/lab/next/icons/apple-touch-icon.png",revision:"538a91302401ac461adfe1b509181921"},{url:"/lab/next/icons/favicon-16x16.png",revision:"5998cde017dee1b68827ac575ce6a300"},{url:"/lab/next/icons/favicon-32x32.png",revision:"2a82680a8c270c3ad4b8341f5ef897f8"},{url:"/lab/next/icons/favicon.ico",revision:"4106c96e0a55d35b1b13fa4281a907b7"},{url:"/lab/next/icons/safari-pinned-tab.svg",revision:"5876746bbc008fdab40fd1abf568ca6b"},{url:"/lab/next/icons/share.png",revision:"f04a8d2b41543ef4669c07e6d04e2d94"},{url:"/lab/next/manifest.json",revision:"07bd2b8de94427b153bc33cf75333600"},{url:"/lab/next/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/lab/next/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/lab/next/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/lab/next",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:a,state:s})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
