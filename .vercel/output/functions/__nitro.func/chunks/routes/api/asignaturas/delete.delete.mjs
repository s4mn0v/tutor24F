import{d as t,r as i,c as r}from"../../../nitro/nitro.mjs";import{PrismaClient as o}from"@prisma/client";import"underscore";import"bluebird/js/release/promise";import"base64-js";import"jszip";import"@xmldom/xmldom";import"@xmldom/xmldom/lib/dom";import"xmlbuilder";import"dingbat-to-unicode";import"fs";import"url";import"os";import"path";import"path-is-absolute";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";const a=new o,e=t((async t=>{const o=await i(t),{id:e}=o;try{return await a.estudiante.deleteMany({where:{asignaturaId:e}}),await a.asignatura.delete({where:{id:e}}),{message:"Asignatura y estudiantes asociados eliminados exitosamente"}}catch(t){return console.error("Error eliminando la asignatura:",t),r({statusCode:500,message:"Error eliminando la asignatura"})}finally{await a.$disconnect()}}));export{e as default};
//# sourceMappingURL=delete.delete.mjs.map
