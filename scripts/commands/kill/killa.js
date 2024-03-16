import { world } from "@minecraft/server"
export function killa() {}

world.beforeEvents.chatSend.subscribe((ev) =>{
    if(ev.message === "!killa"){ 
       ev.cancel = true;
       ev.sender.runCommandAsync("kill @a");
     }
   })