import{defineComponent as e,toRef as r,computed as l,cloneVNode as o,h as t}from"vue";import{twJoin as u}from"tailwind-merge";import i from"./Icon-Di_vDYyH.mjs";import{s as n}from"./tooltip-P8fr8pDa.mjs";import{m as a,h as d,g as s}from"./entry-B1wW15I9.mjs";import{e as p}from"./meter-DOl6dAT8.mjs";import"./index-CQS-gLPq.mjs";import"@iconify/vue";import"@iconify/utils/lib/css/icon";import"../nitro/nitro.mjs";import"mammoth";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";import"unhead";import"@unhead/shared";import"vue-router";import"@prisma/client";import"@vueuse/core";import"vue3-apexcharts";import"vue/server-renderer";const m=a(s.ui.strategy,s.ui.meter,p),v=a(s.ui.strategy,s.ui.meterGroup,{wrapper:"flex flex-col gap-2 w-full",base:"flex flex-row flex-nowrap flex-shrink overflow-hidden",background:"bg-gray-200 dark:bg-gray-700",transition:"transition-all",rounded:"rounded-full",shadow:"",list:"list-disc list-inside",orientation:{"rounded-none":{left:"rounded-s-none",right:"rounded-e-none"},"rounded-sm":{left:"rounded-s-sm",right:"rounded-e-sm"},rounded:{left:"rounded-s",right:"rounded-e"},"rounded-md":{left:"rounded-s-md",right:"rounded-e-md"},"rounded-lg":{left:"rounded-s-lg",right:"rounded-e-lg"},"rounded-xl":{left:"rounded-s-xl",right:"rounded-e-xl"},"rounded-2xl":{left:"rounded-s-2xl",right:"rounded-e-2xl"},"rounded-3xl":{left:"rounded-s-3xl",right:"rounded-e-3xl"},"rounded-full":{left:"rounded-s-full",right:"rounded-e-full"}},default:{size:"md",icon:"i-heroicons-minus-20-solid"}}),c=e({components:{UIcon:i},inheritAttrs:!1,slots:Object,props:{min:{type:Number,default:0},max:{type:Number,default:100},size:{type:String,default:()=>m.default.size,validator:e=>Object.keys(m.meter.bar.size).includes(e)},indicator:{type:Boolean,default:!1},icon:{type:String,default:()=>v.default.icon},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:a}){const{ui:s,attrs:p}=n("meterGroup",r(e,"ui"),v),{ui:c}=n("meter",void 0,m);if(!a.default)throw new Error("Meter Group has no Meter children.");const f=l((()=>e.min>e.max?e.max:e.min)),h=l((()=>e.max<e.min?e.min:e.max)),g=l((()=>d(a))),x=l((()=>s.value.orientation[s.value.rounded])),b=l((()=>g.value.map((e=>e.props.label)))),y=l((()=>g.value.map((r=>function(e,r,l){if(r==l)return e<r?0:100;r>l&&(l=[r,r=l][0]);const o=(e-r)/(l-r)*100;return Math.max(0,Math.min(100,o))}(r.props.value,e.min,e.max))))),w=l((()=>Math.max(0,Math.max(y.value.reduce(((e,r)=>e+r),0))))),j=l((()=>g.value.map(((r,l)=>{var t,u,i,n,a,d,p,m,v,c,w,j,z;const k={};k.style={width:`${y.value[l]}%`},k.size=e.size,k.min=f.value,k.max=h.value,k.ui=(null==(t=r.props)?void 0:t.ui)||{},k.ui.wrapper=(null==(i=null==(u=r.props)?void 0:u.ui)?void 0:i.wrapper)||"",k.ui.wrapper+=[null==(a=null==(n=r.props)?void 0:n.ui)?void 0:a.wrapper,s.value.background,s.value.transition].filter(Boolean).join(" "),k.ui.meter=(null==(p=null==(d=r.props)?void 0:d.ui)?void 0:p.meter)||{},k.ui.meter.background=`bg-${r.props.color}-500 dark:bg-${r.props.color}-400`,k.ui.meter.rounded="rounded-none",k.ui.meter.bar=(null==(c=null==(v=null==(m=r.props)?void 0:m.ui)?void 0:v.meter)?void 0:c.bar)||{},0===l&&(k.ui.meter.rounded=`${x.value.left} rounded-e-none`),l===g.value.length-1&&(k.ui.meter.rounded=`${x.value.right} rounded-s-none`),b.value[l]=r.props.label;const M=o(r,k);return null==(w=M.children)||delete w.label,null==(j=M.props)||delete j.indicator,null==(z=M.props)||delete z.label,M})))),z=l((()=>u(s.value.base,s.value.background,s.value.rounded,s.value.shadow,c.value.meter.size[e.size]))),k=l((()=>u(c.value.indicator.container))),M=l((()=>u(c.value.indicator.text,c.value.indicator.size[e.size]))),$=l((()=>{const r=[void 0,t("div",{class:z.value},j.value),void 0];return e.indicator?r[0]=t("div",{class:k.value},[t("div",{class:M.value,style:{width:`${w.value}%`}},Math.round(w.value)+"%")]):a.indicator&&(r[0]=a.indicator({percent:w.value})),r[2]=t("ol",{class:s.value.list},b.value.map(((r,o)=>{var n,a;const d=l((()=>{var r,l,t,i;return u(c.value.label.base,c.value.label.text,null!=(l=c.value.color[null==(t=j.value[o])?void 0:t.props.color])?l:c.value.label.color.replaceAll("{color}",null!=(r=null==(i=j.value[o])?void 0:i.props.color)?r:c.value.default.color),c.value.label.size[e.size])}));return t("li",{class:d.value},[t(i,{name:null!=(n=null==(a=j.value[o])?void 0:a.props.icon)?n:e.icon}),`${r} (${Math.round(y.value[o])}%)`])}))),r}));return()=>t("div",{class:s.value.wrapper,...p.value},$.value)}});export{c as default};
//# sourceMappingURL=MeterGroup-B_XJsyG1.mjs.map
