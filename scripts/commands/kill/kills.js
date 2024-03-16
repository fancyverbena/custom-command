import { world } from "@minecraft/server"
export function kills() {}

world.beforeEvents.chatSend.subscribe((ev) =>{
    if(ev.message === "!kills"){ 
      ev.cancel = true; 
      ev.sender.runCommandAsync("kill @s");
     }
   })
