(function(e){function n(n){for(var r,a,u=n[0],i=n[1],l=n[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(d.length)d.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==c[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4b86ef03":"d24355f3","chunk-8e26c8b2":"7a8484fb","chunk-399b7ec8":"58510642","chunk-a993adc0":"dbf7f696","chunk-faa6ef4e":"2a4e08f7","chunk-9ae79764":"a8858598","chunk-dd3ca04e":"74fe27e5"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-4b86ef03":1,"chunk-399b7ec8":1,"chunk-a993adc0":1,"chunk-faa6ef4e":1,"chunk-9ae79764":1,"chunk-dd3ca04e":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-4b86ef03":"269dadea","chunk-8e26c8b2":"31d6cfe0","chunk-399b7ec8":"9e821bac","chunk-a993adc0":"6dbbb612","chunk-faa6ef4e":"6dbbb612","chunk-9ae79764":"bbfa4db1","chunk-dd3ca04e":"a3a7bea1"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===c))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],f=l.getAttribute("data-href");if(f===r||f===c)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],s.parentNode.removeChild(s),t(o)},s.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(s)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=o);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var d=new Error;l=function(n){f.onerror=f.onload=null,clearTimeout(s);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,t[1](d)}c[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/S-DSTUDIO/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var s=f;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var r=t("5530"),a=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("ac1f"),t("841c"),t("1157")),c=t.n(a),o=t("2b0e"),u=t("bc3a"),i=t.n(u),l=t("2106"),f=t.n(l);o["default"].prototype.$bus=new o["default"];var d=t("7bb1"),s=t("4c93"),h=t("f8c5"),p=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));o["default"].use(p["a"]);var b=new p["a"]({routes:[{path:"/",name:"Home",component:function(){return t.e("chunk-dd3ca04e").then(t.bind(null,"bb51"))},children:[{path:"",name:"Index",component:function(){return t.e("chunk-4b86ef03").then(t.bind(null,"d504"))}},{path:"projects/:id",name:"Projects",component:function(){return Promise.all([t.e("chunk-8e26c8b2"),t.e("chunk-faa6ef4e")]).then(t.bind(null,"acca"))}},{path:"postproduction/:id",name:"PostProduction",component:function(){return Promise.all([t.e("chunk-8e26c8b2"),t.e("chunk-a993adc0")]).then(t.bind(null,"1f90"))}},{path:"singleproject/:id",name:"Singleproject",component:function(){return Promise.all([t.e("chunk-8e26c8b2"),t.e("chunk-399b7ec8")]).then(t.bind(null,"76fc"))}},{path:"contact",name:"Contact",component:function(){return t.e("chunk-9ae79764").then(t.bind(null,"b8fa"))}}]}]}),m=b,v=(t("4989"),t("6cc5"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),g=[],k=(t("5c0b"),t("2877")),y={},w=Object(k["a"])(y,v,g,!1,null,null,null),j=w.exports;window.$=c.a,o["default"].config.productionTip=!1,o["default"].use(f.a,i.a),o["default"].component("ValidationProvider",d["b"]),o["default"].component("ValidationObserver",d["a"]),Object(d["c"])("required",Object(r["a"])(Object(r["a"])({},s["a"]),{},{message:"此欄不可為空"})),Object(d["c"])("email",{validate:function(e){var n=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;if(-1!==e.search(n))return!0},message:"請填寫正確的格式"}),Object(d["c"])("tel",{validate:function(e){return e.length>=9},message:"請填寫正確的格式"}),Object(h["b"])("user_5mf4rr6Yb80SVwTnTfOGT"),new o["default"]({router:m,render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.d2e7939d.js.map