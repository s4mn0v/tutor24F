import e from"./BN2OBxPi.js";import{u as t,a,b as l}from"./C60RTlwW.js";import{r,g as s,D as o,_ as n,f as i,h as u,o as c,i as v,k as d,F as p,m as f,C as m,P as y,Q as b,S as g,U as w,B as k,Y as x,W as h,c as B}from"./hFqZFfy7.js";import{u as C}from"./DHMDb2DJ.js";import"./C9-cjxml.js";import"./CCWsANb-.js";import"./BdaDRl_o.js";import"./Bfxjojwb.js";import"./Ch5OrHHS.js";import"./DmDc0Qph.js";import"./CHOj1P8S.js";import"./CkVD2Uqn.js";import".prisma/client/index-browser";const j=g(h.ui.strategy,h.ui.carousel,{wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute start-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute end-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid"}}}),P=i({components:{UButton:e},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},dir:{type:String,default:"ltr"},prevButton:{type:Object,default:()=>j.default.prevButton},nextButton:{type:Object,default:()=>j.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:n}){const{ui:i,attrs:u}=C("carousel",w(e,"ui"),j,w(e,"class")),c=r(),v=r(0),{x:d}=t(c,{behavior:"smooth"}),{width:p}=a(c);(e=>{const t=r(0);function a(a){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",t.value=a.pageX,window.addEventListener("mousemove",n),window.addEventListener("mouseup",l)}function l(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),e.value.style.removeProperty("pointer-events"),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",l)}function n(a){a.preventDefault(),e.value.style.pointerEvents="none";const l=a.pageX-t.value;t.value=a.pageX,e.value.scrollBy(-l,0)}s((()=>{e.value&&e.value.addEventListener("mousedown",a)})),o((()=>{e.value&&e.value.removeEventListener("mousedown",a)}))})(c),l(c,(e=>{var t,a;const[l]=e;v.value=(null==(a=null==(t=null==l?void 0:l.target)?void 0:t.firstElementChild)?void 0:a.clientWidth)||0}));const f=k((()=>"rtl"===e.dir)),m=k((()=>v.value?f.value?Math.round(-d.value/v.value)+1:Math.round(d.value/v.value)+1:0)),y=k((()=>{if(!v.value)return 0;const t=Math.round(p.value/v.value);return e.items.length<=t?0:e.items.length-t+1})),b=k((()=>m.value<=1)),g=k((()=>m.value===y.value));function h(){d.value+=f.value?-v.value:v.value}function B(){d.value-=f.value?-v.value:v.value}function P(e){d.value=(e-1)*v.value*(f.value?-1:1)}return n({pages:y,page:m,prev:B,next:h,select:P}),{ui:i,attrs:u,isFirst:b,isLast:g,carouselRef:c,pages:y,currentPage:m,onClickNext:h,onClickPrev:B,onClick:P,twMerge:x}}}),L=["dir"],E=["role"],M=["aria-selected","aria-label","onClick"];const $=n(P,[["render",function(t,a,l,r,s,o){const n=e;return c(),u("div",b({class:t.ui.wrapper},t.attrs,{dir:t.dir}),[v("div",{ref:"carouselRef",class:m([t.ui.container,"no-scrollbar"])},[(c(!0),u(p,null,f(t.items,((e,a)=>(c(),u("div",{key:a,class:m(t.ui.item),role:t.indicators?"tabpanel":null},[y(t.$slots,"default",{item:e,index:a},void 0,!0)],10,E)))),128))],2),t.arrows?(c(),u("div",{key:0,class:m(t.ui.arrows.wrapper)},[y(t.$slots,"prev",{onClick:t.onClickPrev,disabled:t.isFirst},(()=>{var e;return[t.prevButton?(c(),B(n,b({key:0,disabled:t.isFirst},{...t.ui.default.prevButton,...t.prevButton},{class:t.twMerge(t.ui.default.prevButton.class,null==(e=t.prevButton)?void 0:e.class),"aria-label":"Prev",onClick:t.onClickPrev}),null,16,["disabled","class","onClick"])):d("",!0)]}),!0),y(t.$slots,"next",{onClick:t.onClickNext,disabled:t.isLast},(()=>{var e;return[t.nextButton?(c(),B(n,b({key:0,disabled:t.isLast},{...t.ui.default.nextButton,...t.nextButton},{class:t.twMerge(t.ui.default.nextButton.class,null==(e=t.nextButton)?void 0:e.class),"aria-label":"Next",onClick:t.onClickNext}),null,16,["disabled","class","onClick"])):d("",!0)]}),!0)],2)):d("",!0),t.indicators?(c(),u("div",{key:1,role:"tablist",class:m(t.ui.indicators.wrapper)},[(c(!0),u(p,null,f(t.pages,(e=>y(t.$slots,"indicator",{key:e,onClick:t.onClick,active:e===t.currentPage,page:e},(()=>[v("button",{type:"button",role:"tab","aria-selected":e===t.currentPage,class:m([t.ui.indicators.base,e===t.currentPage?t.ui.indicators.active:t.ui.indicators.inactive]),"aria-label":`set slide ${e}`,onClick:a=>t.onClick(e)},null,10,M)]),!0))),128))],2)):d("",!0)],16,L)}],["__scopeId","data-v-a3da86ff"]]);export{$ as default};
