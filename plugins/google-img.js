/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import*as e from"fs";let handler=async(a,{conn:t,text:r,args:s})=>{if(!s[0])return a.reply(`Que desea buscar en Google im\xe1genes?`);let i=await t.getName(a.sender),n=encodeURIComponent(r),l=a.reply(MultiNK.Bsqd(i));await l;try{let m=await fetchJson(`https://latam-api.vercel.app/api/g_img?apikey=${MyApiKey}&q=${n}`);if(!m.imagen)return a.reply("[ ! ] Sin resultados");t.sendMessage(a.chat,{image:{url:m.imagen},caption:`*[ GOOGLE-CHAN ] ✓*
*~> Resultado para* : _${r}_
*~> Tama\xf1o* : _${m.ancho} x ${m.altura} PX_`,mentions:[a.sender]},{quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51995386439-1604595598@g.us"},message:{orderMessage:{itemCount:737,status:200,thumbnail:e.readFileSync("./multimedia/imagenes/mylogo.jpg"),surface:200,message:`${i} => ${r}`,orderTitle:"Matt_M",sellerJid:"0@s.whatsapp.net"}}}})}catch(d){a.reply(MultiNK.Error0())}};handler.help=["imagen"].map(e=>e+" <busqueda>"),handler.tags=["busqueda"],handler.command=/^(imagen)$/i,handler.limit=!0;export default handler;
