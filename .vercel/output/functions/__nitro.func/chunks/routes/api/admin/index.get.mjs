import{Prisma as t,Rol as o,PrismaClient as e}from"@prisma/client";import{d as i,g as r}from"../../../nitro/nitro.mjs";import"underscore";import"bluebird/js/release/promise";import"base64-js";import"jszip";import"@xmldom/xmldom";import"@xmldom/xmldom/lib/dom";import"xmlbuilder";import"dingbat-to-unicode";import"fs";import"url";import"os";import"path";import"path-is-absolute";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";const s=new e,a=i((async e=>{const i=r(e),a=parseInt(i.page)||1,m=parseInt(i.limit)||50,n=i.search||"",p={docente:{is:{rol:o.DOCENTE}},OR:[{nombre:{contains:n,mode:t.QueryMode.insensitive}},{carrera:{contains:n,mode:t.QueryMode.insensitive}},{docente:{is:{nombre:{contains:n,mode:t.QueryMode.insensitive}}}}]},d=await s.asignatura.count({where:p});return{asignaturas:await s.asignatura.findMany({where:p,skip:(a-1)*m,take:m,include:{docente:{select:{id:!0,nombre:!0}}}}),total:d,page:a,totalPages:Math.ceil(d/m)}}));export{a as default};
//# sourceMappingURL=index.get.mjs.map
