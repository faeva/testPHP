//利用JQuery
//请求获取数据FromXuan
function run_ajax_Xuan() {
	$.ajax({
		url : "PHP/ManageXuan.php",// 要请求的servlet
		data : {
			act_Xuan : "1",
		},// 给服务器的参数
		type : "POST",
		async : true,// 是否异步请求，如果是异步，那么不会等服务器返回，我们这个函数就向下运行了。
		cache : false,
		// dataType:"json",
		success : function(data) // Ajax请求成功时执行的回调函数
		{
			// alert("data : "+data);
			getProfile(data);
			return true;
		}
	});
}

// 对于获取旋的数据进行分析
function getProfile(str) {
	var arr = str;
	var strs = new Array(); // 定义一数组
	strs = str.split(","); // 字符分割
	//利用表格输出
	var tabl = "<TABLE id=mytable >";
	var a = 0;
	tabl = tabl + " <td>" + strs[0] + "</td>";
	tabl = tabl + "</tr>";
	for (i = 1; i < strs.length; i++) {
		tabl = tabl + " <td>" + strs[i] + "</td>";
		a++;
		if (a == 3) {
			tabl = tabl + "</tr>";
			a=0;
		}
	}
	tabl = tabl + "</TABLE>";
	document.getElementById("mytable").innerHTML = tabl;
}

// 获取要发送的文本，并且发送文本(ToXuan)
function run_ajaxToSetValue() {
	var t1 = document.getElementById("Name_Xuan").value
	var t2 = document.getElementById("Editon_Xuan").value
	$.ajax({
		url : "PHP/ManageXuan.php",// 要请求的servlet
		data : {
			change : "1",
			Name_Xuan : t1,
			Editon_Xuan : t2
		},// 给服务器的参数
		type : "POST",
		async : true,// 是否异步请求，如果是异步，那么不会等服务器返回，我们这个函数就向下运行了。
		cache : false,
		// dataType:"json",
		success : function(data) // Ajax请求成功时执行的回调函数
		{
			 //window.confirm(data);
			 alert(data);
			 //return true;
		}
	});
}

// 获取数据(FromZhen)
function run_ajaxToGetData_Zhen() {
	$.ajax({
		url : "PHP/ManageZhen.php",// 要请求的servlet
		data : {
			act_Zhen : "1",
		},// 给服务器的参数
		type : "POST",
		async : true,// 是否异步请求，如果是异步，那么不会等服务器返回，我们这个函数就向下运行了。
		cache : false,
		// dataType:"json",
		success : function(data) // Ajax请求成功时执行的回调函数
		{

			getProfile_Zhen(data);
			return true;
		}
	});
}
// 对于获取Zhen的数据进行分析
function getProfile_Zhen(str) {
	var arr = str;
	var strs = new Array(); // 定义一数组
	strs = str.split(","); // 字符分割
	//利用表格输出数据
	var tabl = "<TABLE id=mytable >";
	for (i = 0; i < strs.length; i++) {
		var Res = strs[i].split(";");
		tabl = tabl + "<tr>";
		for (j = 0; j < Res.length; j++) {
			if (j == 0) {
				var ac = Res[j].split("!");
				var a = ac[0];
				//tabl=tabl+ "<tr> <td>" +a + "</td></tr>";
				Res[j] = ac[1];
			}
			tabl = tabl + " <td>" + Res[j] + "</td>";
		}
		tabl = tabl + "</tr>";
	}
	tabl = tabl + "</TABLE>";
	document.getElementById("mytable").innerHTML = tabl;
	//document.getElementById('mytable').classname='gridtable';
}
