function devPost(text_str){

  LINE = {type:"message",
          source:{userId:"Developer",type:"user",roomId:undefined,groupId:undefined},
          timestamp:(Date.now()),
          message: {type:"text",id:"9687705556026",text:text_str},
          Sav:PropertiesService.getScriptProperties()
         };
  LINE.TIME = new Moment.moment(LINE.timestamp);
  try{
    index.DEVGENERAL();
  }catch(ERROR){
    Logger.log(JSON.stringify(ERROR, null, '  '));
    var a = Logger.getLog();
    mes.pushMulti(a,"◇エラーとか雑魚ですね。");
  }finally{
    return index.devsend();
  }
  
}
// ______ _______    _                                 ...,           ...(gMMMMMMM""MMMMM# jM^.#=
// |     \|______\  /            ..,....,.       .7!         .JNgNMMMMMMMMH9"^`     .MMMMi.MF.Mt    .,
// |_____/|______ \/          .+HHMNMMMMMR`?"`               .MMMMMMM@^`        ..g1MMMMuMf8(#ga.gMMMM
//                         ?""7!       ~`      .                !?7`      ..JZ"=~~~JMM@_7<7T<,<~_-J??!
//      `               `                     .N..gg..   ...gNMMMMMt...+NM5!.~...~-MM@._~...._(gMF....
//    `..gNY` `  `  `            ...(27?TMWNM#"qMMMMMMMMMMMMMMMMv"MMN_ .....~..~.(dMF...~~_(JMB"_~.~_(
//   ,T"!                `   ..MMY?MMMx _ -MM%.MMMMMMMMMMMMMMMMMN JMM] ~..~..~._(MM#..__(+M9~___((JMNr
//        ...(+gMMMMNgggNMMMMMMMMMe WMM|  dMM:,MMMMMMMMMMMMMMMMMM`,MMF ~...~..__dMD.__.MM#_~..NMMMM#".
//`  .(gMMM""WMMF MMMMMMMMMMMMMMMMM[ MMN. JMM] MMMMMMMMMMMMMMMMM# -MM% ..~...__d#~_-T"(MMNMMMMMB<.~__.
//gMMM8^~.._ dMM`.MMMMMMMMMMMMMMMMMN JMM[ .MMN.-MMMMMMMMMMMMMMMM^.MM#  ..~..__J@..~_((MMM#5:.._....~..
//7!.....~._ MMM.,MMMMMMMMMMMMMMMMM# (MM[  ,MMN,.WMMMMMMMMMMMM@`.MMM' ..~..~(J5._(+M94MM]__......~..~.
//..~.~...~_ JMM] MMMMMMMMMMMMMMMMMF MMM` . .HMMm, TWMMMMMM#"`.dMMB` _`_.~_ HJ2Y=~~_(MM~~...~.~.~..~..
//.-((MNMNNM" MMM,.HMMMMMMMMMMMMMMD JMM$ -~._ ?MMMMN-.......gMMM#^..... .-?""~_..._(MM^....~__~(_...~.
//T"WM577"~.~..WMMa.?HMMMMMMMMMM@`.MMMY .~....   7WMMMMMMMMMMY"`.&MMMM] ........~._JM3_.~.._(MMF...~..
//............- ?MMMm, ?""""""`..MMM#'   `.....+gNJ.. ``~` ...NMMMMMMM@ -~~~.~.~._.#..._(p_(MF._..~...
//.-~~.~.~.~.~... ?WMMMMNggggMMMMMMa.JMMMMMMMMMMMMMMMMMMMN.-MMMMMMM"777TMY""YMM#91#`!.\_#J.M4MNggNMMNJ
//MHMNgNJ(J&gg,`   .._TMMM#""^               7TWMMMH"""MMMaJMMB"!                M`      ,"        7TW
//           .THMMMMMMMMY"!`                                                   .d`     .^
//                ```       ..+...,    .JMB"!                                 .#`     ,^