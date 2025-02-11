import{f as e,H as t,r as a,g as n,h as o,i as s,k as i,t as l,I as r,F as c,m as d,n as u,v as p,p as m,o as g}from"./hFqZFfy7.js";import"./CkVD2Uqn.js";import".prisma/client/index-browser";const v={class:"min-h-screen bg-white dark:bg-zinc-900"},x={class:"container mx-auto px-4 py-8"},h={class:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"},b={class:"bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6"},w={class:"text-3xl font-bold text-blue-500"},f={class:"bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6"},y={class:"text-3xl font-bold text-green-500"},k={class:"bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6"},z={class:"text-lg text-zinc-600 dark:text-gray-300"},T={key:0,class:"bg-red-500 text-white p-4 rounded-lg mb-8"},j={key:1,class:"flex justify-center items-center h-64"},C={key:2,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},I={class:"relative"},S=["href"],A=["src","alt"],P={class:"absolute top-0 right-0 m-4"},E={class:"bg-blue-500 text-white px-3 py-1 rounded-full text-sm"},N={class:"p-6"},M={class:"text-xl font-semibold mb-3 text-zinc-900 dark:text-white"},O={class:"text-zinc-600 dark:text-gray-300 mb-4 text-base leading-relaxed"},$={class:"flex justify-between items-center"},q={class:"text-sm text-zinc-500 dark:text-gray-400"},D=["onClick"],L={key:3,class:"text-center py-12"},G={key:4,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"},H={class:"bg-white dark:bg-zinc-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"},R={class:"p-8"},B={class:"flex justify-between items-start mb-6"},U={class:"text-3xl font-bold text-zinc-900 dark:text-white"},F=["src","alt"],J={class:"bg-zinc-100 dark:bg-zinc-700 rounded-lg p-6 mb-6"},_={key:0,class:"flex justify-center items-center h-20"},V={key:1,class:"text-zinc-600 dark:text-gray-300 text-lg space-y-4"},W={class:"prose prose-invert max-w-none whitespace-pre-line"},Y={class:"bg-zinc-100 dark:bg-zinc-700 rounded-lg p-6"},K={class:"mb-4"},Q={class:"flex justify-end space-x-4"},X=["disabled"],Z={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ee={key:1,class:"animate-spin rounded-full h-5 w-5 border-2 border-white"},te={key:0,class:"mt-6 bg-zinc-200 dark:bg-zinc-800 rounded-lg p-6 border border-zinc-300 dark:border-zinc-700"},ae={class:"prose dark:prose-invert max-w-none"},ne={class:"text-zinc-600 dark:text-gray-300 text-lg"},oe=e({__name:"index",setup(e){const oe=t("articles",(()=>[])),se=a(null),ie=a(""),le=a(!1),re=a(0),ce=a(null),de=a(null),ue=a(!0),pe=a(""),me=a((new Date).toISOString());function ge(){const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1);t.setHours(0,0,0,0);const a=t.getTime()-e.getTime();setTimeout((()=>{ve(),ge()}),a)}async function ve(){var e;try{ue.value=!0,pe.value="";const t=await fetch("/api/news");if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const a=await t.json();(null==(e=a.articles)?void 0:e.length)>0?oe.value=await Promise.all(a.articles.map((async(e,t)=>({id:t+1,title:e.title||"Sin título",summary:await xe(e),fullContent:e.content||e.description||"Contenido no disponible",image:e.urlToImage||"https://via.placeholder.com/800x400?text=IA+News",date:e.publishedAt||(new Date).toISOString(),category:he(e.title),url:e.url,description:e.description,content:e.content})))):(pe.value="No se encontraron noticias de IA. Mostrando contenido de respaldo.",ke()),me.value=(new Date).toISOString()}catch(t){pe.value="Error al cargar las noticias de IA. Mostrando contenido de respaldo.",ke()}finally{ue.value=!1}}async function xe(e){var t;const a=`\n      Lee el siguiente artículo y genera una introducción clara y concisa de no más de 300 caracteres.\n      La introducción debe capturar la esencia del artículo y proporcionar una idea clara de lo que trata la noticia.\n      No uses puntos suspensivos (...) y asegúrate de que la idea esté completa.\n  \n      Título: ${e.title}\n      Contenido: ${e.content||e.description||"No hay contenido disponible"}\n  \n      Introducción:\n    `;try{const e=await fetch("/api/gemini",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:a})});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);let t=await e.text();return t=t.trim(),t.endsWith(".")||(t+="."),t}catch(n){return e.description||(null==(t=e.content)?void 0:t.substring(0,300))||"No hay información disponible sobre esta noticia."}}function he(e){const t=e.toLowerCase();return t.includes("gpt")||t.includes("lenguaje")?"Avances en IA":t.includes("investigación")||t.includes("estudio")?"Investigación":t.includes("robot")||t.includes("automati")?"Robótica":t.includes("medicina")||t.includes("salud")?"Salud":t.includes("negocio")||t.includes("empresa")?"Negocios":"Tecnología"}function be(e){const t=new Date(e);return new Intl.DateTimeFormat("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}function we(e){e.target.src="https://via.placeholder.com/800x400?text=IA+News"}async function fe(e){se.value=e,ce.value=null,de.value=null,await async function(e){le.value=!0;try{de.value=await async function(e){const t=`\n      Genera un resumen detallado y coherente del siguiente artículo de noticias. El resumen debe tener máximo 15 líneas y seguir esta estructura:\n      1. Título del resumen (basado en el contenido del artículo, no repetir el título original)\n      2. Línea en blanco\n      3. Un párrafo introductorio que capture la esencia del artículo (máximo 3 líneas)\n      4. Línea en blanco\n      5. "Puntos clave:" (en una línea separada)\n      6. 3-5 puntos clave del artículo, cada uno en una línea separada y comenzando con un guion (-)\n      7. Línea en blanco (si es necesario para llegar a 15 líneas)\n      8. Una o dos oraciones de conclusión que resuman las implicaciones o la importancia del artículo (máximo 2 líneas)\n      Artículo:\n      Título: ${e.title}\n      Contenido: ${e.fullContent}\n      Resumen (máximo 15 líneas):\n    `;try{const e=await fetch("/api/gemini",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:t})});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return(await e.text()).trim()}catch(a){throw new Error("No se pudo generar el resumen. Por favor, intenta de nuevo más tarde.")}}(e),re.value++}catch(t){de.value="Lo sentimos, no se pudo generar el resumen en este momento. Por favor, intenta de nuevo más tarde."}finally{le.value=!1}}(e)}async function ye(){if(ie.value&&se.value){le.value=!0;try{const e=`\n        Contexto: Estás analizando un artículo sobre inteligencia artificial con el siguiente título y contenido:\n  \n        Título: ${se.value.title}\n        Contenido: ${se.value.fullContent}\n  \n        Pregunta del usuario: ${ie.value}\n  \n        Instrucciones:\n        1. Responde a la pregunta del usuario de manera directa y concisa.\n        2. Utiliza la información del artículo como contexto, pero no te limites estrictamente a ella.\n        3. Si la pregunta no está directamente relacionada con el artículo, proporciona una respuesta general y luego intenta relacionarla con algún aspecto del artículo si es posible.\n        4. Sé creativo y analítico en tu respuesta, ofreciendo perspectivas interesantes cuando sea apropiado.\n        5. Si la pregunta requiere información que no está en el artículo, puedes hacer suposiciones razonables o mencionar que esa información específica no está disponible en el texto.\n  \n        Respuesta:\n      `,t=await fetch("/api/gemini",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);ce.value=await t.text(),re.value++,ie.value=""}catch(e){ce.value="Error al procesar la pregunta. Por favor, intenta de nuevo más tarde."}finally{le.value=!1}}}function ke(){oe.value=[{id:1,title:"GPT-4 establece nuevo récord en pruebas de razonamiento",summary:"OpenAI ha anunciado un avance significativo con GPT-4, su último modelo de lenguaje. El sistema ha superado significativamente a sus predecesores en múltiples pruebas de razonamiento y comprensión del lenguaje natural.",fullContent:"OpenAI ha anunciado que GPT-4 ha establecido nuevos récords en diversas pruebas de razonamiento y comprensión del lenguaje natural. Este avance representa un salto significativo en las capacidades de los modelos de lenguaje y podría tener implicaciones importantes en campos como la investigación científica, la educación y el desarrollo de software.",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995",date:(new Date).toISOString(),category:"Avances en IA",url:"https://example.com/gpt4-record"}]}function ze(){se.value=null,ce.value=null,de.value=null}function Te(){ce.value=null}return n((()=>{0===oe.value.length?ve():ue.value=!1,ge()})),(e,t)=>(g(),o("div",v,[t[14]||(t[14]=s("header",{class:"bg-white dark:bg-zinc-800 shadow-sm"},[s("div",{class:"container mx-auto px-4 py-6"},[s("h1",{class:"text-4xl font-bold text-zinc-900 dark:text-white"}," Noticias de Inteligencia Artificial para Estudiantes "),s("p",{class:"mt-2 text-zinc-600 dark:text-zinc-300"}," Mantente actualizado con las últimas noticias y avances en IA relevantes para tu educación ")])],-1)),s("main",x,[s("div",h,[s("div",b,[t[1]||(t[1]=s("h3",{class:"text-lg font-semibold text-zinc-900 dark:text-white mb-2"}," Noticias Totales ",-1)),s("p",w,l(r(oe).length),1)]),s("div",f,[t[2]||(t[2]=s("h3",{class:"text-lg font-semibold text-zinc-900 dark:text-white mb-2"}," Interacciones con Gemini ",-1)),s("p",y,l(re.value),1)]),s("div",k,[t[3]||(t[3]=s("h3",{class:"text-lg font-semibold text-zinc-900 dark:text-white mb-2"}," Última Actualización ",-1)),s("p",z,l(be(me.value)),1)])]),pe.value?(g(),o("div",T,l(pe.value),1)):i("",!0),ue.value?(g(),o("div",j,t[4]||(t[4]=[s("div",{class:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"},null,-1)]))):r(oe).length>0?(g(),o("div",C,[(g(!0),o(c,null,d(r(oe),(e=>(g(),o("div",{key:e.id,class:"bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"},[s("div",I,[s("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},[s("img",{src:e.image,alt:e.title,class:"w-full h-56 object-cover cursor-pointer",onError:we},null,40,A)],8,S),s("div",P,[s("span",E,l(e.category),1)])]),s("div",N,[s("h2",M,l(e.title),1),s("p",O,l(e.summary),1),s("div",$,[s("span",q,l(be(e.date)),1),s("button",{onClick:t=>fe(e),class:"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center space-x-2"},t[5]||(t[5]=[s("span",null,"Más información",-1),s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)]),8,D)])])])))),128))])):(g(),o("div",L,t[6]||(t[6]=[s("p",{class:"text-zinc-600 dark:text-gray-300 text-xl"},"No hay noticias disponibles en este momento.",-1)]))),se.value?(g(),o("div",G,[s("div",H,[s("div",R,[s("div",B,[s("h2",U,l(se.value.title),1),s("button",{onClick:ze,class:"text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-gray-200"},t[7]||(t[7]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),s("img",{src:se.value.image,alt:se.value.title,class:"w-full h-80 object-cover mb-6 rounded-lg",onError:we},null,40,F),s("div",J,[t[9]||(t[9]=s("h3",{class:"text-xl font-semibold mb-4 text-zinc-900 dark:text-white"}," Resumen por IA ",-1)),le.value?(g(),o("div",_,t[8]||(t[8]=[s("div",{class:"animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"},null,-1)]))):de.value?(g(),o("div",V,[s("div",W,l(de.value),1)])):i("",!0)]),s("div",Y,[t[13]||(t[13]=s("h3",{class:"text-xl font-semibold mb-4 text-zinc-900 dark:text-white"}," Consulta a Gemini sobre esta noticia ",-1)),s("div",K,[u(s("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>ie.value=e),class:"w-full p-4 border rounded-md bg-white dark:bg-zinc-600 text-zinc-900 dark:text-white text-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Haz cualquier pregunta sobre esta noticia...",rows:"4"},null,512),[[p,ie.value]])]),s("div",Q,[s("button",{onClick:ye,disabled:!ie.value||le.value,class:"bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center space-x-2"},[s("span",null,l(le.value?"Procesando...":"Preguntar a Gemini"),1),le.value?(g(),o("div",ee)):(g(),o("svg",Z,t[10]||(t[10]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7"},null,-1)])))],8,X)]),ce.value?(g(),o("div",te,[s("div",{class:"flex justify-between items-start mb-4"},[t[12]||(t[12]=m('<div class="flex items-center space-x-3"><div class="bg-green-500 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div><h4 class="text-xl font-semibold text-zinc-900 dark:text-white">Respuesta de Gemini</h4></div>',1)),s("button",{onClick:Te,class:"text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-gray-200"},t[11]||(t[11]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),s("div",ae,[s("p",ne,l(ce.value),1)])])):i("",!0)])])])])):i("",!0)])]))}});export{oe as default};
