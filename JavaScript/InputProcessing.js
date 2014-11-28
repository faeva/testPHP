/**
 * 
 */
//用来检测和限制输入（利用正则表达式）
function CheckImput(){
	var checkstring=document.getElementById("Name_Xuan");
	var re=/\W/g;         //表示全局的检测除英文和数字外
	if(re.test(checkstring.value)==true)
		{
		var s=checkstring.value.replace(re,"");
		//document.getElementById("Name_Xuan").value="";
		document.getElementById("Name_Xuan").value=s;
		alert("只能输入英文和数字");
		}
}