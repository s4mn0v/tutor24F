import e from"./Icon-Di_vDYyH.mjs";import{mergeProps as r,defineComponent as t,toRef as a,computed as l,useSSRContext as i}from"vue";import{twJoin as o}from"tailwind-merge";import{s}from"./tooltip-P8fr8pDa.mjs";import{_ as m,g as n,m as u}from"./entry-B1wW15I9.mjs";import{e as c}from"./meter-DOl6dAT8.mjs";import{ssrRenderAttrs as p,ssrRenderSlot as d,ssrRenderClass as v,ssrRenderStyle as b,ssrInterpolate as f,ssrRenderAttr as x,ssrRenderComponent as y}from"vue/server-renderer";import"./index-CQS-gLPq.mjs";import"@iconify/vue";import"@iconify/utils/lib/css/icon";import"../nitro/nitro.mjs";import"underscore";import"bluebird/js/release/promise";import"base64-js";import"jszip";import"@xmldom/xmldom";import"@xmldom/xmldom/lib/dom";import"xmlbuilder";import"dingbat-to-unicode";import"fs";import"url";import"os";import"path";import"path-is-absolute";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";import"unhead";import"@unhead/shared";import"vue-router";import"@prisma/client";import"@vueuse/core";import"vue3-apexcharts";const z=u(n.ui.strategy,n.ui.meter,c),$=t({components:{UIcon:e},inheritAttrs:!1,slots:Object,props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},indicator:{type:Boolean,default:!1},label:{type:String,default:null},size:{type:String,default:()=>z.default.size,validator:e=>Object.keys(z.meter.size).includes(e)},color:{type:String,default:()=>z.default.color,validator:e=>[...n.ui.colors,...Object.keys(z.color)].includes(e)},icon:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:r,attrs:t}=s("meter",a(e,"ui"),z,a(e,"class")),i=l((()=>o(r.value.indicator.container))),m=l((()=>o(r.value.indicator.text,r.value.indicator.size[e.size]))),n=l((()=>{var t;return o(r.value.meter.base,r.value.meter.background,r.value.meter.ring,r.value.meter.rounded,r.value.meter.shadow,null!=(t=r.value.color[e.color])?t:r.value.meter.color.replaceAll("{color}",e.color),r.value.meter.size[e.size])})),u=l((()=>o(r.value.meter.appearance.inner,r.value.meter.appearance.meter,r.value.meter.appearance.bar,r.value.meter.appearance.value))),c=l((()=>o(r.value.meter.bar.transition,r.value.meter.bar.ring,r.value.meter.bar.rounded,r.value.meter.bar.size[e.size]))),p=l((()=>{var t;return o(r.value.label.base,r.value.label.text,null!=(t=r.value.color[e.color])?t:r.value.label.color.replaceAll("{color}",e.color),r.value.label.size[e.size])})),d=l((()=>e.min>e.max?e.max:e.min)),v=l((()=>e.max<e.min?e.min:e.max)),b=l((()=>function(e,r,t){if(r==t)return e<r?0:100;r>t&&(t=[r,r=t][0]);const a=(e-r)/(t-r)*100;return Math.max(0,Math.min(100,a))}(Number(e.value),d.value,v.value)));return{ui:r,attrs:t,indicatorContainerClass:i,indicatorClass:m,meterClass:n,meterAppearanceClass:u,meterBarClass:c,labelClass:p,normalizedMin:d,normalizedMax:v,percent:b}}}),j=$.setup;$.setup=(e,r)=>{const t=i();return(t.modules||(t.modules=new Set)).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Meter.vue"),j?j(e,r):void 0};const C=m($,[["ssrRender",function(t,a,l,i,o,s,m,n){const u=e;a(`<div${p(r({class:t.ui.wrapper},t.attrs,i))}>`),t.indicator||t.$slots.indicator?d(t.$slots,"indicator",{percent:t.percent,value:t.value},(()=>{a(`<div class="${v(t.indicatorContainerClass)}" style="${b({width:`${t.percent}%`})}"><div class="${v(t.indicatorClass)}">${f(Math.round(t.percent))}% </div></div>`)}),a,l):a("\x3c!----\x3e"),a(`<meter${x("value",t.value)}${x("min",t.normalizedMin)}${x("max",t.normalizedMax)} class="${v([t.meterClass,t.meterAppearanceClass,t.meterBarClass])}"></meter>`),t.label||t.$slots.label?d(t.$slots,"label",{percent:t.percent,value:t.value},(()=>{a(`<div class="${v(t.labelClass)}">`),t.icon?a(y(u,{name:t.icon},null,l)):a("\x3c!----\x3e"),a(` ${f(t.label)}</div>`)}),a,l):a("\x3c!----\x3e"),a("</div>")}]]);export{C as default};
//# sourceMappingURL=Meter-B6uI2sUL.mjs.map
