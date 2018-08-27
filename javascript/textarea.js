// JavaScript Documentvar tagname='';var attrid='';
var tagvalue='';
document.oninput = function(e){
var o = e.srcElement || e.target;
getValue(o);
if(tagname !='' && tagname=='INPUT'){
if(tagvalue != '' && !/^[^\<>]*$/.test(tagvalue)){
//包含<>返回false
//alert("输入内容不能包含特殊字符,如尖括号（<>）");
var str = tagvalue.replace('<', '').replace('>', '');
$(o).val(str);//把过滤特殊字符后的内容赋值给文本框
tagvalue='';//当输入第一个字符为特殊字符，回退键删除后会有缓存
popArtDialog("您输入的内容中包含了特殊字符如尖括号<>，系统已自动过滤！");
return false;
}
return true;
}
if(tagname !='' && tagname=='TEXTAREA'){
if(tagvalue != '' && !/^[^\<>]*$/.test(tagvalue)){
//包含<>返回false
//alert("输入内容不能包含特殊字符");
var str = tagvalue.replace('<', '').replace('>', '');
$(o).val(str);//把过滤特殊字符后的内容赋值给文本框
tagvalue='';
popArtDialog("您输入的内容中包含了特殊字符如尖括号<>，系统已自动过滤！");
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