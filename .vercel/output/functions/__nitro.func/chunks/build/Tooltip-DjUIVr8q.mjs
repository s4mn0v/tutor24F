import e from"./Kbd-DHJmTwTI.mjs";import{mergeProps as t,withCtx as o,createTextVNode as r,toDisplayString as i,defineComponent as s,toRef as p,computed as u,ref as l,useSlots as a,useSSRContext as m}from"vue";import{v as n}from"../nitro/nitro.mjs";import{s as d,b as c}from"./tooltip-P8fr8pDa.mjs";import{o as v}from"./usePopper-BYI_GJ1j.mjs";import{_ as f,m as x,g as y}from"./entry-B1wW15I9.mjs";import{ssrRenderAttrs as b,ssrRenderSlot as h,ssrRenderClass as j,ssrInterpolate as g,ssrRenderList as w,ssrRenderComponent as $}from"vue/server-renderer";import"tailwind-merge";import"underscore";import"bluebird/js/release/promise";import"base64-js";import"jszip";import"@xmldom/xmldom";import"@xmldom/xmldom/lib/dom";import"xmlbuilder";import"dingbat-to-unicode";import"fs";import"url";import"os";import"path";import"path-is-absolute";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";import"unhead";import"@unhead/shared";import"vue-router";import"@prisma/client";import"@vueuse/core";import"@iconify/vue";import"vue3-apexcharts";const D=x(y.ui.strategy,y.ui.tooltip,c),T=s({components:{UKbd:e},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:()=>D.default.openDelay},closeDelay:{type:Number,default:()=>D.default.closeDelay},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:o}=d("tooltip",p(e,"ui"),D,p(e,"class")),r=u((()=>n({},e.popper,t.value.popper))),[i,s]=v(r.value),m=l(!1);let c=null,f=null;const x=u((()=>!(!a().text&&!e.text)));return{ui:t,attrs:o,popper:r,trigger:i,container:s,open:m,onMouseEnter:function(){f&&(clearTimeout(f),f=null),m.value||(c=c||setTimeout((()=>{m.value=!0,c=null}),e.openDelay))},onMouseLeave:function(){c&&(clearTimeout(c),c=null),m.value&&(f=f||setTimeout((()=>{m.value=!1,f=null}),e.closeDelay))},isVisible:x}}}),O=T.setup;T.setup=(e,t)=>{const o=m();return(o.modules||(o.modules=new Set)).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Tooltip.vue"),O?O(e,t):void 0};const _=f(T,[["ssrRender",function(s,p,u,l,a,m,n,d){var c;const v=e;p(`<div${b(t({ref:"trigger",class:s.ui.wrapper},s.attrs,l))}>`),h(s.$slots,"default",{open:s.open},(()=>{p(" Hover ")}),p,u),s.open&&!s.prevent&&s.isVisible?(p(`<div class="${j([s.ui.container,s.ui.width])}"><template><div>`),s.popper.arrow?p(`<div data-popper-arrow class="${j(Object.values(s.ui.arrow))}"></div>`):p("\x3c!----\x3e"),p(`<div class="${j([s.ui.base,s.ui.background,s.ui.color,s.ui.rounded,s.ui.shadow,s.ui.ring])}">`),h(s.$slots,"text",{},(()=>{p(`${g(s.text)}`)}),p,u),(null==(c=s.shortcuts)?void 0:c.length)?(p(`<span class="${j(s.ui.shortcuts)}"><span class="${j(s.ui.middot)}">·</span>\x3c!--[--\x3e`),w(s.shortcuts,(e=>{p($(v,{key:e,size:"xs"},{default:o(((t,o,s,p)=>{if(!o)return[r(i(e),1)];o(`${g(e)}`)})),_:2},u))})),p("\x3c!--]--\x3e</span>")):p("\x3c!----\x3e"),p("</div></div></template></div>")):p("\x3c!----\x3e"),p("</div>")}]]);export{_ as default};
//# sourceMappingURL=Tooltip-DjUIVr8q.mjs.map
