import{_ as e}from"./Ct_72RIb.js";import i from"./C9-cjxml.js";import a from"./DEL64khh.js";import s from"./BdaDRl_o.js";import r from"./-IccA17Q.js";import{_ as t,f as o,h as n,o as l,F as c,m as u,c as d,k as b,b as g,w as v,P as f,Q as p,O as y,U as m,B as k,Z as x,Y as w,S as h,W as j,C as A,e as z,t as U}from"./hFqZFfy7.js";import{u as $}from"./DHMDb2DJ.js";import{a as C}from"./Ch5OrHHS.js";import"./CCWsANb-.js";import"./CkVD2Uqn.js";import".prisma/client/index-browser";import"./DmDc0Qph.js";import"./Bfxjojwb.js";const _=h(j.ui.strategy,j.ui.verticalNavigation,{wrapper:"relative",base:"group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",ring:"focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",padding:"px-2.5 py-1.5",width:"w-full",rounded:"rounded-md",font:"font-medium",size:"text-sm",active:"text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ms-auto relative rounded",color:"gray",variant:"solid",size:"xs"},divider:{wrapper:{base:"p-2"}}}),P=o({components:{UIcon:i,UAvatar:e,UBadge:a,ULink:s,UDivider:r},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:i,attrs:a}=$("verticalNavigation",m(e,"ui"),_,m(e,"class"));return{ui:i,attrs:a,sections:k((()=>Array.isArray(e.links[0])?e.links:[e.links])),getULinkProps:C,twMerge:w,twJoin:x}}}),L={key:0,class:"sr-only"};const M=t(P,[["render",function(t,o,m,k,x,w){const h=e,j=i,$=a,C=s,_=r;return l(),n("nav",p({class:t.ui.wrapper},t.attrs),[(l(!0),n(c,null,u(t.sections,((e,i)=>(l(),n("ul",{key:`section${i}`},[(l(!0),n(c,null,u(e,((e,a)=>(l(),n("li",{key:`section${i}-${a}`},[g(C,p({ref_for:!0},t.getULinkProps(e),{class:[t.ui.base,t.ui.padding,t.ui.width,t.ui.ring,t.ui.rounded,t.ui.font,t.ui.size],"active-class":t.ui.active,"inactive-class":t.ui.inactive,onClick:e.click,onKeyup:o[0]||(o[0]=y((e=>e.target.blur()),["enter"]))}),{default:v((({isActive:i})=>[f(t.$slots,"avatar",{link:e,isActive:i},(()=>[e.avatar?(l(),d(h,p({key:0,ref_for:!0},{size:t.ui.avatar.size,...e.avatar},{class:[t.ui.avatar.base]}),null,16,["class"])):b("",!0)])),f(t.$slots,"icon",{link:e,isActive:i},(()=>[e.icon?(l(),d(j,{key:0,name:e.icon,class:A(t.twMerge(t.twJoin(t.ui.icon.base,i?t.ui.icon.active:t.ui.icon.inactive),e.iconClass))},null,8,["name","class"])):b("",!0)])),f(t.$slots,"default",{link:e,isActive:i},(()=>[e.label?(l(),n("span",{key:0,class:A(t.twMerge(t.ui.label,e.labelClass))},[i?(l(),n("span",L," Current page: ")):b("",!0),z(" "+U(e.label),1)],2)):b("",!0)])),f(t.$slots,"badge",{link:e,isActive:i},(()=>[e.badge?(l(),d($,p({key:0,ref_for:!0},{size:t.ui.badge.size,color:t.ui.badge.color,variant:t.ui.badge.variant,..."string"==typeof e.badge||"number"==typeof e.badge?{label:e.badge}:e.badge},{class:t.ui.badge.base}),null,16,["class"])):b("",!0)]))])),_:2},1040,["class","active-class","inactive-class","onClick"])])))),128)),i<t.sections.length-1?(l(),d(_,{key:0,ui:t.ui.divider},null,8,["ui"])):b("",!0)])))),128))],16)}]]);export{M as default};
