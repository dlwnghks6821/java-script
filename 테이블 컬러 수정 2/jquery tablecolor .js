    //<td>Ŭ���� �������� ��� ���� �׸��� ��Ÿ������//
    //closest(),table tr:eq(1) td:eq(1)'.css('background','blue');
    //�ε����� �̿��Ͽ����̺��� ���� ����� �ε����� ���� ���� ��������//
$(document)
.on('click','td ',function(){
    //td��� ��ü�� ���� ����� tr ��ü�� ���� �׸��� �ε����� ���� p������ 
    var p = $(this).closest('tr').index();
    //����� ��ǥ p column �׸��� 0��° 1���� 2��° �� �Ķ� ���� �ʷ��� ����..
   $(' table tr:eq('+p+') td:eq('+0+')').css('background','blue');
   $(' table tr:eq('+p+') td:eq('+1+')').css('background','red');
   $(' table tr:eq('+p+') td:eq('+2+')').css('background','green');
})

