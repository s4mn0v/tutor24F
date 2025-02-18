import{defineComponent as e,ref as a,mergeProps as t,withCtx as s,createVNode as l,createBlock as r,openBlock as o,Fragment as i,createTextVNode as n,toDisplayString as d,resolveComponent as u,watch as c,createCommentVNode as m,useSSRContext as p}from"vue";import{ssrRenderAttrs as g,ssrRenderComponent as v,ssrInterpolate as x}from"vue/server-renderer";import f from"./Card-B6mXdLK8.mjs";import b from"./Icon-Di_vDYyH.mjs";import h from"./Input-CPH3LW_6.mjs";import j from"./Button-C-PkUfPN.mjs";import y from"./Table-CnzkCUlD.mjs";import k from"./Dropdown-4O5NERc1.mjs";import C from"./Pagination-BuhQ7ldj.mjs";import _ from"./Modal-ButbbXX6.mjs";import"tailwind-merge";import"./tooltip-P8fr8pDa.mjs";import"./entry-B1wW15I9.mjs";import"../nitro/nitro.mjs";import"underscore";import"bluebird/js/release/promise";import"base64-js";import"jszip";import"@xmldom/xmldom";import"@xmldom/xmldom/lib/dom";import"xmlbuilder";import"dingbat-to-unicode";import"fs";import"url";import"os";import"path";import"path-is-absolute";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";import"unhead";import"@unhead/shared";import"vue-router";import"@prisma/client";import"@vueuse/core";import"@iconify/vue";import"vue3-apexcharts";import"./index-CQS-gLPq.mjs";import"@iconify/utils/lib/css/icon";import"./useFormGroup-Dj1FOV-7.mjs";import"./useButtonGroup-DOVi4PLM.mjs";import"./Link-BdFoBY4y.mjs";import"./link-Ch5OrHHS.mjs";import"./button-CHOj1P8S.mjs";import"./Checkbox-DluAUzfD.mjs";import"./Progress-C6AH6urk.mjs";import"./Avatar-DoxxepFO.mjs";import"./Kbd-DHJmTwTI.mjs";import"./keyboard-CrgOGGit.mjs";import"./use-outside-click-qQ0I4h8Q.mjs";import"./focus-management-DUDUmKqn.mjs";import"./use-resolve-button-type-BA0kmWgg.mjs";import"./use-text-value-B7fijwT4.mjs";import"./calculate-active-index-BW1n3MTi.mjs";import"./open-closed-pt2NNRlg.mjs";import"./usePopper-BYI_GJ1j.mjs";import"./transition-Ccui9lse.mjs";import"./portal-DUbJEEiU.mjs";import"./hidden-CFl4aoYx.mjs";import"./active-element-history-BCSenD5G.mjs";import"./micro-task-Yfl05yA4.mjs";import"./description-CM0EfvpF.mjs";const $=e({__name:"EstadisticaAsignaturas",__ssrInlineRender:!0,setup(e){const u=a({subjects:0,students:0,average:0,activeSubjects:0,inactiveSubjects:0,averageMaterials:0}),c=a({subjects:!0,students:!0,average:!0,activeSubjects:!0,inactiveSubjects:!0,averageMaterials:!0});return(e,a,m,p)=>{const h=f,j=b;a(`<div${g(t({class:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"},p))}>`),a(v(h,{class:"bg-gradient-to-br from-blue-200 to-blue-400 dark:from-zinc-800 dark:to-zinc-900 shadow-md rounded-md"},{header:s(((e,a,t,s)=>{if(!a)return[l("div",{class:"flex items-center gap-2"},[l(j,{name:"i-heroicons-book-open",class:"text-primary text-xl"}),l("h3",{class:"font-semibold"},"Asignaturas")])];a(`<div class="flex items-center gap-2"${s}>`),a(v(j,{name:"i-heroicons-book-open",class:"text-primary text-xl"},null,t,s)),a(`<h3 class="font-semibold"${s}>Asignaturas</h3></div>`)})),default:s(((e,a,t,s)=>{if(!a)return[l("div",{class:"text-3xl font-bold"},[c.value.subjects?(o(),r(i,{key:0},[n("Cargando...")],64)):(o(),r(i,{key:1},[n(d(u.value.subjects),1)],64))])];a(`<div class="text-3xl font-bold"${s}>`),c.value.subjects?a("\x3c!--[--\x3eCargando...\x3c!--]--\x3e"):a(`\x3c!--[--\x3e${x(u.value.subjects)}\x3c!--]--\x3e`),a("</div>")})),_:1},m)),a(v(h,{class:"bg-gradient-to-br from-blue-200 to-blue-400 dark:from-zinc-800 dark:to-zinc-900 shadow-md rounded-md"},{header:s(((e,a,t,s)=>{if(!a)return[l("div",{class:"flex items-center gap-2"},[l(j,{name:"i-heroicons-user-group",class:"text-green-500 text-xl"}),l("h3",{class:"font-semibold"},"Estudiantes")])];a(`<div class="flex items-center gap-2"${s}>`),a(v(j,{name:"i-heroicons-user-group",class:"text-green-500 text-xl"},null,t,s)),a(`<h3 class="font-semibold"${s}>Estudiantes</h3></div>`)})),default:s(((e,a,t,s)=>{if(!a)return[l("div",{class:"text-3xl font-bold"},[c.value.students?(o(),r(i,{key:0},[n("Cargando...")],64)):(o(),r(i,{key:1},[n(d(u.value.students),1)],64))])];a(`<div class="text-3xl font-bold"${s}>`),c.value.students?a("\x3c!--[--\x3eCargando...\x3c!--]--\x3e"):a(`\x3c!--[--\x3e${x(u.value.students)}\x3c!--]--\x3e`),a("</div>")})),_:1},m)),a(v(h,{class:"bg-gradient-to-br from-blue-200 to-blue-400 dark:from-zinc-800 dark:to-zinc-900 shadow-md rounded-md"},{header:s(((e,a,t,s)=>{if(!a)return[l("div",{class:"flex items-center gap-2"},[l(j,{name:"i-heroicons-chart-bar",class:"text-purple-500 text-xl"}),l("h3",{class:"font-semibold"},"Promedio por asignatura")])];a(`<div class="flex items-center gap-2"${s}>`),a(v(j,{name:"i-heroicons-chart-bar",class:"text-purple-500 text-xl"},null,t,s)),a(`<h3 class="font-semibold"${s}>Promedio por asignatura</h3></div>`)})),default:s(((e,a,t,s)=>{if(!a)return[l("div",{class:"text-3xl font-bold"},[c.value.average?(o(),r(i,{key:0},[n("Cargando...")],64)):(o(),r(i,{key:1},[n(d(u.value.average),1)],64))])];a(`<div class="text-3xl font-bold"${s}>`),c.value.average?a("\x3c!--[--\x3eCargando...\x3c!--]--\x3e"):a(`\x3c!--[--\x3e${x(u.value.average)}\x3c!--]--\x3e`),a("</div>")})),_:1},m)),a(v(h,{class:"bg-gradient-to-br from-blue-200 to-blue-400 dark:from-zinc-800 dark:to-zinc-900 shadow-md rounded-md"},{header:s(((e,a,t,s)=>{if(!a)return[l("div",{class:"flex items-center gap-2"},[l(j,{name:"i-heroicons-check-circle",class:"text-green-500 text-xl"}),l("h3",{class:"font-semibold"},"Asignaturas Activas")])];a(`<div class="flex items-center gap-2"${s}>`),a(v(j,{name:"i-heroicons-check-circle",class:"text-green-500 text-xl"},null,t,s)),a(`<h3 class="font-semibold"${s}>Asignaturas Activas</h3></div>`)})),default:s(((e,a,t,s)=>{if(!a)return[l("div",{class:"text-3xl font-bold"},[c.value.activeSubjects?(o(),r(i,{key:0},[n("Cargando...")],64)):(o(),r(i,{key:1},[n(d(u.value.activeSubjects),1)],64))])];a(`<div class="text-3xl font-bold"${s}>`),c.value.activeSubjects?a("\x3c!--[--\x3eCargando...\x3c!--]--\x3e"):a(`\x3c!--[--\x3e${x(u.value.activeSubjects)}\x3c!--]--\x3e`),a("</div>")})),_:1},m)),a(v(h,{class:"bg-gradient-to-br from-blue-200 to-blue-400 dark:from-zinc-800 dark:to-zinc-900 shadow-md rounded-md"},{header:s(((e,a,t,s)=>{if(!a)return[l("div",{class:"flex items-center gap-2"},[l(j,{name:"i-heroicons-x-circle",class:"text-red-500 text-xl"}),l("h3",{class:"font-semibold"},"Asignaturas Inactivas")])];a(`<div class="flex items-center gap-2"${s}>`),a(v(j,{name:"i-heroicons-x-circle",class:"text-red-500 text-xl"},null,t,s)),a(`<h3 class="font-semibold"${s}>Asignaturas Inactivas</h3></div>`)})),default:s(((e,a,t,s)=>{if(!a)return[l("div",{class:"text-3xl font-bold"},[c.value.inactiveSubjects?(o(),r(i,{key:0},[n("Cargando...")],64)):(o(),r(i,{key:1},[n(d(u.value.inactiveSubjects),1)],64))])];a(`<div class="text-3xl font-bold"${s}>`),c.value.inactiveSubjects?a("\x3c!--[--\x3eCargando...\x3c!--]--\x3e"):a(`\x3c!--[--\x3e${x(u.value.inactiveSubjects)}\x3c!--]--\x3e`),a("</div>")})),_:1},m)),a(v(h,{class:"bg-gradient-to-br from-blue-200 to-blue-400 dark:from-zinc-800 dark:to-zinc-900 shadow-md rounded-md"},{header:s(((e,a,t,s)=>{if(!a)return[l("div",{class:"flex items-center gap-2"},[l(j,{name:"i-heroicons-document-text",class:"text-blue-500 text-xl"}),l("h3",{class:"font-semibold"},"Prom. de Materiales")])];a(`<div class="flex items-center gap-2"${s}>`),a(v(j,{name:"i-heroicons-document-text",class:"text-blue-500 text-xl"},null,t,s)),a(`<h3 class="font-semibold"${s}>Prom. de Materiales</h3></div>`)})),default:s(((e,a,t,s)=>{if(!a)return[l("div",{class:"text-3xl font-bold"},[c.value.averageMaterials?(o(),r(i,{key:0},[n("Cargando...")],64)):(o(),r(i,{key:1},[n(d(u.value.averageMaterials),1)],64))])];a(`<div class="text-3xl font-bold"${s}>`),c.value.averageMaterials?a("\x3c!--[--\x3eCargando...\x3c!--]--\x3e"):a(`\x3c!--[--\x3e${x(u.value.averageMaterials)}\x3c!--]--\x3e`),a("</div>")})),_:1},m)),a("</div>")}}}),A=$.setup;$.setup=(e,a)=>{const t=p();return(t.modules||(t.modules=new Set)).add("components/admin/EstadisticaAsignaturas.vue"),A?A(e,a):void 0};const E=e({__name:"DeleteAsignaturaModal",__ssrInlineRender:!0,props:{asignatura:{type:Object,default:null},selectedAsignaturas:{type:Array,default:()=>[]}},emits:["confirm"],setup(e,{expose:i,emit:u}){const c=e,m=u,p=a(!1),g2=()=>{p.value=!1},b2=()=>{c.asignatura?m("confirm",c.asignatura):c.selectedAsignaturas.length>0&&m("confirm",c.selectedAsignaturas),g2()};return i({openModal:()=>{p.value=!0},closeModal:g2}),(a,i,u,c)=>{const m=f,g=j;i(v(_,t({modelValue:p.value,"onUpdate:modelValue":e=>p.value=e},c),{default:s(((a,t,i,u)=>{if(!t)return[l(m,null,{header:s((()=>[l("h3",{class:"text-lg font-semibold"},"Confirmar Eliminación de Asignatura")])),footer:s((()=>[l("div",{class:"flex justify-end gap-3"},[l(g,{color:"gray",onClick:g2},{default:s((()=>[n("Cancelar")])),_:1}),l(g,{color:"red",onClick:b2},{default:s((()=>[n("Eliminar")])),_:1})])])),default:s((()=>[e.asignatura?(o(),r("p",{key:0},[n("¿Estás seguro de eliminar la asignatura "),l("strong",null,d(e.asignatura.nombre),1),n("?")])):e.selectedAsignaturas.length>0?(o(),r("p",{key:1},[n(" ¿Estás seguro de eliminar las "),l("strong",null,d(e.selectedAsignaturas.length),1),n(" asignaturas seleccionadas? ")])):(o(),r("p",{key:2},"No se ha seleccionado ninguna asignatura para eliminar."))])),_:1})];t(v(m,null,{header:s(((e,a,t,s)=>{if(!a)return[l("h3",{class:"text-lg font-semibold"},"Confirmar Eliminación de Asignatura")];a(`<h3 class="text-lg font-semibold"${s}>Confirmar Eliminación de Asignatura</h3>`)})),footer:s(((e,a,t,r)=>{if(!a)return[l("div",{class:"flex justify-end gap-3"},[l(g,{color:"gray",onClick:g2},{default:s((()=>[n("Cancelar")])),_:1}),l(g,{color:"red",onClick:b2},{default:s((()=>[n("Eliminar")])),_:1})])];a(`<div class="flex justify-end gap-3"${r}>`),a(v(g,{color:"gray",onClick:g2},{default:s(((e,a,t,s)=>{if(!a)return[n("Cancelar")];a("Cancelar")})),_:1},t,r)),a(v(g,{color:"red",onClick:b2},{default:s(((e,a,t,s)=>{if(!a)return[n("Eliminar")];a("Eliminar")})),_:1},t,r)),a("</div>")})),default:s(((a,t,s,i)=>{if(!t)return[e.asignatura?(o(),r("p",{key:0},[n("¿Estás seguro de eliminar la asignatura "),l("strong",null,d(e.asignatura.nombre),1),n("?")])):e.selectedAsignaturas.length>0?(o(),r("p",{key:1},[n(" ¿Estás seguro de eliminar las "),l("strong",null,d(e.selectedAsignaturas.length),1),n(" asignaturas seleccionadas? ")])):(o(),r("p",{key:2},"No se ha seleccionado ninguna asignatura para eliminar."))];e.asignatura?t(`<p${i}>¿Estás seguro de eliminar la asignatura <strong${i}>${x(e.asignatura.nombre)}</strong>?</p>`):e.selectedAsignaturas.length>0?t(`<p${i}> ¿Estás seguro de eliminar las <strong${i}>${x(e.selectedAsignaturas.length)}</strong> asignaturas seleccionadas? </p>`):t(`<p${i}>No se ha seleccionado ninguna asignatura para eliminar.</p>`)})),_:1},i,u))})),_:1},u))}}}),w=E.setup;E.setup=(e,a)=>{const t=p();return(t.modules||(t.modules=new Set)).add("components/admin/DeleteAsignaturaModal.vue"),w?w(e,a):void 0};const S=e({__name:"TableSubjects",__ssrInlineRender:!0,setup(e){const t=a([]),i=a(""),n=a(1),d=a(50),u=a(!1),p=a([]),g=a(0),x=a(null),b=a(null),_=[{key:"nombre",label:"Nombre"},{key:"carrera",label:"Carrera"},{key:"docente.nombre",label:"Docente"},{key:"jornada",label:"Jornada"},{key:"actions",label:"Acciones"}],C2=async()=>{u.value=!0;const e=await $fetch("/api/admin/asignaturas",{query:{page:n.value,limit:d.value,search:i.value.toLocaleLowerCase()}}),{asignaturas:a,total:t}=e;p.value=a,g.value=t,u.value=!1};c([n,i],C2,{immediate:!0});const A2=e=>[[{label:"Eliminar",icon:"i-heroicons-trash-20-solid",click:()=>{var a;x.value=e,null==(a=b.value)||a.openModal()}}]],w2=async e=>{try{if(Array.isArray(e)){const a=e.map((e=>e.id));await Promise.all(a.map((e=>$fetch(`/api/admin/asignaturas/${e}`,{method:"DELETE"}))))}else await $fetch(`/api/admin/asignaturas/${e.id}`,{method:"DELETE"});n.value=1,C2()}catch(e){}},S2=()=>{var e;t.value.length>0&&(null==(e=b.value)||e.openModal())};return(e,a,c,$)=>{const A=h,w=j,S=y,V=k,M=C;a(v(f,$,{default:s(((e,a,c,f)=>{if(!a)return[l(A,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,placeholder:"Buscar por nombre, carrera o docente..."},null,8,["modelValue","onUpdate:modelValue"]),t.value.length>0?(o(),r(w,{key:0,disabled:0===t.value.length,onClick:S2,color:"red",variant:"outline",class:"mt-4",icon:"i-heroicons-trash-20-solid",title:"Eliminar seleccionados"},null,8,["disabled"])):m("",!0),l("br"),l(S,{rows:p.value,columns:_,loading:u.value,"loading-state":{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},progress:{color:"primary",animation:"carousel"},"empty-state":{icon:"i-heroicons-circle-stack-20-solid",label:"No items."},modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},{"actions-data":s((({row:e})=>[l(V,{items:A2(e)},{default:s((()=>[l(w,{color:"gray",variant:"ghost",icon:"i-heroicons-ellipsis-horizontal-20-solid"})])),_:2},1032,["items"])])),_:1},8,["rows","loading","modelValue","onUpdate:modelValue"]),l("div",{class:"flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"},[l(M,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"page-count":d.value,total:g.value},null,8,["modelValue","onUpdate:modelValue","page-count","total"])]),l(E,{ref_key:"deleteModal",ref:b,asignatura:x.value,selectedAsignaturas:t.value,onConfirm:w2},null,8,["asignatura","selectedAsignaturas"])];a(v(A,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,placeholder:"Buscar por nombre, carrera o docente..."},null,c,f)),t.value.length>0?a(v(w,{disabled:0===t.value.length,onClick:S2,color:"red",variant:"outline",class:"mt-4",icon:"i-heroicons-trash-20-solid",title:"Eliminar seleccionados"},null,c,f)):a("\x3c!----\x3e"),a(`<br${f}>`),a(v(S,{rows:p.value,columns:_,loading:u.value,"loading-state":{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},progress:{color:"primary",animation:"carousel"},"empty-state":{icon:"i-heroicons-circle-stack-20-solid",label:"No items."},modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},{"actions-data":s((({row:e},a,t,r)=>{if(!a)return[l(V,{items:A2(e)},{default:s((()=>[l(w,{color:"gray",variant:"ghost",icon:"i-heroicons-ellipsis-horizontal-20-solid"})])),_:2},1032,["items"])];a(v(V,{items:A2(e)},{default:s(((e,a,t,s)=>{if(!a)return[l(w,{color:"gray",variant:"ghost",icon:"i-heroicons-ellipsis-horizontal-20-solid"})];a(v(w,{color:"gray",variant:"ghost",icon:"i-heroicons-ellipsis-horizontal-20-solid"},null,t,s))})),_:2},t,r))})),_:1},c,f)),a(`<div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"${f}>`),a(v(M,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"page-count":d.value,total:g.value},null,c,f)),a("</div>"),a(v(E,{ref_key:"deleteModal",ref:b,asignatura:x.value,selectedAsignaturas:t.value,onConfirm:w2},null,c,f))})),_:1},c))}}}),V=S.setup;S.setup=(e,a)=>{const t=p();return(t.modules||(t.modules=new Set)).add("components/admin/TableSubjects.vue"),V?V(e,a):void 0};const M=e({__name:"StatisticsChart",__ssrInlineRender:!0,setup(e){const t=a([{name:"Valores",data:[]}]),s=a({chart:{id:"stats-chart"},xaxis:{categories:["Asignaturas totales","Estudiantes totales","Promedio de estudiantes","Asignaturas activas","Asignaturas inactivas","Materiales por asignatura"]},title:{text:"Estadísticas Generales"},plotOptions:{bar:{horizontal:!1}}});return(e,a,l,r)=>{const o=u("ApexChart");a(`<div${g(r)}>`),a(v(o,{type:"bar",options:s.value,series:t.value},null,l)),a("</div>")}}}),z=M.setup;M.setup=(e,a)=>{const t=p();return(t.modules||(t.modules=new Set)).add("components/admin/StatisticsChart.vue"),z?z(e,a):void 0};const D=e({__name:"asignaturas",__ssrInlineRender:!0,setup:e=>(e,a,t,s)=>{a(`<div${g(s)}><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="md:col-span-2">`),a(v($,null,null,t)),a('</div><div class="md:col-span-1">'),a(v(M,null,null,t)),a("</div></div><br>"),a(v(S,null,null,t)),a("</div>")}}),U=D.setup;D.setup=(e,a)=>{const t=p();return(t.modules||(t.modules=new Set)).add("pages/admin/asignaturas.vue"),U?U(e,a):void 0};export{D as default};
//# sourceMappingURL=asignaturas-Bc80lcJZ.mjs.map
