<?php

header('Access-Control-Allow-Origin:*');

include "./DBHelper.php";

$id = isset($_POST['id'])?$_POST['id']:'';

// 操作
$action = isset($_POST['action'])?$_POST['action']:'1';
// echo $action;

$_id = (int)$id;

switch ($action) {
    case 'update':
    	// 更新
		$sql = "update buycarorder set status='1' where id='$id'";
		$result = excute($sql);
		break;

	case 'del':
    	//更改
		$sql = "update buycarorder set status='0' where id='$id'";
		$result = excute($sql);
		break;
	
}

if($action=='get'){
	// 查询
	$sql = "select * from buycarorder where status = '1'";
	$result = multi_query_oop($sql);
	echo json_encode($result, JSON_UNESCAPED_UNICODE);


}else{
	echo 'ok';
	
}



?>