"use strict";

var _ = Underscore.load(); //Underscore.js  M3i7wmUA_5n0NSEaa6NnNqOBao7QLBR4j
//var m = Momment.momment(); //Moments.js     MHMchiX6c1bwSqGM1PZiW_PxhMjh3Sh48

function doPost(e) {
  LINE=JSON.parse(e.postData.contents).events[0];
  LINE.Sav=PropertiesService.getScriptProperties();
  LINE.CHANNEL_ACCESS_TOKEN =LINE.Sav.getProperty("CHANNEL_ACCESS_TOKEN");
  LINE.TIME=new Moment.moment(LINE.timestamp);
  try{
    index.GENERAL();
  }catch(ERROR){
    Logger.log(JSON.stringify(ERROR, null, '  '));
    var a = Logger.getLog();
    mes.pushMulti(a,"◇このメッセージが見れるのは正直予想外です…電工まで教えてください、お願い。");
    var dev = new DEVELOPER();
    index.devsend();
  }
}
/*
　　　　　　　　　 ＿
　　　 　　　　／´ 　`フ
　　　　, ｀ "/ 　　　　!
  　   ' 　　 レ 　_,　rミ
　　 ; 　 　　  `ミ _xノ､
 　　i　 　　ﾐ　　; ,､､、ヽ､
 ,.‐! 　 　  ﾐ　　i　　ヽ._))
// ｀｀､　　　 ミ　ヽ
|l　  　｀ ｰｰ -"'ゝ､))
ヽ.ー─'´)
 　`"""´
  */