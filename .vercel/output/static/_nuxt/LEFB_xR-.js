import{f as e,S as l,U as r,B as o,$ as u,a0 as a,a1 as n,Z as t,W as d}from"./hFqZFfy7.js";import i from"./C9-cjxml.js";import{u as s}from"./DHMDb2DJ.js";import{m as p}from"./DOl6dAT8.js";import"./CkVD2Uqn.js";import".prisma/client/index-browser";import"./CCWsANb-.js";const v=l(d.ui.strategy,d.ui.meter,p),m=l(d.ui.strategy,d.ui.meterGroup,{wrapper:"flex flex-col gap-2 w-full",base:"flex flex-row flex-nowrap flex-shrink overflow-hidden",background:"bg-gray-200 dark:bg-gray-700",transition:"transition-all",rounded:"rounded-full",shadow:"",list:"list-disc list-inside",orientation:{"rounded-none":{left:"rounded-s-none",right:"rounded-e-none"},"rounded-sm":{left:"rounded-s-sm",right:"rounded-e-sm"},rounded:{left:"rounded-s",right:"rounded-e"},"rounded-md":{left:"rounded-s-md",right:"rounded-e-md"},"rounded-lg":{left:"rounded-s-lg",right:"rounded-e-lg"},"rounded-xl":{left:"rounded-s-xl",right:"rounded-e-xl"},"rounded-2xl":{left:"rounded-s-2xl",right:"rounded-e-2xl"},"rounded-3xl":{left:"rounded-s-3xl",right:"rounded-e-3xl"},"rounded-full":{left:"rounded-s-full",right:"rounded-e-full"}},default:{size:"md",icon:"i-heroicons-minus-20-solid"}}),c=e({components:{UIcon:i},inheritAttrs:!1,slots:Object,props:{min:{type:Number,default:0},max:{type:Number,default:100},size:{type:String,default:()=>v.default.size,validator:e=>Object.keys(v.meter.bar.size).includes(e)},indicator:{type:Boolean,default:!1},icon:{type:String,default:()=>m.default.icon},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:l}){const{ui:d,attrs:p}=s("meterGroup",r(e,"ui"),m),{ui:c}=s("meter",void 0,v);if(!l.default)throw new Error("Meter Group has no Meter children.");const f=o((()=>e.min>e.max?e.max:e.min)),g=o((()=>e.max<e.min?e.min:e.max)),x=o((()=>a(l))),b=o((()=>d.value.orientation[d.value.rounded]));const h=o((()=>x.value.map((e=>e.props.label)))),w=o((()=>x.value.map((l=>function(e,l,r){if(l==r)return e<l?0:100;l>r&&(r=[l,l=r][0]);const o=(e-l)/(r-l)*100;return Math.max(0,Math.min(100,o))}(l.props.value,e.min,e.max))))),y=o((()=>Math.max(0,Math.max(w.value.reduce(((e,l)=>e+l),0))))),z=o((()=>x.value.map(((l,r)=>{var o,u,a,t,i,s,p,v,m,c,y,z,j;const $={};$.style={width:`${w.value[r]}%`},$.size=e.size,$.min=f.value,$.max=g.value,$.ui=(null==(o=l.props)?void 0:o.ui)||{},$.ui.wrapper=(null==(a=null==(u=l.props)?void 0:u.ui)?void 0:a.wrapper)||"",$.ui.wrapper+=[null==(i=null==(t=l.props)?void 0:t.ui)?void 0:i.wrapper,d.value.background,d.value.transition].filter(Boolean).join(" "),$.ui.meter=(null==(p=null==(s=l.props)?void 0:s.ui)?void 0:p.meter)||{},$.ui.meter.background=`bg-${l.props.color}-500 dark:bg-${l.props.color}-400`,$.ui.meter.rounded="rounded-none",$.ui.meter.bar=(null==(c=null==(m=null==(v=l.props)?void 0:v.ui)?void 0:m.meter)?void 0:c.bar)||{},0===r&&($.ui.meter.rounded=`${b.value.left} rounded-e-none`),r===x.value.length-1&&($.ui.meter.rounded=`${b.value.right} rounded-s-none`),h.value[r]=l.props.label;const k=n(l,$);return null==(y=k.children)||delete y.label,null==(z=k.props)||delete z.indicator,null==(j=k.props)||delete j.label,k})))),j=o((()=>t(d.value.base,d.value.background,d.value.rounded,d.value.shadow,c.value.meter.size[e.size]))),$=o((()=>t(c.value.indicator.container))),k=o((()=>t(c.value.indicator.text,c.value.indicator.size[e.size]))),M=o((()=>{const r=[void 0,u("div",{class:j.value},z.value),void 0];return e.indicator?r[0]=u("div",{class:$.value},[u("div",{class:k.value,style:{width:`${y.value}%`}},Math.round(y.value)+"%")]):l.indicator&&(r[0]=l.indicator({percent:y.value})),r[2]=u("ol",{class:d.value.list},h.value.map(((l,r)=>{var a;const n=o((()=>{var l,o;return t(c.value.label.base,c.value.label.text,c.value.color[null==(l=z.value[r])?void 0:l.props.color]??c.value.label.color.replaceAll("{color}",(null==(o=z.value[r])?void 0:o.props.color)??c.value.default.color),c.value.label.size[e.size])}));return u("li",{class:n.value},[u(i,{name:(null==(a=z.value[r])?void 0:a.props.icon)??e.icon}),`${l} (${Math.round(w.value[r])}%)`])}))),r}));return()=>u("div",{class:d.value.wrapper,...p.value},M.value)}});export{c as default};
