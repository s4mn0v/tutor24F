import e from"./C9-cjxml.js";import{_ as a,f as r,h as l,o as t,P as s,k as i,i as n,a4 as o,Q as u,C as c,S as m,U as d,B as p,Z as v,W as b,t as f,E as y,c as x,e as z}from"./hFqZFfy7.js";import{u as C}from"./DHMDb2DJ.js";import{m as j}from"./DOl6dAT8.js";import"./CCWsANb-.js";import"./CkVD2Uqn.js";import".prisma/client/index-browser";const g=m(b.ui.strategy,b.ui.meter,j),h=r({components:{UIcon:e},inheritAttrs:!1,slots:Object,props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},indicator:{type:Boolean,default:!1},label:{type:String,default:null},size:{type:String,default:()=>g.default.size,validator:e=>Object.keys(g.meter.size).includes(e)},color:{type:String,default:()=>g.default.color,validator:e=>[...b.ui.colors,...Object.keys(g.color)].includes(e)},icon:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:r}=C("meter",d(e,"ui"),g,d(e,"class"));const l=p((()=>v(a.value.indicator.container))),t=p((()=>v(a.value.indicator.text,a.value.indicator.size[e.size]))),s=p((()=>v(a.value.meter.base,a.value.meter.background,a.value.meter.ring,a.value.meter.rounded,a.value.meter.shadow,a.value.color[e.color]??a.value.meter.color.replaceAll("{color}",e.color),a.value.meter.size[e.size]))),i=p((()=>v(a.value.meter.appearance.inner,a.value.meter.appearance.meter,a.value.meter.appearance.bar,a.value.meter.appearance.value))),n=p((()=>v(a.value.meter.bar.transition,a.value.meter.bar.ring,a.value.meter.bar.rounded,a.value.meter.bar.size[e.size]))),o=p((()=>v(a.value.label.base,a.value.label.text,a.value.color[e.color]??a.value.label.color.replaceAll("{color}",e.color),a.value.label.size[e.size]))),u=p((()=>e.min>e.max?e.max:e.min)),c=p((()=>e.max<e.min?e.min:e.max)),m=p((()=>function(e,a,r){if(a==r)return e<a?0:100;a>r&&(r=[a,a=r][0]);const l=(e-a)/(r-a)*100;return Math.max(0,Math.min(100,l))}(Number(e.value),u.value,c.value)));return{ui:a,attrs:r,indicatorContainerClass:l,indicatorClass:t,meterClass:s,meterAppearanceClass:i,meterBarClass:n,labelClass:o,normalizedMin:u,normalizedMax:c,percent:m}}}),k=["value","min","max"];const M=a(h,[["render",function(a,r,m,d,p,v){const b=e;return t(),l("div",u({class:a.ui.wrapper},a.attrs),[a.indicator||a.$slots.indicator?s(a.$slots,"indicator",o(u({key:0},{percent:a.percent,value:a.value})),(()=>[n("div",{class:c(a.indicatorContainerClass),style:y({width:`${a.percent}%`})},[n("div",{class:c(a.indicatorClass)},f(Math.round(a.percent))+"% ",3)],6)])):i("",!0),n("meter",{value:a.value,min:a.normalizedMin,max:a.normalizedMax,class:c([a.meterClass,a.meterAppearanceClass,a.meterBarClass])},null,10,k),a.label||a.$slots.label?s(a.$slots,"label",o(u({key:1},{percent:a.percent,value:a.value})),(()=>[n("div",{class:c(a.labelClass)},[a.icon?(t(),x(b,{key:0,name:a.icon},null,8,["name"])):i("",!0),z(" "+f(a.label),1)],2)])):i("",!0)],16)}]]);export{M as default};
