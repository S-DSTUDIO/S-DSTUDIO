(function(e){function n(n){for(var r,a,u=n[0],i=n[1],l=n[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(f.length)f.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==c[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4b86ef03":"44762a54","chunk-8e26c8b2":"7a8484fb","chunk-36c67f54":"0e5c226c","chunk-72322f0e":"91fbadff","chunk-77da52ad":"01e6563b","chunk-9ae79764":"46ea24ba","chunk-dd3ca04e":"34b83c0a"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-4b86ef03":1,"chunk-36c67f54":1,"chunk-72322f0e":1,"chunk-77da52ad":1,"chunk-9ae79764":1,"chunk-dd3ca04e":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-4b86ef03":"269dadea","chunk-8e26c8b2":"31d6cfe0","chunk-36c67f54":"9e821bac","chunk-72322f0e":"6dbbb612","chunk-77da52ad":"6dbbb612","chunk-9ae79764":"bbfa4db1","chunk-dd3ca04e":"a3a7bea1"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===c))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],d=l.getAttribute("data-href");if(d===r||d===c)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],s.parentNode.removeChild(s),t(o)},s.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(s)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;l=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}c[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/S-DSTUDIO/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var s=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var r=t("5530"),a=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("ac1f"),t("841c"),t("1157")),c=t.n(a),o=t("2b0e"),u=t("bc3a"),i=t.n(u),l=t("2106"),d=t.n(l);o["default"].prototype.$bus=new o["default"];var f=t("7bb1"),s=t("4c93"),h=t("f8c5"),p=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));o["default"].use(p["a"]);var b=new p["a"]({routes:[{path:"/",name:"Home",component:function(){return t.e("chunk-dd3ca04e").then(t.bind(null,"bb51"))},children:[{path:"",name:"Index",component:function(){return t.e("chunk-4b86ef03").then(t.bind(null,"d504"))}},{path:"projects/:id",name:"Projects",component:function(){return Promise.all([t.e("chunk-8e26c8b2"),t.e("chunk-72322f0e")]).then(t.bind(null,"acca"))}},{path:"postproduction/:id",name:"PostProduction",component:function(){return Promise.all([t.e("chunk-8e26c8b2"),t.e("chunk-77da52ad")]).then(t.bind(null,"1f90"))}},{path:"singleproject/:id",name:"Singleproject",component:function(){return Promise.all([t.e("chunk-8e26c8b2"),t.e("chunk-36c67f54")]).then(t.bind(null,"76fc"))}},{path:"contact",name:"Contact",component:function(){return t.e("chunk-9ae79764").then(t.bind(null,"b8fa"))}}]}]}),m=b,v=(t("4989"),t("6cc5"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),g=[],k=(t("5c0b"),t("2877")),y={},w=Object(k["a"])(y,v,g,!1,null,null,null),j=w.exports;window.$=c.a,o["default"].config.productionTip=!1,o["default"].use(d.a,i.a),o["default"].component("ValidationProvider",f["b"]),o["default"].component("ValidationObserver",f["a"]),Object(f["c"])("required",Object(r["a"])(Object(r["a"])({},s["a"]),{},{message:"此欄不可為空"})),Object(f["c"])("email",{validate:function(e){var n=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;if(-1!==e.search(n))return!0},message:"請填寫正確的格式"}),Object(f["c"])("tel",{validate:function(e){return e.length>=9},message:"請填寫正確的格式"}),Object(h["b"])("user_5mf4rr6Yb80SVwTnTfOGT"),new o["default"]({router:m,render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.e5526aed.js.map