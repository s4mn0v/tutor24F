import{d as o,r,c as t}from"../../../nitro/nitro.mjs";import{PrismaClient as e,Rol as s}from"@prisma/client";import*as a from"bcrypt";import"underscore";import"bluebird/js/release/promise";import"base64-js";import"jszip";import"@xmldom/xmldom";import"@xmldom/xmldom/lib/dom";import"xmlbuilder";import"dingbat-to-unicode";import"fs";import"url";import"os";import"path";import"path-is-absolute";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";const i=new e,m=o((async o=>{const e=await r(o),{documentoIdentidad:m,nombre:n,correo:c,telefono:d="",contrasena:p}=e;if(!(m&&n&&c&&p))throw t({statusCode:400,statusMessage:"Todos los campos son obligatorios."});try{const o=await a.hash(p,10);return{message:"Docente creado exitosamente",userId:(await i.usuario.create({data:{documentoIdentidad:m,nombre:n,correo:c,telefono:d,contrasena:o,rol:s.DOCENTE}})).id}}catch(o){return console.error("Error al crear el docente:",o),o instanceof Error?t({statusCode:500,message:`Error al crear el docente: ${o.message}`}):t({statusCode:500,message:"Error desconocido al crear el docente."})}finally{await i.$disconnect()}}));export{m as default};
//# sourceMappingURL=_users_.post.mjs.map
