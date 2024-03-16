import { world } from "@minecraft/server"
export function help() {}

world.beforeEvents.chatSend.subscribe((ev) =>{
    if(ev.message === "!help"){ 
        ev.cancel = true;
        world.sendMessage('コマンド一覧\n !kills(自滅)\n !killrm(ランダムなプレイヤーを倒す)\n !killa(全てのプレイヤーを倒す)\n !killall(すべてを倒す)');
     }
   })