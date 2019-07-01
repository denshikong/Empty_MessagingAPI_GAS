function reply_test(){
  var reply=new Reply([{type:"text",text:"テキストはかもされました"}]);
  reply.send=function(){
    return [this._url(),this._package()];
  }
  Logger.log(reply.send());
}

var Reply=function(mes_arg,quick_arg){
  this.mes=mes_arg|| [{type:"text",text:"テキストはかもされました"}];
  this.quick=quick_arg|| null;
};
Reply.prototype.send=function(){
  UrlFetchApp.fetch(this._url(),this._package());
}
Reply.prototype._url=function(){
  return 'https://api.line.me/v2/bot/message/reply';
}
Reply.prototype._package=function(){
  return {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + LINE.CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': this._payload()
  }
}
Reply.prototype._payload=function(){
  var obj={'replyToken': LINE.replyToken,
           'messages': this._merged()};
  return JSON.stringify(obj);
}
Reply.prototype._merged=function(){
  var merging=this.mes;
  (this.quick)&&(merging[(this.mes.length - 1)].quickReply={items:this.quick});
  return merging;
}
Reply.prototype._cut_meses=function(){
  (this.mes.length>5)&&(this.mes.length=5);
}
Reply.prototype._cut_quicks=function(){
  (this.quick && this.quick.length>13)&&(this.quick.length=13);
}

