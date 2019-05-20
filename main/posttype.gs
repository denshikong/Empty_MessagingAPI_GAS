function doGet(){
  var htmlOutput = HtmlService.createTemplateFromFile("dev/main").evaluate();
  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return htmlOutput;
}

INDEX.prototype.GENERAL=function(){
  this.getPostType();
  this.send();
  (LINE.type==="join")&&(LINE.source.type!=="user")&&(index.atBye2());//強制的にグループから退出
}

INDEX.prototype.getPostType=function(){
  switch(LINE.type){
    case "message":
      this.MessageGeneral();
      break;
    case "follow":
      mes.push("◇Denko_True_Utility ver3.0 \nLast Updated:2019/05");
      break;
    case "join":
      this.atBye1();//強制的にグループから退出
    default: 
      throw "謎のモードをキャッチしました。LINEの仕様変わりましたかね？";
      break;
  }
}

INDEX.prototype.atBye1=function(){
  if(LINE.source.userId==="Developer"){
    mes.push("あなたは退出できません。");
  }else{
    if(LINE.source.type!=="user"){
      mes.push("◇グループでの利用はできません。");
      mes.push("◇という訳でさいなら。");
    }else{
      mes.push("◇個人のトークルームから退出はできません。");
    }
  }
}

INDEX.prototype.atBye2=function(){
  var space;
  switch(LINE.source.type){
    case "room": space = "room"; break;
    case "group": space = "group"; break;
  }
  var spaceId=(LINE.source.type==="room") ? LINE.source.roomId : LINE.source.groupId;
  
  var url = 'https://api.line.me/v2/bot/'+space+'/'+spaceId+'/leave';
  UrlFetchApp.fetch(url, {'method': 'post', 'headers': {'Authorization': "Bearer "+ LINE.CHANNEL_ACCESS_TOKEN}});
}


INDEX.prototype.dispname=function(userId){
  if(userId==="Developer"){
    return "開発者";
  }else{
    var url = 'https://api.line.me/v2/bot/profile/' + userId;
    var response = UrlFetchApp.fetch(url, {'headers': {'Authorization': 'Bearer ' + LINE.CHANNEL_ACCESS_TOKEN}});
    return JSON.parse(response.getContentText()).displayName;
  }
}