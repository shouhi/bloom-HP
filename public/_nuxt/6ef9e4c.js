(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9],{332:function(t,e,n){var content=n(347);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("2e8662d8",content,!0,{sourceMap:!1})},333:function(t,e,n){"use strict";n(23),n(59),n(316),n(60),n(14),n(21),n(70),n(61),n(44),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(68),n(69);var r=n(2),o=(n(330),n(0)),c=n(140),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=["start","end","center"];function h(t,e){return v.reduce((function(n,r){return n[t+Object(l.n)(r)]=e(),n}),{})}var y=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},j=h("align",(function(){return{type:String,default:null,validator:y}})),O=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},w=h("justify",(function(){return{type:String,default:null,validator:O}})),x=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},C=h("alignContent",(function(){return{type:String,default:null,validator:x}})),S={align:Object.keys(j),justify:Object.keys(w),alignContent:Object.keys(C)},_={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=_[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var E=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},j),{},{justify:{type:String,default:null,validator:O}},w),{},{alignContent:{type:String,default:null,validator:x}},C),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=E.get(l);return d||function(){var t,e;for(e in d=[],S)S[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),E.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},342:function(t,e,n){var map={"./1.png":343,"./2.png":344,"./3.png":345};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=342},343:function(t,e,n){t.exports=n.p+"img/1.c8039b6.png"},344:function(t,e,n){t.exports=n.p+"img/2.04a87fb.png"},345:function(t,e,n){t.exports=n.p+"img/3.1ddf4bb.png"},346:function(t,e,n){"use strict";n(332)},347:function(t,e,n){var r=n(19)(!1);r.push([t.i,".card[data-v-62666499]{border:1px solid;border-bottom:transparent;border-top:transparent;margin-top:30px}.service-number[data-v-62666499]{font-size:6rem;font-weight:700;color:rgba(0,0,0,.06275);float:left;position:absolute;left:10px;top:0;line-height:1;z-index:3}",""]),t.exports=r},348:function(t,e,n){var content=n(359);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("2cc772ba",content,!0,{sourceMap:!1})},351:function(t,e,n){"use strict";n.r(e);n(33);var r={props:{value:{type:Object,default:function(){return{}}},num:{type:Number,default:0}},data:function(){return{}},computed:{},methods:{}},o=(n(346),n(43)),c=n(57),l=n.n(c),f=n(369),d=n(314),v=n(381),m=n(204),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"card",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"mx-auto",staticStyle:{padding:"3rem"},attrs:{flat:"","min-height":"300"}},[r("p",{staticClass:"service-number"},[t._v(t._s(t.num+1))]),r("p",{staticClass:"title text-center font-weight-bold"},[t._v(t._s(t.value.title))]),r("a",{attrs:{href:t.value.path}},[r("v-img",{staticClass:"white--text align-end",attrs:{contain:"","max-height":"300",src:n(342)("./"+(t.num+1)+".png")}})],1),r("v-card-text",{staticClass:"text-center"},[t._v(t._s(t.value.description))])],1)],1)}),[],!1,null,"62666499",null);e.default=component.exports;l()(component,{VCard:f.a,VCardText:d.a,VCol:v.a,VImg:m.a})},358:function(t,e,n){"use strict";n(348)},359:function(t,e,n){var r=n(19)(!1);r.push([t.i,".services[data-v-193005fa]{height:100%}h2[data-v-193005fa]{margin-top:100px}h2[data-v-193005fa],h3[data-v-193005fa]{text-align:center}h3[data-v-193005fa]{font-size:25px;color:gold}",""]),t.exports=r},366:function(t,e,n){"use strict";n.r(e);var r={components:{ServiceCard:n(351).default},data:function(){return{services:[{title:"Bloom",description:"学生と店舗のマッチングサービス",image:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"},{title:"SEEDAS",description:"学生と店舗のマッチングサービス",image:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",path:"https://www.instagram.com/seedas_/"},{title:"ProTask",description:"大学課題管理アプリ",image:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",path:"https://protaskg.studio.site/"}]}}},o=(n(358),n(43)),c=n(57),l=n.n(c),f=n(381),d=n(333),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Section",{staticClass:"services"},[n("v-row",[n("v-col",[n("h2",{staticClass:"display-2 font-weight-bold"},[t._v("SERVICE")]),n("h3",[t._v("事業内容")])])],1),n("v-row",t._l(t.services,(function(t,e){return n("service-card",{key:e,attrs:{value:t,num:e}})})),1)],1)}),[],!1,null,"193005fa",null);e.default=component.exports;l()(component,{VCol:f.a,VRow:d.a})}}]);