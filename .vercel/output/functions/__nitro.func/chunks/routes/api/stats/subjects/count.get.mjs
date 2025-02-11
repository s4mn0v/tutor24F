import{PrismaClient as t}from"@prisma/client";import{d as o}from"../../../../nitro/nitro.mjs";import"mammoth";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";const r=new t,i=o((async()=>({count:await r.asignatura.count()})));export{i as default};
//# sourceMappingURL=count.get.mjs.map
