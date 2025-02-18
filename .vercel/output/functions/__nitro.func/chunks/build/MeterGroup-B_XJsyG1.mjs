import{defineComponent as e,toRef as r,computed as o,cloneVNode as l,h as i}from"vue";import{twJoin as t}from"tailwind-merge";import u from"./Icon-Di_vDYyH.mjs";import{s as a}from"./tooltip-P8fr8pDa.mjs";import{m as n,h as d,g as s}from"./entry-B1wW15I9.mjs";import{e as p}from"./meter-DOl6dAT8.mjs";import"./index-CQS-gLPq.mjs";import"@iconify/vue";import"@iconify/utils/lib/css/icon";import"../nitro/nitro.mjs";import"underscore";import"bluebird/js/release/promise";import"base64-js";import"jszip";import"@xmldom/xmldom";import"@xmldom/xmldom/lib/dom";import"xmlbuilder";import"dingbat-to-unicode";import"fs";import"url";import"os";import"path";import"path-is-absolute";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";import"unhead";import"@unhead/shared";import"vue-router";import"@prisma/client";import"@vueuse/core";import"vue3-apexcharts";import"vue/server-renderer";const m=n(s.ui.strategy,s.ui.meter,p),v=n(s.ui.strategy,s.ui.meterGroup,{wrapper:"flex flex-col gap-2 w-full",base:"flex flex-row flex-nowrap flex-shrink overflow-hidden",background:"bg-gray-200 dark:bg-gray-700",transition:"transition-all",rounded:"rounded-full",shadow:"",list:"list-disc list-inside",orientation:{"rounded-none":{left:"rounded-s-none",right:"rounded-e-none"},"rounded-sm":{left:"rounded-s-sm",right:"rounded-e-sm"},rounded:{left:"rounded-s",right:"rounded-e"},"rounded-md":{left:"rounded-s-md",right:"rounded-e-md"},"rounded-lg":{left:"rounded-s-lg",right:"rounded-e-lg"},"rounded-xl":{left:"rounded-s-xl",right:"rounded-e-xl"},"rounded-2xl":{left:"rounded-s-2xl",right:"rounded-e-2xl"},"rounded-3xl":{left:"rounded-s-3xl",right:"rounded-e-3xl"},"rounded-full":{left:"rounded-s-full",right:"rounded-e-full"}},default:{size:"md",icon:"i-heroicons-minus-20-solid"}}),c=e({components:{UIcon:u},inheritAttrs:!1,slots:Object,props:{min:{type:Number,default:0},max:{type:Number,default:100},size:{type:String,default:()=>m.default.size,validator:e=>Object.keys(m.meter.bar.size).includes(e)},indicator:{type:Boolean,default:!1},icon:{type:String,default:()=>v.default.icon},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:n}){const{ui:s,attrs:p}=a("meterGroup",r(e,"ui"),v),{ui:c}=a("meter",void 0,m);if(!n.default)throw new Error("Meter Group has no Meter children.");const f=o((()=>e.min>e.max?e.max:e.min)),h=o((()=>e.max<e.min?e.min:e.max)),b=o((()=>d(n))),x=o((()=>s.value.orientation[s.value.rounded])),g=o((()=>b.value.map((e=>e.props.label)))),y=o((()=>b.value.map((r=>function(e,r,o){if(r==o)return e<r?0:100;r>o&&(o=[r,r=o][0]);const l=(e-r)/(o-r)*100;return Math.max(0,Math.min(100,l))}(r.props.value,e.min,e.max))))),w=o((()=>Math.max(0,Math.max(y.value.reduce(((e,r)=>e+r),0))))),j=o((()=>b.value.map(((r,o)=>{var i,t,u,a,n,d,p,m,v,c,w,j,z;const k={};k.style={width:`${y.value[o]}%`},k.size=e.size,k.min=f.value,k.max=h.value,k.ui=(null==(i=r.props)?void 0:i.ui)||{},k.ui.wrapper=(null==(u=null==(t=r.props)?void 0:t.ui)?void 0:u.wrapper)||"",k.ui.wrapper+=[null==(n=null==(a=r.props)?void 0:a.ui)?void 0:n.wrapper,s.value.background,s.value.transition].filter(Boolean).join(" "),k.ui.meter=(null==(p=null==(d=r.props)?void 0:d.ui)?void 0:p.meter)||{},k.ui.meter.background=`bg-${r.props.color}-500 dark:bg-${r.props.color}-400`,k.ui.meter.rounded="rounded-none",k.ui.meter.bar=(null==(c=null==(v=null==(m=r.props)?void 0:m.ui)?void 0:v.meter)?void 0:c.bar)||{},0===o&&(k.ui.meter.rounded=`${x.value.left} rounded-e-none`),o===b.value.length-1&&(k.ui.meter.rounded=`${x.value.right} rounded-s-none`),g.value[o]=r.props.label;const M=l(r,k);return null==(w=M.children)||delete w.label,null==(j=M.props)||delete j.indicator,null==(z=M.props)||delete z.label,M})))),z=o((()=>t(s.value.base,s.value.background,s.value.rounded,s.value.shadow,c.value.meter.size[e.size]))),k=o((()=>t(c.value.indicator.container))),M=o((()=>t(c.value.indicator.text,c.value.indicator.size[e.size]))),$=o((()=>{const r=[void 0,i("div",{class:z.value},j.value),void 0];return e.indicator?r[0]=i("div",{class:k.value},[i("div",{class:M.value,style:{width:`${w.value}%`}},Math.round(w.value)+"%")]):n.indicator&&(r[0]=n.indicator({percent:w.value})),r[2]=i("ol",{class:s.value.list},g.value.map(((r,l)=>{var a,n;const d=o((()=>{var r,o,i,u;return t(c.value.label.base,c.value.label.text,null!=(o=c.value.color[null==(i=j.value[l])?void 0:i.props.color])?o:c.value.label.color.replaceAll("{color}",null!=(r=null==(u=j.value[l])?void 0:u.props.color)?r:c.value.default.color),c.value.label.size[e.size])}));return i("li",{class:d.value},[i(u,{name:null!=(a=null==(n=j.value[l])?void 0:n.props.icon)?a:e.icon}),`${r} (${Math.round(y.value[l])}%)`])}))),r}));return()=>i("div",{class:s.value.wrapper,...p.value},$.value)}});export{c as default};
//# sourceMappingURL=MeterGroup-B_XJsyG1.mjs.map
