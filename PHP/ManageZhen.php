<?php
// 连接珍的数据库
// 获取信息for zhen
/* 连接Mongo */
function GetData_Zhen() {
	try {
		$m = new MongoClient ( "192.168.16.44" );
		echo '连接成功' . "\r\n".'From Zhen(mongo)' . "!\r\n";
	} catch ( Exception $e1 ) {
		echo '连接失败';
	}
	// 选择TestForFeng数据库，如果以前没该数据库会自动创建，也可以用$m->selectDB("TestForFeng");
	$db = $m->Testdb;
	// 选择TestForFeng里面的collection集合，相当于RDBMS里面的表，也-可以使用
	$collection = $db->Testcollection;
	$cursor = $collection->find ();
	$DataForZhen="";               //用来存放Zhen的数据
	// 遍历所有集合中的文档
	foreach ( $cursor as $obj ) {
		//echo 'name:' . $obj ["name"] . '      ' . 'sex:' . $obj ["sex"] . '      ' . 'age:' . $obj ["age"] . "<br />\n";
		$DataForZhen=$DataForZhen.'name:' . $obj ["name"] . ';' . 'sex:' . $obj ["sex"] . ';' . 'age:' . $obj ["age"] . ",";
	}
	// 断开MongoDB连接
	$m->close ();
	return $DataForZhen;
}
// 根据参数获取Zhen的数据
if (isset ( $_POST ['act_Zhen'] )) {
	$GetDataFor = $_POST ['act_Zhen'];
	if ($GetDataFor == 1) {
		$DealMessage = GetData_Zhen();
		echo $DealMessage;
	}
}
?>