function doPost(e){
  try{
    if(e){LINE=JSON.parse(e.postData.contents).events[0]};
    LINE.CHANNEL_ACCESS_TOKEN="ENTER_YOUR_CHANNEL_ACCESS_TOKEN";
    
    post_type[LINE.type]();
    
  }catch(ERROR){
    Logger.log(JSON.stringify(ERROR, null, '  '));
    var log = Logger.getLog();
//    var doc = DocumentApp.openById("enter_your_empty_google_document_id");//if you need, resolve this comment
//    doc.getBody().setText(log);
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