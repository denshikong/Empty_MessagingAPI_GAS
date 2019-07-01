function leave_test(){
  leave.run=function(){
    return [this._url(),this._package()];
  }
  Logger.log(leave.run());
}

var leave={
  run:function(){
    UrlFetchApp.fetch(this._url(),this._package());
  }, 
  _url:function(){
    return 'https://api.line.me/v2/bot/'+LINE.source.type+'/'+LINE.source[LINE.source.type+"Id"]+'/leave';
  },
  _package:function(){
    return {'method': 'post', 'headers': {'Authorization': "Bearer "+ LINE.CHANNEL_ACCESS_TOKEN}};
  }
}
var dispname={
  run:function(){
    if(LINE.source.userId==="Developer"){return "開発者"};
    
    var response=UrlFetchApp.fetch(this._url(),this._package());
    return JSON.parse(response.getContentText()).displayName;
  },
  _url:function(){
    return 'https://api.line.me/v2/bot/profile/' + LINE.source.userId;
  },
  _package:function(){
    return {'headers': {'Authorization': 'Bearer ' + LINE.CHANNEL_ACCESS_TOKEN}};
  }
}