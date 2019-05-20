var MES=function(){
  this.arr=[];
  this.Q=[];
}

MES.prototype.push=function(str){
  if(_.isArray(str)){
    for(var i=0; i<str.length; i=i+1){
      this.arr.push(str[i]);
    }
  }else{
    this.arr.push(str);
  }
}

MES.prototype.pQ=function(){
  var a=arguments.length;
  for(var i=0; i<a; i=i+1){
    this.Q.push(arguments[i]);
  }
  
}

MES.prototype.pushMulti=function(){
  var a=arguments.length;
  for(var i=0; i<a;i=i+1){
    this.arr.push(arguments[i]);
  }
}

MES.prototype.here=function(){
  this.push("here");
}

MES.prototype.eat=function(str){
  if(str===undefined){
    this.push("◇電工君は"+LINE.message.text+"をたべた！");
  }else{
    this.push("◇電工君は"+str+"をたべた！");
  }
  if(_.random(1,5)===1){
    if(_.random(1,100)===1){
      this.push(_.sample(["◇TASTY!",
                          "◇うますぎる！",
                          "◇もっと食わせろ。"]));
    }else{
      this.push("◇おいっしい！");
    }
  }
}