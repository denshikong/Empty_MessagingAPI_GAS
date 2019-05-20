INDEX.prototype.send=function(){
  var Messages=this.getConverted();
  this.packageData(Messages);
}  

INDEX.prototype.getConverted=function(){
  var mes_length=mes.arr.length;
  if(!mes_length){
    throw "◇メッセージが空です";
  }else if(mes_length>5){
    mes.arr.length=5;
    mes.arr[4]="◇テキストの個数が上限を超えました。";
  }
  
  var finmes=[];
  for(var i=0; i<mes_length; i=i+1){
    
    (mes.arr[i].length>1999)&&(mes.arr[i]=mes.arr[i].substr(0,1999)+"…");
    
    if(typeof mes.arr[i]==="string"){
      if(/\.jpg$|\.jpeg$|\.png$|\.bmp$|\.gif$/i.test(mes.arr[i])){
        mes.arr[i]={type:"image",originalContentUrl:mes.arr[i],previewImageUrl:mes.arr[i]};
      }else{
        mes.arr[i]={type:"text","text": mes.arr[i]};
      }
      if(i===mes_length - 1){
        if(mes.Q.length){
          mes.arr[i].quickReply=this.ConvertQ();
        }
      }
    }
    finmes.push(mes.arr[i]);
  }
  return finmes;
};

INDEX.prototype.ConvertQ=function(){//因数にオブジェクトを想定
  //  数字 文字 タイプ(未指定)
  var a=mes.Q.length;
  var item=[];
  if(a>13){
    mes.Q.length=13;
  }
  for(var i=0; i<a; i=i+1){
    
    (mes.Q[i].type===undefined)&&(mes.Q[i].type="message");
    (mes.Q[i].label===undefined)&&(mes.Q[i].label=mes.Q[i].text);
    (mes.Q[i].label.length>19)&&(mes.Q[i].label=mes.Q[i].label.substr(0,19)+"…")
    if(mes.Q[i].imageUrl!==undefined){
      var b= Object.assign(mes.Q[i].imageUrl);
      mes.Q[i].imageUrl=undefined;
    }
    
    item.push({type: "action",action:mes.Q[i]});
    
    if(b!==undefined){
      item[i].imageUrl=b;
      mes.Q[i].imageUrl=undefined;
    }
  }
  return {items:item};
    
}

INDEX.prototype.packageData=function(objarr){
  var API_URL = 'https://api.line.me/v2/bot/message/reply';
  
  var reply_token= LINE.replyToken;
  if (typeof reply_token === 'undefined') {
    return;
  } 
  
  var Data={'replyToken': reply_token,'messages': objarr};
  
  Data=JSON.stringify(Data);
  
  UrlFetchApp.fetch(API_URL, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + LINE.CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': Data,
  });
}