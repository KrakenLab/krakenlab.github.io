(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c9580c3e"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}o[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1145:function(t,e,a){"use strict";a("1485")},1485:function(t,e,a){},"15c5":function(t,e,a){t.exports=a.p+"img/bigK.0ec79603.svg"},"1ee2":function(t,e,a){"use strict";a("aa2d")},"29d6":function(t,e,a){},"37f7":function(t,e,a){"use strict";a("6433")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view"),a("Footer")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("img",{attrs:{id:"logoK",src:a("612b")},on:{click:t.toHome}}),n("img",{attrs:{id:"menuSandwich",src:a("81b9")}})])},s=[],c={name:"Header",methods:{toHome:function(){this.$router.push({name:"Home"})}}},u=c,l=(a("866e"),a("2877")),f=Object(l["a"])(u,i,s,!1,null,"071fec49",null),d=f.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("img",{staticClass:"filter-K-yellow",attrs:{id:"logoK",src:a("612b")}}),n("div",{staticClass:"text"},[n("span",[t._v("Joinville")]),n("br"),t._v("Rua Orestes Guimarães, 876 - América ")]),n("div",{staticClass:"text"},[n("span",[t._v("Curitiba")]),n("br"),t._v("esqueci o nome da rua - Centro ")]),n("div",{staticClass:"text"},[t._v(" comlicenca@krakenlab.io "),n("br"),t._v("medaumtrampo@krakenlab.io ")]),n("div",{staticClass:"text"},[n("i",{staticClass:"fab fa-discord fa-fw fa-2x"}),n("i",{staticClass:"fab fa-linkedin fa-fw fa-2x"}),n("i",{staticClass:"fab fa-github fa-fw fa-2x"}),n("i",{staticClass:"fab fa-trello fa-fw fa-2x",staticStyle:{display:"none"}}),n("i",{staticClass:"fas fa-rss fa-fw fa-2x"})])])}],m={name:"Footer"},_=m,b=(a("5cda"),Object(l["a"])(_,p,v,!1,null,"72601842",null)),h=b.exports,g={name:"App",components:{Header:d,Footer:h}},C=g,w=(a("1145"),Object(l["a"])(C,o,r,!1,null,null,null)),y=w.exports,x=(a("d3b7"),a("8c4f")),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"animetedKraken"},[t._v("aqui vai o kraken animado")]),a("div",{staticClass:"whoIAm"},[t._m(0),a("div",{staticClass:"presentation"},[t._m(1),t._m(2),a("Button",{attrs:{text:"Participe da nossa comunidade",color:"colorButtonPurple",size:"sizeMedium",font:"colorFontWhite",onClick:t.clickButtonParticipe}})],1)]),a("div",{staticClass:"comunity"},[t._v("aqui vai a seção de comunidade")]),a("div",{staticClass:"workInProgress"},[t._v("aqui vai a seção de work in progress")]),a("div",{staticClass:"end"},[a("div",[a("Button",{attrs:{text:"Comunidade",color:"colorButtonTurquoise",size:"sizeBig",font:"colorFontWhite",onClick:t.clickButtonParticipe}})],1),a("div",[a("Button",{attrs:{text:"Carreiras",color:"colorButtonPurple",size:"sizeBig",font:"colorFontYellow",onClick:t.clickButtonParticipe}})],1)])])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bigK"},[n("img",{attrs:{src:a("15c5")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("a",{staticClass:"f"},[t._v("A ge")]),a("a",{staticClass:"f_s_w"},[t._v("n")]),a("a",{staticClass:"f"},[t._v("te se dive")]),a("a",{staticClass:"f_s_w"},[t._v("r")]),a("a",{staticClass:"f"},[t._v("te crian")]),a("a",{staticClass:"f_s_w"},[t._v("d")]),a("a",{staticClass:"f"},[t._v("o jo")]),a("a",{staticClass:"f_s_w"},[t._v("g")]),a("a",{staticClass:"f"},[t._v("os dive")]),a("a",{staticClass:"f_s_w"},[t._v("r")]),a("a",{staticClass:"f"},[t._v("tid")]),a("a",{staticClass:"f_s_w"},[t._v("o")]),a("a",{staticClass:"f"},[t._v("s.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[t._v(" Somos a Krakenlab, um game studio que abraça as diferenças e os desafios. Nos esforçamos em construir experiências divertidas tanto para jogadores quanto para o nosso processo de desenvolvimento. "),a("br"),a("br"),t._v(" Da concepção a diversão, construímos jogos colaborativamente. Participe da nossa comunidade ")])}],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:[t.color,t.size,t.font],attrs:{id:"button"},on:{click:t.onClick}},[t._v(" "+t._s(t.text)+" ")])},O=[],B={props:{text:{type:String,required:!0},color:{type:String,required:!0},size:{type:String,required:!0},font:{type:String,required:!0},onClick:{type:Function,required:!0}},name:"Button"},q=B,S=(a("37f7"),Object(l["a"])(q,P,O,!1,null,"239d7cf0",null)),E=S.exports,$={name:"Home",components:{Button:E},methods:{clickButtonParticipe:function(){M.push({name:"About"})}}},z=$,H=(a("1ee2"),Object(l["a"])(z,k,j,!1,null,"310c46d0",null)),K=H.exports;n["a"].use(x["a"]);var A=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],F=new x["a"]({routes:A}),M=F,T=a("ecee"),J=a("ad3d"),I=a("f2d1"),L=a("c074");T["d"].add(I["a"],L["a"]),T["b"].watch(),n["a"].component("font-awesome-icon",J["a"]),n["a"].config.productionTip=!1,new n["a"]({router:M,render:function(t){return t(y)}}).$mount("#app")},"5cda":function(t,e,a){"use strict";a("29d6")},"612b":function(t,e,a){t.exports=a.p+"img/K.36669afb.svg"},6433:function(t,e,a){},"81b9":function(t,e,a){t.exports=a.p+"img/MenuSandwich.cee5a954.svg"},"866e":function(t,e,a){"use strict";a("aeba")},aa2d:function(t,e,a){},aeba:function(t,e,a){}});
//# sourceMappingURL=app.79a30f8b.js.map