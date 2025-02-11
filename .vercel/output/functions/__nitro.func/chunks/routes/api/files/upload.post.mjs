import{d as e,c as r}from"../../../nitro/nitro.mjs";import{PrismaClient as a}from"@prisma/client";import{createClient as i}from"@supabase/supabase-js";import t from"formidable";import s from"fs/promises";import"mammoth";import"pdf.js-extract";import"node:http";import"node:https";import"@vercel/kv";import"@iconify/utils";import"consola/core";const o=i(process.env.SUPABASE_URL,process.env.SUPABASE_KEY),n=new a,m=e((async e=>{try{const a=t({multiples:!1}),{fields:i,files:m}=await new Promise(((r,i)=>{a.parse(e.node.req,((e,a,t)=>{e&&i(e),r({fields:a,files:t})}))}));if(!m.file)throw r({statusCode:400,message:"No se recibió ningún archivo."});const l=parseInt(Array.isArray(i.idAsignatura)?i.idAsignatura[0]:i.idAsignatura||"0");if(isNaN(l))throw r({statusCode:400,message:"El ID de la asignatura no es válido."});if(!await n.asignatura.findUnique({where:{id:l}}))throw r({statusCode:404,message:"La asignatura no existe."});const p=Array.isArray(m.file)?m.file[0]:m.file,c=await s.readFile(p.filepath),{data:d,error:f}=await o.storage.from("files").upload(p.originalFilename,c,{contentType:p.mimetype,upsert:!0});if(f)throw r({statusCode:500,message:"Error al subir el archivo a Supabase."});const{data:u}=o.storage.from("files").getPublicUrl(d.path),g=u.publicUrl;return await n.material.create({data:{nombre:p.originalFilename||"Archivo",tipo:p.mimetype||"application/octet-stream",url:g,idAsignatura:l}}),{success:!0}}catch(e){throw console.error(e),r({statusCode:500,message:"Error interno del servidor."})}}));export{m as default};
//# sourceMappingURL=upload.post.mjs.map
