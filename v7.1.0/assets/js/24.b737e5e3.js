(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{564:function(e,n,t){},595:function(e,n,t){"use strict";t(564)},618:function(e,n,t){"use strict";t.r(n);var o=t(160),s={props:["topBanner"],data:function(){return{show:null}},mounted:function(){o.a("top-banner-hidden",!1)?this.show=!1:this.show=!0},methods:{close:function(){this.show=!1,o.b("top-banner-hidden",!0,{expires:"7D"})},beforeLeave:function(e){e.style.marginTop="-".concat(e.offsetHeight,"px")}}},r=(t(595),t(1)),a=Object(r.a)(s,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.$themeConfig.topbar.banner&&!0===e.$themeConfig.topbar.banner&&!e.$themeConfig.custom?t("div",[t("transition",{attrs:{name:"fade",appear:""},on:{"before-leave":e.beforeLeave}},[e.show?t("div",{staticClass:"banner"},[t("a",{staticClass:"banner__content",attrs:{href:e.topBanner.url,target:"_blank",rel:"noreferrer noopener"},domProps:{innerHTML:e._s(e.md(e.topBanner.content))}}),t("a",{staticClass:"banner__dismiss",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),e.close.apply(null,arguments)}}},[t("div",{staticClass:"banner__dismiss__icon"},[t("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1.66669 1.66669L12.3334 12.3334M12.3334 1.66669L1.66664 12.3334",stroke:"black","stroke-width":"1.5","stroke-linecap":"round"}})])])])]):e._e()])],1):e._e()}),[],!1,null,"1f736804",null);n.default=a.exports}}]);