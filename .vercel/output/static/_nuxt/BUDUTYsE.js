import e from"./C9-cjxml.js";import t from"./BN2OBxPi.js";import{f as o,g as s,D as l,L as n,B as a,r as i,M as u,N as r,_ as c,l as p,h as d,o as f,F as m,m as v,c as y,w as g,b,O as h,P as D,Q as I,C as S,T as O,n as j,e as B,t as x,R as w,S as E,U as P,j as k,V as L,W as C,X as H}from"./hFqZFfy7.js";import{A as _,N as A,o as $,a as z,i as K,u as T,s as R}from"./BvCfb3ib.js";import{s as M}from"./BUyXXaLr.js";import{l as U,i as N,t as F}from"./DNRP4idu.js";import{u as Q}from"./DHMDb2DJ.js";import{b as V}from"./CHOj1P8S.js";import"./CCWsANb-.js";import"./BdaDRl_o.js";import"./Bfxjojwb.js";import"./Ch5OrHHS.js";import"./DmDc0Qph.js";import"./CkVD2Uqn.js";import".prisma/client/index-browser";var W,X=((W=X||{})[W.Open=0]="Open",W[W.Closed=1]="Closed",W);let q=Symbol("DisclosureContext");function G(e){let t=r(q,null);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return t}let J=Symbol("DisclosurePanelContext");let Y=o({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:o}){let s=i(e.defaultOpen?0:1),l=i(null),u=i(null),r={buttonId:i(`headlessui-disclosure-button-${K()}`),panelId:i(`headlessui-disclosure-panel-${K()}`),disclosureState:s,panel:l,button:u,toggleDisclosure(){s.value=T(s.value,{0:1,1:0})},closeDisclosure(){1!==s.value&&(s.value=1)},close(e){r.closeDisclosure();let t=e?e instanceof HTMLElement?e:e.value instanceof HTMLElement?$(e):$(r.button):$(r.button);null==t||t.focus()}};return n(q,r),F(a((()=>T(s.value,{0:N.Open,1:N.Closed})))),()=>{let{defaultOpen:l,...n}=e,a={open:0===s.value,close:r.close};return _({theirProps:n,ourProps:{},slot:a,slots:t,attrs:o,name:"Disclosure"})}}}),Z=o({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:t,slots:o,expose:n}){let c=G("DisclosureButton"),p=r(J,null),d=a((()=>null!==p&&p.value===c.panelId.value));s((()=>{d.value||null!==e.id&&(c.buttonId.value=e.id)})),l((()=>{d.value||(c.buttonId.value=null)}));let f=i(null);n({el:f,$el:f}),d.value||u((()=>{c.button.value=f.value}));let m=M(a((()=>({as:e.as,type:t.type}))),f);function v(){var t;e.disabled||(d.value?(c.toggleDisclosure(),null==(t=$(c.button))||t.focus()):c.toggleDisclosure())}function y(t){var o;if(!e.disabled)if(d.value)switch(t.key){case z.Space:case z.Enter:t.preventDefault(),t.stopPropagation(),c.toggleDisclosure(),null==(o=$(c.button))||o.focus()}else switch(t.key){case z.Space:case z.Enter:t.preventDefault(),t.stopPropagation(),c.toggleDisclosure()}}function g(e){if(e.key===z.Space)e.preventDefault()}return()=>{var s;let l={open:0===c.disclosureState.value},{id:n,...a}=e,i=d.value?{ref:f,type:m.value,onClick:v,onKeydown:y}:{id:null!=(s=c.buttonId.value)?s:n,ref:f,type:m.value,"aria-expanded":0===c.disclosureState.value,"aria-controls":0===c.disclosureState.value||$(c.panel)?c.panelId.value:void 0,disabled:!!e.disabled||void 0,onClick:v,onKeydown:y,onKeyup:g};return _({ourProps:i,theirProps:a,slot:l,attrs:t,slots:o,name:"DisclosureButton"})}}}),ee=o({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:o,expose:i}){let u=G("DisclosurePanel");s((()=>{null!==e.id&&(u.panelId.value=e.id)})),l((()=>{u.panelId.value=null})),i({el:u.panel,$el:u.panel}),n(J,u.panelId);let r=U(),c=a((()=>null!==r?(r.value&N.Open)===N.Open:0===u.disclosureState.value));return()=>{var s;let l={open:0===u.disclosureState.value,close:u.close},{id:n,...a}=e,i={id:null!=(s=u.panelId.value)?s:n,ref:u.panel};return _({ourProps:i,theirProps:a,slot:l,attrs:t,slots:o,features:A.RenderStrategy|A.Static,visible:c.value,name:"DisclosurePanel"})}}});const te=E(C.ui.strategy,C.ui.accordion,{wrapper:"w-full flex flex-col",container:"w-full flex flex-col",item:{base:"",size:"text-sm",color:"text-gray-500 dark:text-gray-400",padding:"pt-1.5 pb-3",icon:"ms-auto transform transition-transform duration-200 flex-shrink-0"},transition:{enterActiveClass:"overflow-hidden transition-[height] duration-200 ease-out",leaveActiveClass:"overflow-hidden transition-[height] duration-200 ease-out"},default:{openIcon:"i-heroicons-chevron-down-20-solid",closeIcon:"",class:"mb-1.5 w-full",variant:"soft",truncate:!0}}),oe=E(C.ui.strategy,C.ui.button,V),se=o({components:{HDisclosure:Y,HDisclosureButton:Z,HDisclosurePanel:ee,UIcon:e,UButton:t},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>te.default.openIcon},unmount:{type:Boolean,default:!1},closeIcon:{type:String,default:()=>te.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["open","close"],setup(e,{emit:t}){const{ui:o,attrs:s}=Q("accordion",P(e,"ui"),te,P(e,"class")),l=a((()=>oe)),n=i([]),u=a((()=>n.value.map((({open:e})=>e))));return k(u,((e,o)=>{for(const s in e){const l=o[s],n=e[s];!l&&n?t("open",s):l&&!n&&t("close",s)}}),{immediate:!0}),R((()=>H())),{ui:o,uiButton:l,attrs:s,buttonRefs:n,closeOthers:function(t,o){!e.items[t].closeOthers&&e.multiple||n.value.forEach((e=>{e.open&&e.close(o.target)}))},omit:L,onEnter:function(e,t){const o=e;o.style.height="0",o.offsetHeight,o.style.height=o.scrollHeight+"px",o.addEventListener("transitionend",t,{once:!0})},onBeforeLeave:function(e){const t=e;t.style.height=t.scrollHeight+"px",t.offsetHeight},onAfterEnter:function(e){e.style.height="auto"},onLeave:function(e,t){const o=e;o.style.height="0",o.addEventListener("transitionend",t,{once:!0})}}}}),le={key:1};const ne=c(se,[["render",function(o,s,l,n,a,i){const u=e,r=t,c=p("HDisclosureButton"),E=p("HDisclosurePanel"),P=p("HDisclosure");return f(),d("div",{class:S(o.ui.wrapper)},[(f(!0),d(m,null,v(o.items,((e,t)=>(f(),y(P,{key:t,as:"div",class:S(o.ui.container),"default-open":o.defaultOpen||e.defaultOpen},{default:g((({open:s,close:l})=>[b(c,{ref_for:!0,ref:()=>o.buttonRefs[t]={open:s,close:l},as:"template",disabled:e.disabled,onClick:e=>o.closeOthers(t,e),onKeydown:[h((e=>o.closeOthers(t,e)),["enter"]),h((e=>o.closeOthers(t,e)),["space"])]},{default:g((()=>[D(o.$slots,"default",{item:e,index:t,open:s,close:l},(()=>[b(r,I({ref_for:!0},{...o.omit(o.ui.default,["openIcon","closeIcon"]),...o.attrs,...o.omit(e,["slot","disabled","content","defaultOpen"])}),{trailing:g((()=>[b(u,{name:s&&o.closeIcon?o.closeIcon:o.openIcon,class:S([s&&!o.closeIcon?"-rotate-180":"",o.uiButton.icon.size[e.size||o.uiButton.default.size],o.ui.item.icon])},null,8,["name","class"])])),_:2},1040)]))])),_:2},1032,["disabled","onClick","onKeydown"]),b(O,I({ref_for:!0},o.ui.transition,{onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave}),{default:g((()=>[o.unmount?(f(),y(E,{key:0,class:S([o.ui.item.base,o.ui.item.size,o.ui.item.color,o.ui.item.padding]),unmount:""},{default:g((()=>[D(o.$slots,e.slot||"item",{item:e,index:t,open:s,close:l},(()=>[B(x(e.content),1)]))])),_:2},1032,["class"])):j((f(),d("div",le,[b(E,{class:S([o.ui.item.base,o.ui.item.size,o.ui.item.color,o.ui.item.padding]),static:""},{default:g((()=>[D(o.$slots,e.slot||"item",{item:e,index:t,open:s,close:l},(()=>[B(x(e.content),1)]))])),_:2},1032,["class"])],512)),[[w,s]])])),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])])),_:2},1032,["class","default-open"])))),128))],2)}]]);export{ne as default};
