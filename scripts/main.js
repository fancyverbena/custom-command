import { world } from "@minecraft/server"

world.beforeEvents.chatSend.subscribe((ev) =>{
    if(ev.message === "!kills"){ 
       ev.sender.runCommandAsync("kill @s");
     }
   })
