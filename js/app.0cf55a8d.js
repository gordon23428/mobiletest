(function(e){function t(t){for(var o,u,i=t[0],a=t[1],l=t[2],s=0,b=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);f&&f(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,u=1;u<n.length;u++){var a=n[u];0!==r[a]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"58c68630"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=u(e);var l=new Error;c=function(t){a.onerror=a.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",l.name="ChunkLoadError",l.type=o,l.request=c,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:a})}),12e4);a.onerror=a.onload=c,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/mobiletest/",i.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3785:function(e,t,n){"use strict";n("4570")},4570:function(e,t,n){},4582:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const r={id:"nav"};function c(e,t){const n=Object(o["w"])("router-link"),c=Object(o["w"])("router-view");return Object(o["q"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",r,[Object(o["g"])(n,{to:"/"},{default:Object(o["B"])(()=>[Object(o["f"])("Home")]),_:1}),Object(o["f"])(" | "),Object(o["g"])(n,{to:"/about"},{default:Object(o["B"])(()=>[Object(o["f"])("About")]),_:1})]),Object(o["g"])(c)],64)}n("3785");var u=n("6b0d"),i=n.n(u);const a={},l=i()(a,[["render",c]]);var s=l,f=n("6605"),b=n("cf05"),p=n.n(b);const d={class:"home"},j=Object(o["e"])("img",{alt:"Vue logo",src:p.a},null,-1);function O(e,t,n,r,c,u){const i=Object(o["w"])("HelloWorld");return Object(o["q"])(),Object(o["d"])("div",d,[j,Object(o["g"])(i,{msg:"Welcome to Your Vue.js App"})])}const h=e=>(Object(o["t"])("data-v-6f8c75ff"),e=e(),Object(o["r"])(),e),v={class:"hello"},m=h(()=>Object(o["e"])("p",null,[Object(o["f"])(" For a guide and recipes on how to configure / customize this project,"),Object(o["e"])("br"),Object(o["f"])(" check out the "),Object(o["e"])("a",{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"},"vue-cli documentation"),Object(o["f"])(". ")],-1));function g(e,t,n,r,c,u){return Object(o["q"])(),Object(o["d"])("div",v,[Object(o["e"])("h1",null,Object(o["y"])(n.msg),1),m,Object(o["e"])("h3",null,Object(o["y"])(e.isMobile),1),Object(o["e"])("h2",null,Object(o["y"])(e.info),1)])}var y={name:"HelloWorld",props:{msg:String},data:function(){return{isMobile:"",info:""}},mounted(){console.log(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)),this.isMobile=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),this.info=navigator.userAgent}};n("9c9a");const w=i()(y,[["render",g],["__scopeId","data-v-6f8c75ff"]]);var P=w,_={name:"Home",components:{HelloWorld:P}};const k=i()(_,[["render",O]]);var A=k;const S=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))}],x=Object(f["a"])({history:Object(f["b"])(),routes:S});var M=x,B=n("5502"),H=Object(B["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(s).use(H).use(M).mount("#app")},"9c9a":function(e,t,n){"use strict";n("4582")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0cf55a8d.js.map