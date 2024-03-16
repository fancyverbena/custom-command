import { world } from "@minecraft/server"
export function killall() {}

world.beforeEvents.chatSend.subscribe((ev) =>{
    if(ev.message === "!killall"){ 
        ev.cancel = true;
        ev.sender.runCommandAsync("kill @e");
     }
   })