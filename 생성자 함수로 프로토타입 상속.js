function Animal(animal){
  this.animal = animal;
}
Animal.prototype.running = function(){
  return (this.animal+"��(��)�޸���.");
}
Human.prototype = new Animal();
function Human(animal){
  Animal.call(this,animal);
}
Tiger.prototype = new Animal();
function Tiger(animal){
  Animal.call(this,animal);
}
Eagle.prototype = new Animal();
function Eagle(animal){
  Animal.call(this,animal);
}
var h1 = new Human("���");
var t1 = new Tiger("ȣ����");
var e1 = new Eagle("������");
document.write(h1.running());
document.write(t1.running());
document.write(e1.running());