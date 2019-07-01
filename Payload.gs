var Payload_item=function(args){
  this.data=[];
  
  this._length_limit=args["limit"];
}

Payload_item.prototype.push=function(){
  for(var i=0; i<arguments.length; i=i+1){
    var str=this._cut(arguments[i]);
    this.data.push(this._packed(str));
  }
}

Payload_item.prototype.disp=function(){
  return this.data;
}

Payload_item.prototype._cut=function(str){
  return (str.length>=this._length_limit)?(str.substr(0,this._length_limit - 1)+"…"):(str);
}
Payload_item.prototype._packed=function(){
  throw "method _packed is not implemented";
}

//mes object

var mes=new Payload_item({limit:2000});
mes._packed=function(str){
  return {type:"text","text":str};
}

//quick object

var quick=new Payload_item({limit:20});
quick._packed=function(str){
  return {type:"action",action:{type:"message",label:str,"text":str}};
}


function mes_test(){
  mes.push("it's a test","do you wanna claim to me?");
  quick.push("button");
  Logger.log(quick.disp());
}