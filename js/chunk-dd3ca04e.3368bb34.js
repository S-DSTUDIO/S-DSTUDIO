(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd3ca04e"],{"244d":function(t,a,s){t.exports=s.p+"img/s-d-logo_white.8cf85001.png"},8054:function(t,a,s){t.exports=s.p+"img/s-d-logo_black.995d2871.png"},bb51:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"home"},[n("Loading",{attrs:{isLoading:t.isLoading}}),n("nav",{staticClass:"navbar navbar-expand-sm justify-content-between"},[n("h1",{staticClass:"mb-0 navbar-brand"},[n("router-link",{class:{"text-black":"contact"==t.nowNav||"series"==t.nowNav},attrs:{to:"/"}},[t._v("S-D STUDIO")])],1),n("button",{staticClass:"btn d-block d-md-none px-0",attrs:{type:"button"},on:{click:function(a){t.isNavOpen=!t.isNavOpen}}},[n("i",{staticClass:"fas fa-bars text-white",class:{"text-black":"contact"==t.nowNav||"series"==t.nowNav}})]),n("div",{staticClass:"flex-row-reverse",class:{active:t.isNavOpen},attrs:{id:"mainNavbar"}},[n("ul",{staticClass:"d-sm-flex main-item"},[n("li",{staticClass:"d-block d-md-none"},[n("span",{staticClass:"text-white text-right",on:{click:function(a){t.isNavOpen=!t.isNavOpen}}},[t._v("×")])]),n("li",[n("router-link",{staticClass:"nav-item line-style",class:{black:"contact"==t.nowNav||"series"==t.nowNav,"line-on":"home"==t.nowNav},attrs:{to:"/"},nativeOn:{click:function(a){t.isNavOpen=!t.isNavOpen}}},[t._v(" HOME ")])],1),n("li",[n("router-link",{staticClass:"nav-item line-style",class:{black:"contact"==t.nowNav||"series"==t.nowNav,"line-on":"projects"==t.nowNav},attrs:{to:"/projects/all"},nativeOn:{click:function(a){t.isNavOpen=!t.isNavOpen}}},[t._v(" PROJECTS ")])],1),n("li",[n("router-link",{staticClass:"nav-item line-style",class:{black:"contact"==t.nowNav||"series"==t.nowNav,"line-on":"post"==t.nowNav},attrs:{to:"/postproduction/all"},nativeOn:{click:function(a){t.isNavOpen=!t.isNavOpen}}},[t._v(" POST-PRODUCTION ")])],1),n("li",[n("router-link",{staticClass:"nav-item line-style",class:{black:"contact"==t.nowNav||"series"==t.nowNav,"line-on":"film"==t.nowNav},attrs:{to:"/film/all"},nativeOn:{click:function(a){t.isNavOpen=!t.isNavOpen}}},[t._v(" FILM ")])],1),n("li",[n("router-link",{staticClass:"nav-item line-style",class:{black:"contact"==t.nowNav||"series"==t.nowNav,"line-on":"contact"==t.nowNav},attrs:{to:"/contact"},nativeOn:{click:function(a){t.isNavOpen=!t.isNavOpen}}},[t._v(" CONTACT ")])],1)])])]),n("router-view"),n("footer",{staticClass:"bg-black px-4 px-md-0 d-flex d-lg-block justify-content-md-center",class:{"white-style":"single"==t.nowNav}},[n("ul",{staticClass:"d-flex justify-content-center align-items-lg-center text-white"},[n("li",{staticClass:"d-flex align-items-center basic-info spacing"},[t.isWhite?n("img",{attrs:{src:s("244d"),alt:"S-D STUDIO Logo"}}):n("img",{attrs:{src:s("8054"),alt:"S-D STUDIO Logo"}}),t._m(0)]),t._m(1),t._m(2)])]),n("div",{staticClass:"to-top",class:{active:1==t.toTop},on:{click:t.scrollToTop}},[t._m(3)])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("思帝影像事業企業社")]),s("li",[t._v("S-D STUDIO")]),s("li",{staticClass:"social"},[s("a",{attrs:{href:"https://www.facebook.com/selfdirectedstudio",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook-f"})]),s("a",{attrs:{href:"https://www.youtube.com/channel/UCGawabA6bnVLKxzzDdd5r0Q",target:"_blank"}},[s("i",{staticClass:"fab fa-youtube"})]),s("a",{attrs:{href:"https://www.instagram.com/selfdirectedstudio/",target:"_blank"}},[s("i",{staticClass:"fab fa-instagram"})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"address spacing"},[s("p",[t._v(" 710 台南市永康區富強路一段98巷38弄3號 "),s("br"),t._v("1F., No. 3, Aly. 38, Ln. 98, "),s("br"),t._v("Sec. 1, Fuqiang Rd., Yongkang Dist., Taiwan ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"email spacing"},[s("p",[t._v("sdstudio@sdstudiotw.com")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"btn-style"},[s("i",{staticClass:"fas fa-arrow-up"})])}],e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"loader",class:{active:1==t.isLoading}},[t._m(0)])},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bouncing-loader"},[s("div"),s("div"),s("div")])}],c={props:["isLoading"]},l=c,r=(s("e1f9"),s("2877")),v=Object(r["a"])(l,e,o,!1,null,"8110b3b4",null),u=v.exports,d={data:function(){return{nowNav:"home",toTop:!1,isWhite:!0,isLoading:!1,isNavOpen:!1}},components:{Loading:u},methods:{scrollBtn:function(){var t=window.scrollY;t>500?this.toTop=!0:t<500&&(this.toTop=!1)},scrollToTop:function(){$("html,body").animate({scrollTop:0},500)}},created:function(){var t=this;t.$bus.$on("changeNav",(function(a){t.nowNav=a,t.isWhite=!0,"single"===a&&(t.isWhite=!1)})),t.$bus.$on("loading",(function(a){t.isLoading=a}))},mounted:function(){window.addEventListener("scroll",this.scrollBtn)}},f=d,p=Object(r["a"])(f,n,i,!1,null,null,null);a["default"]=p.exports},bead:function(t,a,s){},e1f9:function(t,a,s){"use strict";s("bead")}}]);
//# sourceMappingURL=chunk-dd3ca04e.3368bb34.js.map