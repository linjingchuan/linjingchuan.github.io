// JavaScript Documentvar tagname='';var attrid='';
var tagvalue='';
document.oninput = function(e){
var o = e.srcElement || e.target;
getValue(o);
if(tagname !='' && tagname=='INPUT'){
if(tagvalue != '' && !/^[^\<>]*$/.test(tagvalue)){
//����<>����false
//alert("�������ݲ��ܰ��������ַ�,������ţ�<>��");
var str = tagvalue.replace('<', '').replace('>', '');
$(o).val(str);//�ѹ��������ַ�������ݸ�ֵ���ı���
tagvalue='';//�������һ���ַ�Ϊ�����ַ������˼�ɾ������л���
popArtDialog("������������а����������ַ��������<>��ϵͳ���Զ����ˣ�");
return false;
}
return true;
}
if(tagname !='' && tagname=='TEXTAREA'){
if(tagvalue != '' && !/^[^\<>]*$/.test(tagvalue)){
//����<>����false
//alert("�������ݲ��ܰ��������ַ�");
var str = tagvalue.replace('<', '').replace('>', '');
$(o).val(str);//�ѹ��������ַ�������ݸ�ֵ���ı���
tagvalue='';
popArtDialog("������������а����������ַ��������<>��ϵͳ���Զ����ˣ�");
return false;
}
return true;
}
}
function popArtDialog(str){
art.dialog({
content: str,
icon: 'warning',
lock:true,
ok: function(){
}
});
}
function getValue(o){
if(o.tagName!=''){
tagname=o.tagName;
}
if($(o).attr('id')){
attrid=$(o).attr('id');
}
if($(o).val()){
tagvalue=$(o).val();
}

  }