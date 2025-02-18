import{mergeProps as e,defineComponent as r,toRef as t,useId as o,computed as l,useSSRContext as a}from"vue";import{twJoin as i}from"tailwind-merge";import{s}from"./tooltip-P8fr8pDa.mjs";import{i as u}from"./useFormGroup-Dj1FOV-7.mjs";import{_ as d,g as n,m as p,t as m}from"./entry-B1wW15I9.mjs";import{ssrRenderAttrs as c,ssrRenderClass as f,ssrLooseContain as b,ssrGetDynamicModelProps as g,ssrRenderAttr as v,ssrRenderSlot as h,ssrInterpolate as x}from"vue/server-renderer";import"@vueuse/core";import"../nitro/nitro.mjs";import"underscore";import"bluebird/js/release/promise";import"base64-js";import"jszip";import"@xmldom/xmldom";import"@xmldom/xmldom/lib/dom";import"xmlbuilder";import"dingbat-to-unicode";import"fs";import"url";import"os";import"path";import"path-is-absolute";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";import"unhead";import"@unhead/shared";import"vue-router";import"@prisma/client";import"@iconify/vue";import"vue3-apexcharts";const y=o,k=p(n.ui.strategy,n.ui.checkbox,{wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-checkbox",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}}),$=r({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:void 0},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>k.default.color,validator:e=>n.ui.colors.includes(e)},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:r}){var o;const{ui:a,attrs:d}=s("checkbox",t(e,"ui"),k,t(e,"class")),{emitFormChange:n,color:p,name:c,inputId:f}=u(e),b=null!=(o=f.value)?o:y(),g=l({get:()=>e.modelValue,set(e){r("update:modelValue",e)}}),v=l((()=>m(i(a.value.base,a.value.form,a.value.rounded,a.value.background,a.value.border,p.value&&a.value.ring.replaceAll("{color}",p.value),p.value&&a.value.color.replaceAll("{color}",p.value)),e.inputClass)));return{ui:a,attrs:d,toggle:g,inputId:b,name:c,inputClass:v,onChange:e=>{r("change",e.target.checked),n()}}}}),j=$.setup;$.setup=(e,r)=>{const t=a();return(t.modules||(t.modules=new Set)).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Checkbox.vue"),j?j(e,r):void 0};const w=d($,[["ssrRender",function(r,t,o,l,a,i,s,u){let d;t(`<div${c(e({class:r.ui.wrapper,"data-n-ids":r.attrs["data-n-ids"]},l))}><div class="${f(r.ui.container)}"><input${c((d=e({id:r.inputId,checked:Array.isArray(r.toggle)?b(r.toggle,r.value):r.toggle,name:r.name,required:r.required,value:r.value,disabled:r.disabled,indeterminate:r.indeterminate,type:"checkbox",class:r.inputClass},r.attrs),e(d,g(d,r.toggle))))}></div>`),r.label||r.$slots.label?(t(`<div class="${f(r.ui.inner)}"><label${v("for",r.inputId)} class="${f(r.ui.label)}">`),h(r.$slots,"label",{label:r.label},(()=>{t(`${x(r.label)}`)}),t,o),r.required?t(`<span class="${f(r.ui.required)}">*</span>`):t("\x3c!----\x3e"),t("</label>"),r.help||r.$slots.help?(t(`<p class="${f(r.ui.help)}">`),h(r.$slots,"help",{help:r.help},(()=>{t(`${x(r.help)}`)}),t,o),t("</p>")):t("\x3c!----\x3e"),t("</div>")):t("\x3c!----\x3e"),t("</div>")}]]);export{w as default};
//# sourceMappingURL=Checkbox-DluAUzfD.mjs.map
