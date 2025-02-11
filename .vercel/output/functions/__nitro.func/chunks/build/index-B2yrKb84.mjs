import{defineComponent as a,ref as t,mergeProps as e,useSSRContext as r}from"vue";import{ssrRenderAttrs as d,ssrInterpolate as s,ssrRenderList as i,ssrRenderAttr as l,ssrIncludeBooleanAttr as o}from"vue/server-renderer";import{_ as c}from"./entry-B1wW15I9.mjs";import"../nitro/nitro.mjs";import"mammoth";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";import"unhead";import"@unhead/shared";import"vue-router";import"@prisma/client";import"@vueuse/core";import"tailwind-merge";import"@iconify/vue";import"vue3-apexcharts";const n=a({__name:"index",__ssrInlineRender:!0,setup(a){const r=t([]),c=t(null),n=t(""),v=t(!1),b=t(0),g=t(null),u=t(null),x=t(!0),p=t(""),m=t((new Date).toISOString());function h(a){const t=new Date(a);return new Intl.DateTimeFormat("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}return(a,t,w,y)=>{t(`<div${d(e({class:"min-h-screen bg-gray-100 dark:bg-gray-900"},y))} data-v-0a8597cb><header class="bg-white dark:bg-gray-800 shadow-sm" data-v-0a8597cb><div class="container mx-auto px-4 py-6" data-v-0a8597cb><h1 class="text-4xl font-bold text-gray-900 dark:text-white" data-v-0a8597cb> Noticias de Inteligencia Artificial </h1><p class="mt-2 text-gray-600 dark:text-gray-300" data-v-0a8597cb> Mantente actualizado con las últimas noticias y avances en IA </p></div></header><main class="container mx-auto px-4 py-8" data-v-0a8597cb><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-v-0a8597cb><div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6" data-v-0a8597cb><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2" data-v-0a8597cb> Noticias Totales </h3><p class="text-3xl font-bold text-blue-500" data-v-0a8597cb>${s(r.value.length)}</p></div><div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6" data-v-0a8597cb><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2" data-v-0a8597cb> Interacciones con Gemini </h3><p class="text-3xl font-bold text-green-500" data-v-0a8597cb>${s(b.value)}</p></div><div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6" data-v-0a8597cb><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2" data-v-0a8597cb> Última Actualización </h3><p class="text-lg text-gray-600 dark:text-gray-300" data-v-0a8597cb>${s(h(m.value))}</p></div></div>`),p.value?t(`<div class="bg-red-100 dark:bg-red-500 text-gray-900 dark:text-white p-4 rounded-lg mb-8" data-v-0a8597cb>${s(p.value)}</div>`):t("\x3c!----\x3e"),x.value?t('<div class="flex justify-center items-center h-64" data-v-0a8597cb><div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" data-v-0a8597cb></div></div>'):r.value.length>0?(t('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-0a8597cb>\x3c!--[--\x3e'),i(r.value,(a=>{t(`<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105" data-v-0a8597cb><div class="relative" data-v-0a8597cb><a${l("href",a.url)} target="_blank" rel="noopener noreferrer" data-v-0a8597cb><img${l("src",a.image)}${l("alt",a.title)} class="w-full h-56 object-cover cursor-pointer" data-v-0a8597cb></a><div class="absolute top-0 right-0 m-4" data-v-0a8597cb><span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm" data-v-0a8597cb>${s(a.category)}</span></div></div><div class="p-6" data-v-0a8597cb><h2 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white" data-v-0a8597cb>${s(a.title)}</h2><p class="text-base leading-relaxed mb-4 text-gray-600 dark:text-gray-300" data-v-0a8597cb>${s(a.summary)}</p><div class="flex justify-between items-center" data-v-0a8597cb><span class="text-sm text-gray-600 dark:text-gray-400" data-v-0a8597cb>${s(h(a.date))}</span><button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center space-x-2" data-v-0a8597cb><span data-v-0a8597cb>Más información</span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-0a8597cb><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-0a8597cb></path></svg></button></div></div></div>`)})),t("\x3c!--]--\x3e</div>")):t('<div class="text-center py-12" data-v-0a8597cb><p class="text-xl text-gray-600 dark:text-gray-300" data-v-0a8597cb>No hay noticias disponibles en este momento.</p></div>'),c.value?(t(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" data-v-0a8597cb><div class="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" data-v-0a8597cb><div class="p-8" data-v-0a8597cb><div class="flex justify-between items-start mb-6" data-v-0a8597cb><h2 class="text-3xl font-bold text-gray-900 dark:text-white" data-v-0a8597cb>${s(c.value.title)}</h2><button class="text-gray-400 hover:text-gray-200" data-v-0a8597cb><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-0a8597cb><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-0a8597cb></path></svg></button></div><img${l("src",c.value.image)}${l("alt",c.value.title)} class="w-full h-80 object-cover mb-6 rounded-lg" data-v-0a8597cb><div class="bg-white dark:bg-gray-700 rounded-lg p-6 mb-6" data-v-0a8597cb><h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white" data-v-0a8597cb> Resumen por IA </h3>`),v.value?t('<div class="flex justify-center items-center h-20" data-v-0a8597cb><div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500" data-v-0a8597cb></div></div>'):u.value?t(`<div class="text-lg space-y-4 text-gray-600 dark:text-gray-300" data-v-0a8597cb><div class="prose dark:prose-invert max-w-none whitespace-pre-line" data-v-0a8597cb>${s(u.value)}</div></div>`):t("\x3c!----\x3e"),t(`</div><div class="bg-white dark:bg-gray-700 rounded-lg p-6" data-v-0a8597cb><h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white" data-v-0a8597cb> Consulta a Gemini sobre esta noticia </h3><div class="mb-4" data-v-0a8597cb><textarea class="w-full p-4 border rounded-md bg-gray-200 dark:bg-gray-600 text-lg text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Haz cualquier pregunta sobre esta noticia..." rows="4" data-v-0a8597cb>${s(n.value)}</textarea></div><div class="flex justify-end space-x-4" data-v-0a8597cb><button${o(!n.value||v.value)?" disabled":""} class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center space-x-2" data-v-0a8597cb><span data-v-0a8597cb>${s(v.value?"Procesando...":"Preguntar a Gemini")}</span>`),v.value?t('<div class="animate-spin rounded-full h-5 w-5 border-2 border-white" data-v-0a8597cb></div>'):t('<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-0a8597cb><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7" data-v-0a8597cb></path></svg>'),t("</button></div>"),g.value?t(`<div class="mt-6 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-300 dark:border-gray-700" data-v-0a8597cb><div class="flex justify-between items-start mb-4" data-v-0a8597cb><div class="flex items-center space-x-3" data-v-0a8597cb><div class="bg-green-500 rounded-full p-2" data-v-0a8597cb><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-0a8597cb><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-v-0a8597cb></path></svg></div><h4 class="text-xl font-semibold text-gray-900 dark:text-white" data-v-0a8597cb>Respuesta de Gemini</h4></div><button class="text-gray-400 hover:text-gray-200" data-v-0a8597cb><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-0a8597cb><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-0a8597cb></path></svg></button></div><div class="prose dark:prose-invert max-w-none" data-v-0a8597cb><p class="text-lg text-gray-600 dark:text-gray-300" data-v-0a8597cb>${s(g.value)}</p></div></div>`):t("\x3c!----\x3e"),t("</div></div></div></div>")):t("\x3c!----\x3e"),t("</main></div>")}}}),v=n.setup;n.setup=(a,t)=>{const e=r();return(e.modules||(e.modules=new Set)).add("pages/admin/index.vue"),v?v(a,t):void 0};const b=c(n,[["__scopeId","data-v-0a8597cb"]]);export{b as default};
//# sourceMappingURL=index-B2yrKb84.mjs.map
