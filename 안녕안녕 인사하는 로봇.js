
function GreetingBot(greet){
  this.greet = greet;
}
GreetingBot.prototype.greeting = function(){
  return "hello!"+this.greet 
}
ReturnBot.prototype = new GreetingBot();

function ReturnBot(greet){
  GreetingBot.call(this,greet);
}

var r1 = new ReturnBot("�ȳ�ȳ�");
document.write(r1.greeting());

