const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_38_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc2LFxuICAgICAgICA5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQyLFxuICAgICAgICA2MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDY4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNixcbiAgICAgICAgMTksXG4gICAgICAgIDM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk3LFxuICAgICAgICAzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDksXG4gICAgICAgIDYzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY1LFxuICAgICAgICA0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDkyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICA1NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRHUmtwdUJ0ZHlGUy92ZVZ6bnlPVE4rdE16U3o0ZFdLZTNtdVlqa092a3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRYdXBzZXdQUVgyWmFXUmY3LUNmR2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTUyNzU4ZWEtZTVmNi00OGFkLWE1MzYtNTg1YTI3MWExODNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MSxcbiAgICAgIDEwMyxcbiAgICAgIDY5LFxuICAgICAgMTU2LFxuICAgICAgMTkzLFxuICAgICAgMTM2LFxuICAgICAgMzYsXG4gICAgICA1LFxuICAgICAgMTY0LFxuICAgICAgMjUzLFxuICAgICAgMjUsXG4gICAgICA5NixcbiAgICAgIDE0OSxcbiAgICAgIDE0MSxcbiAgICAgIDE3NSxcbiAgICAgIDEyNSxcbiAgICAgIDI1MSxcbiAgICAgIDE2MyxcbiAgICAgIDg0LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDIyMCxcbiAgICAgIDk5LFxuICAgICAgMzAsXG4gICAgICAxNzcsXG4gICAgICAxMjUsXG4gICAgICA4MSxcbiAgICAgIDgyLFxuICAgICAgMTQ5LFxuICAgICAgMjIxLFxuICAgICAgNzksXG4gICAgICA1MixcbiAgICAgIDM0LFxuICAgICAgODYsXG4gICAgICAyMCxcbiAgICAgIDEzNyxcbiAgICAgIDE1NCxcbiAgICAgIDE4NSxcbiAgICAgIDIwMyxcbiAgICAgIDIzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCRkhCWjlQQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0ODA5NTQwNzo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzAzOTE0OTA1ODQ3Mzc6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFh6dnJrSEVKTDQxN3NHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrQVdQaDRaS0UrS290YkFVblpKU1ZldW9FaDJpRjFWMWNYWE9rQW1rLzNJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZFUVVnMzFoVFlldmdIdFIzaVlaN1MzUWhqa1BQZVNtVXJFcFp2d2xnWWRZdCtiL0tFUlVxdFVDcTR4OHFHMkt4c1R3K3lNajR1cWplTGVxL0NKTEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVpb1NWZnlLQUZWc1FZay9hU2YyTXE1U010MEN5dklQU0JTbkpRYWxUSFJoenJ4NVMxd0pSNmxMUTFZQUlTdE41cjlGek45bzh5QWU5TkZ0ZHVkdkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDgwOTU0MDc6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTc4NTQ5NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SAMMY BOT",
  ownername:process.env.OWNER_NAME|| "Samuel",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
