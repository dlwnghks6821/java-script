//Javascript//
//Javascript�� ����ÿ� Ÿ���� �����ȴ�//
//�迭 ���� //
//var ar = new Array("a", "b", "c");
//�迭 �߰����//
//ar[0] = "hello";
//ar[1] = "world";
//ar[2] = "^&^";
//�迭 ���� ���ϴ� ���� �߰��Ҷ�//
//ar.push(100);
//ar.push(1000);
//�迭 ���������� �����Ҷ� //
//ar.pop();
//�迭�� ���̸� ��ȯ�Ҷ�//
//var example1 = new Array("new","Array","hello");
//document.write(example1.length);
//document.write(ar);
//�迭 ��� //
/*var ar = [];
ar.push('alpha');
ar.push('beta');
ar.push('cello');
ar.push('december');
var a  =  ar.pop();
document.write(a+"<br>");
for(i = 0 ; i < ar.length; i++){
  document.write(ar[i]+'<br>');
}
//�ڹٿ� �޸� �ڹٽ�ũ��Ʈ�� Ÿ���� ���� ���� �迭������ ���ڿ� ���ڸ� ȥ���ؼ� �־ �ȴ� //
//��ü , Ŭ������ �������ִ� //
//join = ���ڿ� ���̿� ���ϴ� ���ڿ����� ���������� //
var p = ar.join("/")
document.write(p);*/
//�迭�� ���� ���� �ֱ� //

var arrNumber = new Array("alpha","beta","cello","december");

document.write(arrNumber+'<br>');
var ap  = "Good Morning , vietnam";
//���ڿ��� ���� //
for(i = 0 ; i < ap.length ; i++){
  document.write(ap[i]+"<br>");
}
//Morning�� ����ϰ������//
//�κ� ���ڿ��� ������ ������//
document.write(ap.substr(5,7));