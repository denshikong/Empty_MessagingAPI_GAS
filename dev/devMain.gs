var INDEX=function(){};

INDEX.prototype.DEVGENERAL=function(){
  mes.push(LINE.message.text+">");
  this.getPostType();
  var END_TIME=new Moment.moment();
  mes.push("("+END_TIME.diff(LINE.TIME,"s",true)+"s)");
}

INDEX.prototype.devsend=function(){
  var mes_length=mes.arr.length;
  
  if(!mes_length){
    throw "メッセージが空です";
  }
  var log="";
  for(var i=0; i<mes_length; i=i+1){
    log +=mes.arr[i]+"\n\n";
  }
  for(var i=0; i<mes.Q.length; i=i+1){
    log +=JSON.stringify(mes.Q[i])+"\n";
  }
  
//  var doc = DocumentApp.openById("1M8aEXnQtBN1Li7WkQQ-elNqCB0sDLkFXYSstoyL17Gw");
//  doc.getBody().setText(log);
  return String(log);//html
}