function posttypetest(){
  post_type._normal_send=function(){
    Logger.log(mes.disp());
  }
  post_type["follow"]();
}

var post_type={
  _normal_send:function(){
    var reply=new Reply(mes.disp(),quick.disp());
    reply.send();
  },
  message:function(){
    message_type[LINE.message.type]();
    this._normal_send();
  },
  follow:function(){
    mes.push("◇Empty_Messaging_API \nDon't ask A-Oryzae for anything ever again");
    this._normal_send();
  },
  join:function(){
    mes.push("◇グループでの利用はできません。ごめんなさい。","(ま、嘘なんですけどね。)");
    this._normal_send();
    leave.bye();
  },
  unfollow:function(){},
  leave:function(){},
  memberJoined:function(){},
  memberLeft:function(){},
  postback:function(){},
  beacon:function(){},
  accountLink:function(){},
  things:function(){}
}