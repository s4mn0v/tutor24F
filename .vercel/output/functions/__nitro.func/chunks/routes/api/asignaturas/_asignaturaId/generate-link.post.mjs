import{d as e,c as r}from"../../../../nitro/nitro.mjs";import{PrismaClient as t}from"@prisma/client";import{v4 as a}from"uuid";import"mammoth";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";const o=new t,n=e((async e=>{var t;const n=Number(null==(t=e.context.params)?void 0:t.asignaturaId);try{const e=a(),r=new Date(Date.now()+12e5),t=await o.asignatura.update({where:{id:n},data:{enlaceRegistro:e,fechaExpiracion:r}});return{enlaceRegistro:t.enlaceRegistro,fechaExpiracion:t.fechaExpiracion}}catch(e){return console.error("Error generando el enlace:",e),r({statusCode:500,message:"Error generando el enlace"})}finally{await o.$disconnect()}}));export{n as default};
//# sourceMappingURL=generate-link.post.mjs.map
