
    $(document)
    //�Է��� ���� alert�� ���������//
    .on('click','#btnAlert',function(){
        //�̸� ����� ��ȣ �ּҸ� ������ �ϰ�ʹٸ�//
        var str1 = $('#txtname').val();
        var str2 = $('#mobile').val();
        var str3 = $('#txtaddress').val();
        
        alert(str1+("\n")+str2+("\n")+str3);
        return false;

    })
    
    




.on('click','#btnAlert',function(){
        var answer = prompt("�̸��� �Է��ϼ���.");
       $('#txtname').val(answer);
       answer = prompt("����� ��ȣ�� �Է����ּ���");
       $('#mobile').val(answer);
       answer = prompt("�ּҸ� �Է����ּ���.");
       $('#txtaddress').val(answer);
       
           return false;
      
    })