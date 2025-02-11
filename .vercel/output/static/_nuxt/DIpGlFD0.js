import{f as e,r as t,g as a,h as n,i as o,k as s,t as r,F as l,m as i,n as c,v as d,p as u,o as g,_ as p}from"./hFqZFfy7.js";import"./CkVD2Uqn.js";import".prisma/client/index-browser";const m={class:"min-h-screen bg-gray-100 dark:bg-gray-900"},v={class:"container mx-auto px-4 py-8"},x={class:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"},b={class:"bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"},h={class:"text-3xl font-bold text-blue-500"},y={class:"bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"},w={class:"text-3xl font-bold text-green-500"},f={class:"bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"},k={class:"text-lg text-gray-600 dark:text-gray-300"},T={key:0,class:"bg-red-100 dark:bg-red-500 text-gray-900 dark:text-white p-4 rounded-lg mb-8"},j={key:1,class:"flex justify-center items-center h-64"},C={key:2,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},I={class:"relative"},S=["href"],A=["src","alt"],P={class:"absolute top-0 right-0 m-4"},E={class:"bg-blue-500 text-white px-3 py-1 rounded-full text-sm"},N={class:"p-6"},z={class:"text-xl font-semibold mb-3 text-gray-900 dark:text-white"},M={class:"text-base leading-relaxed mb-4 text-gray-600 dark:text-gray-300"},O={class:"flex justify-between items-center"},$={class:"text-sm text-gray-600 dark:text-gray-400"},q=["onClick"],D={key:3,class:"text-center py-12"},L={key:4,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"},G={class:"bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"},H={class:"p-8"},R={class:"flex justify-between items-start mb-6"},_={class:"text-3xl font-bold text-gray-900 dark:text-white"},B=["src","alt"],U={class:"bg-white dark:bg-gray-700 rounded-lg p-6 mb-6"},F={key:0,class:"flex justify-center items-center h-20"},J={key:1,class:"text-lg space-y-4 text-gray-600 dark:text-gray-300"},V={class:"prose dark:prose-invert max-w-none whitespace-pre-line"},W={class:"bg-white dark:bg-gray-700 rounded-lg p-6"},Y={class:"mb-4"},K={class:"flex justify-end space-x-4"},Q=["disabled"],X={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Z={key:1,class:"animate-spin rounded-full h-5 w-5 border-2 border-white"},ee={key:0,class:"mt-6 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-300 dark:border-gray-700"},te={class:"prose dark:prose-invert max-w-none"},ae={class:"text-lg text-gray-600 dark:text-gray-300"},ne=p(e({__name:"index",setup(e){const p=t([]),ne=t(null),oe=t(""),se=t(!1),re=t(0),le=t(null),ie=t(null),ce=t(!0),de=t(""),ue=t((new Date).toISOString());function ge(){const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1);t.setHours(0,0,0,0);const a=t.getTime()-e.getTime();setTimeout((()=>{pe(),ge()}),a)}async function pe(){var e;try{ce.value=!0,de.value="";const t=await fetch("/api/news");if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const a=await t.json();(null==(e=a.articles)?void 0:e.length)>0?p.value=await Promise.all(a.articles.map((async(e,t)=>({id:t+1,title:e.title||"Sin título",summary:await me(e),fullContent:e.content||e.description||"Contenido no disponible",image:e.urlToImage||"https://via.placeholder.com/800x400?text=IA+News",date:e.publishedAt||(new Date).toISOString(),category:ve(e.title),url:e.url,description:e.description,content:e.content})))):(de.value="No se encontraron noticias de IA. Mostrando contenido de respaldo.",we()),ue.value=(new Date).toISOString()}catch(t){de.value="Error al cargar las noticias de IA. Mostrando contenido de respaldo.",we()}finally{ce.value=!1}}async function me(e){var t;const a=`\n    Lee el siguiente artículo y genera una introducción clara y concisa de no más de 300 caracteres.\n    La introducción debe capturar la esencia del artículo y proporcionar una idea clara de lo que trata la noticia.\n    No uses puntos suspensivos (...) y asegúrate de que la idea esté completa.\n\n    Título: ${e.title}\n    Contenido: ${e.content||e.description||"No hay contenido disponible"}\n\n    Introducción:\n  `;try{const e=await fetch("/api/gemini",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:a})});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);let t=await e.text();return t=t.trim(),t.endsWith(".")||(t+="."),t}catch(n){return e.description||(null==(t=e.content)?void 0:t.substring(0,300))||"No hay información disponible sobre esta noticia."}}function ve(e){const t=e.toLowerCase();return t.includes("gpt")||t.includes("lenguaje")?"Avances en IA":t.includes("investigación")||t.includes("estudio")?"Investigación":t.includes("robot")||t.includes("automati")?"Robótica":t.includes("medicina")||t.includes("salud")?"Salud":t.includes("negocio")||t.includes("empresa")?"Negocios":"Tecnología"}function xe(e){const t=new Date(e);return new Intl.DateTimeFormat("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}function be(e){e.target.src="https://via.placeholder.com/800x400?text=IA+News"}async function he(e){ne.value=e,le.value=null,ie.value=null,await async function(e){se.value=!0;try{ie.value=await async function(e){const t=`\n    Genera un resumen detallado y coherente del siguiente artículo de noticias. El resumen debe tener máximo 15 líneas y seguir esta estructura:\n    1. Título del resumen (basado en el contenido del artículo, no repetir el título original)\n    2. Línea en blanco\n    3. Un párrafo introductorio que capture la esencia del artículo (máximo 3 líneas)\n    4. Línea en blanco\n    5. "Puntos clave:" (en una línea separada)\n    6. 3-5 puntos clave del artículo, cada uno en una línea separada y comenzando con un guion (-)\n    7. Línea en blanco (si es necesario para llegar a 15 líneas)\n    8. Una o dos oraciones de conclusión que resuman las implicaciones o la importancia del artículo (máximo 2 líneas)\n    Artículo:\n    Título: ${e.title}\n    Contenido: ${e.fullContent}\n    Resumen (máximo 15 líneas):\n  `;try{const e=await fetch("/api/gemini",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:t})});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return(await e.text()).trim()}catch(a){throw new Error("No se pudo generar el resumen. Por favor, intenta de nuevo más tarde.")}}(e),re.value++}catch(t){ie.value="Lo sentimos, no se pudo generar el resumen en este momento. Por favor, intenta de nuevo más tarde."}finally{se.value=!1}}(e)}async function ye(){if(oe.value&&ne.value){se.value=!0;try{const e=`\n      Contexto: Estás analizando un artículo sobre inteligencia artificial con el siguiente título y contenido:\n\n      Título: ${ne.value.title}\n      Contenido: ${ne.value.fullContent}\n\n      Pregunta del usuario: ${oe.value}\n\n      Instrucciones:\n      1. Responde a la pregunta del usuario de manera directa y concisa.\n      2. Utiliza la información del artículo como contexto, pero no te limites estrictamente a ella.\n      3. Si la pregunta no está directamente relacionada con el artículo, proporciona una respuesta general y luego intenta relacionarla con algún aspecto del artículo si es posible.\n      4. Sé creativo y analítico en tu respuesta, ofreciendo perspectivas interesantes cuando sea apropiado.\n      5. Si la pregunta requiere información que no está en el artículo, puedes hacer suposiciones razonables o mencionar que esa información específica no está disponible en el texto.\n\n      Respuesta:\n    `,t=await fetch("/api/gemini",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);le.value=await t.text(),re.value++,oe.value=""}catch(e){le.value="Error al procesar la pregunta. Por favor, intenta de nuevo más tarde."}finally{se.value=!1}}}function we(){p.value=[{id:1,title:"GPT-4 establece nuevo récord en pruebas de razonamiento",summary:"OpenAI ha anunciado un avance significativo con GPT-4, su último modelo de lenguaje. El sistema ha superado significativamente a sus predecesores en múltiples pruebas de razonamiento y comprensión del lenguaje natural.",fullContent:"OpenAI ha anunciado que GPT-4 ha establecido nuevos récords en diversas pruebas de razonamiento y comprensión del lenguaje natural. Este avance representa un salto significativo en las capacidades de los modelos de lenguaje y podría tener implicaciones importantes en campos como la investigación científica, la educación y el desarrollo de software.",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995",date:(new Date).toISOString(),category:"Avances en IA",url:"https://example.com/gpt4-record"}]}function fe(){ne.value=null,le.value=null,ie.value=null}function ke(){le.value=null}return a((()=>{pe(),ge()})),(e,t)=>(g(),n("div",m,[t[14]||(t[14]=o("header",{class:"bg-white dark:bg-gray-800 shadow-sm"},[o("div",{class:"container mx-auto px-4 py-6"},[o("h1",{class:"text-4xl font-bold text-gray-900 dark:text-white"}," Noticias de Inteligencia Artificial "),o("p",{class:"mt-2 text-gray-600 dark:text-gray-300"}," Mantente actualizado con las últimas noticias y avances en IA ")])],-1)),o("main",v,[o("div",x,[o("div",b,[t[1]||(t[1]=o("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-2"}," Noticias Totales ",-1)),o("p",h,r(p.value.length),1)]),o("div",y,[t[2]||(t[2]=o("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-2"}," Interacciones con Gemini ",-1)),o("p",w,r(re.value),1)]),o("div",f,[t[3]||(t[3]=o("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-2"}," Última Actualización ",-1)),o("p",k,r(xe(ue.value)),1)])]),de.value?(g(),n("div",T,r(de.value),1)):s("",!0),ce.value?(g(),n("div",j,t[4]||(t[4]=[o("div",{class:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"},null,-1)]))):p.value.length>0?(g(),n("div",C,[(g(!0),n(l,null,i(p.value,(e=>(g(),n("div",{key:e.id,class:"bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"},[o("div",I,[o("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},[o("img",{src:e.image,alt:e.title,class:"w-full h-56 object-cover cursor-pointer",onError:be},null,40,A)],8,S),o("div",P,[o("span",E,r(e.category),1)])]),o("div",N,[o("h2",z,r(e.title),1),o("p",M,r(e.summary),1),o("div",O,[o("span",$,r(xe(e.date)),1),o("button",{onClick:t=>he(e),class:"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center space-x-2"},t[5]||(t[5]=[o("span",null,"Más información",-1),o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)]),8,q)])])])))),128))])):(g(),n("div",D,t[6]||(t[6]=[o("p",{class:"text-xl text-gray-600 dark:text-gray-300"},"No hay noticias disponibles en este momento.",-1)]))),ne.value?(g(),n("div",L,[o("div",G,[o("div",H,[o("div",R,[o("h2",_,r(ne.value.title),1),o("button",{onClick:fe,class:"text-gray-400 hover:text-gray-200"},t[7]||(t[7]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),o("img",{src:ne.value.image,alt:ne.value.title,class:"w-full h-80 object-cover mb-6 rounded-lg",onError:be},null,40,B),o("div",U,[t[9]||(t[9]=o("h3",{class:"text-xl font-semibold mb-4 text-gray-900 dark:text-white"}," Resumen por IA ",-1)),se.value?(g(),n("div",F,t[8]||(t[8]=[o("div",{class:"animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"},null,-1)]))):ie.value?(g(),n("div",J,[o("div",V,r(ie.value),1)])):s("",!0)]),o("div",W,[t[13]||(t[13]=o("h3",{class:"text-xl font-semibold mb-4 text-gray-900 dark:text-white"}," Consulta a Gemini sobre esta noticia ",-1)),o("div",Y,[c(o("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>oe.value=e),class:"w-full p-4 border rounded-md bg-gray-200 dark:bg-gray-600 text-lg text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Haz cualquier pregunta sobre esta noticia...",rows:"4"},null,512),[[d,oe.value]])]),o("div",K,[o("button",{onClick:ye,disabled:!oe.value||se.value,class:"bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center space-x-2"},[o("span",null,r(se.value?"Procesando...":"Preguntar a Gemini"),1),se.value?(g(),n("div",Z)):(g(),n("svg",X,t[10]||(t[10]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7"},null,-1)])))],8,Q)]),le.value?(g(),n("div",ee,[o("div",{class:"flex justify-between items-start mb-4"},[t[12]||(t[12]=u('<div class="flex items-center space-x-3" data-v-0a8597cb><div class="bg-green-500 rounded-full p-2" data-v-0a8597cb><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-0a8597cb><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-v-0a8597cb></path></svg></div><h4 class="text-xl font-semibold text-gray-900 dark:text-white" data-v-0a8597cb>Respuesta de Gemini</h4></div>',1)),o("button",{onClick:ke,class:"text-gray-400 hover:text-gray-200"},t[11]||(t[11]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),o("div",te,[o("p",ae,r(le.value),1)])])):s("",!0)])])])])):s("",!0)])]))}}),[["__scopeId","data-v-0a8597cb"]]);export{ne as default};
