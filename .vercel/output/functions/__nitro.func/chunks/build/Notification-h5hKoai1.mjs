import t from"./Icon-Di_vDYyH.mjs";import{_ as e}from"./Avatar-DoxxepFO.mjs";import o from"./Button-C-PkUfPN.mjs";import{mergeProps as i,defineComponent as r,toRef as s,ref as l,computed as n,watch as a,watchEffect as u,useSSRContext as c}from"vue";import{twJoin as p}from"tailwind-merge";import{s as d}from"./tooltip-P8fr8pDa.mjs";import{useTimestamp as m}from"@vueuse/core";import{_ as v,g as f,m as g,t as x}from"./entry-B1wW15I9.mjs";import{ssrRenderAttrs as y,ssrRenderClass as b,ssrRenderComponent as k,ssrRenderSlot as h,ssrInterpolate as w,ssrRenderList as $,ssrRenderStyle as C}from"vue/server-renderer";import"./index-CQS-gLPq.mjs";import"@iconify/vue";import"@iconify/utils/lib/css/icon";import"../nitro/nitro.mjs";import"underscore";import"bluebird/js/release/promise";import"base64-js";import"jszip";import"@xmldom/xmldom";import"@xmldom/xmldom/lib/dom";import"xmlbuilder";import"dingbat-to-unicode";import"fs";import"url";import"os";import"path";import"path-is-absolute";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";import"unhead";import"@unhead/shared";import"vue-router";import"@prisma/client";import"vue3-apexcharts";import"./Link-BdFoBY4y.mjs";import"./link-Ch5OrHHS.mjs";import"./useButtonGroup-DOVi4PLM.mjs";import"./button-CHOj1P8S.mjs";const j=g(f.ui.strategy,f.ui.notification,{wrapper:"w-full pointer-events-auto",container:"relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium text-gray-900 dark:text-white",description:"mt-1 text-sm leading-4 text-gray-500 dark:text-gray-400",actions:"flex items-center gap-2 mt-3 flex-shrink-0",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",ring:"ring-1 ring-gray-200 dark:ring-gray-800",icon:{base:"flex-shrink-0 w-5 h-5",color:"text-{color}-500 dark:text-{color}-400"},avatar:{base:"flex-shrink-0 self-center",size:"md"},progress:{base:"absolute bottom-0 end-0 start-0 h-1",background:"bg-{color}-500 dark:bg-{color}-400"},transition:{enterActiveClass:"transform ease-out duration-300 transition",enterFromClass:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",enterToClass:"translate-y-0 opacity-100 sm:translate-x-0",leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},default:{color:"primary",icon:null,timeout:5e3,closeButton:{icon:"i-heroicons-x-mark-20-solid",color:"gray",variant:"link",padded:!1},actionButton:{size:"xs",color:"white"}}}),B=r({components:{UIcon:t,UAvatar:e,UButton:o},inheritAttrs:!1,props:{id:{type:[String,Number],required:!0},title:{type:String,default:null},description:{type:String,default:null},icon:{type:String,default:()=>j.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>j.default.closeButton},timeout:{type:Number,default:()=>j.default.timeout},actions:{type:Array,default:()=>[]},callback:{type:Function,default:null},color:{type:String,default:()=>j.default.color,validator:t=>["gray",...f.ui.colors].includes(t)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},pauseTimeoutOnHover:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:e}){const{ui:o,attrs:i}=d("notification",s(t,"ui"),j);let r=null;const c=l(t.timeout),v=n((()=>{var e,i;return x(p(o.value.wrapper,null==(e=o.value.background)?void 0:e.replaceAll("{color}",t.color),o.value.rounded,o.value.shadow,null==(i=o.value.ring)?void 0:i.replaceAll("{color}",t.color)),t.class)})),f=n((()=>{var e;return p(o.value.progress.base,null==(e=o.value.progress.background)?void 0:e.replaceAll("{color}",t.color))})),g=n((()=>({width:`${c.value/t.timeout*100||0}%`}))),y=n((()=>{var e;return p(o.value.icon.base,null==(e=o.value.icon.color)?void 0:e.replaceAll("{color}",t.color))}));function b2(){r&&r.stop(),t.callback&&t.callback(),e("close")}return a((()=>t.timeout),(function(){r&&r.stop(),t.timeout&&(r=function(t,e){let o=null;const{pause:i,resume:r,timestamp:s}=m({controls:!0}),a=l(null),u=n((()=>a.value?e-(s.value-a.value):0));function c3(...t){o=setTimeout((()=>{o=null,a.value=null,(()=>{b2()})(...t)}),u.value)}function p2(){o&&(clearTimeout(o),o=null)}function d2(){a.value=Date.now(),c3()}return d2(),{start:d2,stop:function(){p2(),i()},pause:function(){p2(),i()},resume:function(){c3(),r(),a.value=(a.value||0)+(Date.now()-s.value)},remaining:u}}(0,t.timeout),u((()=>{c.value=r.remaining.value})))})),{ui:o,attrs:i,wrapperClass:v,progressClass:f,progressStyle:g,iconClass:y,onMouseover:function(){t.pauseTimeoutOnHover&&r&&r.pause()},onMouseleave:function(){t.pauseTimeoutOnHover&&r&&r.resume()},onClose:b2,onAction:function(t){r&&r.stop(),t.click&&t.click(),e("close")},twMerge:x}}}),A=B.setup;B.setup=(t,e)=>{const o=c();return(o.modules||(o.modules=new Set)).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Notification.vue"),A?A(t,e):void 0};const S=v(B,[["ssrRender",function(r,s,l,n,a,u,c,p){const d=t,m=e,v=o;s(`<template><div${y(i({class:r.wrapperClass,role:"status"},r.attrs,n))}><div class="${b([r.ui.container,r.ui.rounded,r.ui.ring])}"><div class="${b([[r.ui.padding,r.ui.gap,{"items-start":r.description||r.$slots.description,"items-center":!r.description&&!r.$slots.description}],"flex"])}">`),r.icon?s(k(d,{name:r.icon,class:r.iconClass},null,l)):s("\x3c!----\x3e"),r.avatar?s(k(m,i({size:r.ui.avatar.size,...r.avatar},{class:r.ui.avatar.base}),null,l)):s("\x3c!----\x3e"),s(`<div class="${b(r.ui.inner)}">`),r.title||r.$slots.title?(s(`<p class="${b(r.ui.title)}">`),h(r.$slots,"title",{title:r.title},(()=>{s(`${w(r.title)}`)}),s,l),s("</p>")):s("\x3c!----\x3e"),r.description||r.$slots.description?(s(`<div class="${b(r.twMerge(r.ui.description,!r.title&&!r.$slots.title&&"mt-0 leading-5"))}">`),h(r.$slots,"description",{description:r.description},(()=>{s(`${w(r.description)}`)}),s,l),s("</div>")):s("\x3c!----\x3e"),(r.description||r.$slots.description)&&r.actions.length?(s(`<div class="${b(r.ui.actions)}">\x3c!--[--\x3e`),$(r.actions,((t,e)=>{s(k(v,i({key:e,ref_for:!0},{...r.ui.default.actionButton||{},...t},{onClick:e=>r.onAction(t)}),null,l))})),s("\x3c!--]--\x3e</div>")):s("\x3c!----\x3e"),s("</div>"),r.closeButton||!r.description&&!r.$slots.description&&r.actions.length?(s(`<div class="${b(r.twMerge(r.ui.actions,"mt-0"))}">`),r.description||r.$slots.description||!r.actions.length?s("\x3c!----\x3e"):(s("\x3c!--[--\x3e"),$(r.actions,((t,e)=>{s(k(v,i({key:e,ref_for:!0},{...r.ui.default.actionButton||{},...t},{onClick:e=>r.onAction(t)}),null,l))})),s("\x3c!--]--\x3e")),r.closeButton?s(k(v,i({"aria-label":"Close"},{...r.ui.default.closeButton||{},...r.closeButton},{onClick:r.onClose}),null,l)):s("\x3c!----\x3e"),s("</div>")):s("\x3c!----\x3e"),s("</div>"),r.timeout?s(`<div class="${b(r.progressClass)}" style="${C(r.progressStyle)}"></div>`):s("\x3c!----\x3e"),s("</div></div></template>")}]]);export{S as default};
//# sourceMappingURL=Notification-h5hKoai1.mjs.map
