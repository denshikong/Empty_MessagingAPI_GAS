function messagetype_test() {
  message_type[LINE.message.type]();
}

var message_type={
  eat:function(item){//example
    mes.push(item+"を食べました。");
    quick.push("button1");
  },
  text:function(){
    this.eat(LINE.message.text);
  },
  image:function(){
    this.eat("画像");
  },
  video:function(){
    this.eat("映像");
  },
  audio:function(){
    this.eat("サウンド");
  },
  file:function(){
    this.eat("ファイル");
  },
  location:function(){
    this.eat("位置情報");
  },
  sticker:function(){
    this.eat("スタンプ");
  }
}