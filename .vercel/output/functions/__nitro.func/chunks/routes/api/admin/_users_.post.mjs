import{d as o,r as e,c as r}from"../../../nitro/nitro.mjs";import{PrismaClient as t,Rol as a}from"@prisma/client";import*as s from"bcrypt";import"mammoth";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";const n=new t,c=o((async o=>{const t=await e(o),{documentoIdentidad:c,nombre:i,correo:m,telefono:d="",contrasena:l}=t;if(!(c&&i&&m&&l))throw r({statusCode:400,statusMessage:"Todos los campos son obligatorios."});try{const o=await s.hash(l,10);return{message:"Docente creado exitosamente",userId:(await n.usuario.create({data:{documentoIdentidad:c,nombre:i,correo:m,telefono:d,contrasena:o,rol:a.DOCENTE}})).id}}catch(o){return console.error("Error al crear el docente:",o),o instanceof Error?r({statusCode:500,message:`Error al crear el docente: ${o.message}`}):r({statusCode:500,message:"Error desconocido al crear el docente."})}finally{await n.$disconnect()}}));export{c as default};
//# sourceMappingURL=_users_.post.mjs.map
