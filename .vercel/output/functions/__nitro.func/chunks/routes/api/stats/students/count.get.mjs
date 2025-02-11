import{PrismaClient as t}from"@prisma/client";import{d as o}from"../../../../nitro/nitro.mjs";import"mammoth";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";const i=new t,r=o((async()=>({count:await i.estudiante.count()})));export{r as default};
//# sourceMappingURL=count.get.mjs.map
