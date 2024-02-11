import { world } from "@minecraft/server"
export function killrm() {}

world.beforeEvents.chatSend.subscribe((ev) =>{
    if(ev.message === "!killrm"){ 
       ev.sender.runCommandAsync("kill @r");
     }
   })
