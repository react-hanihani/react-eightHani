<?php

header('Access-Control-Allow-Origin:*');

include "./DBHelper.php";

$username = isset($_GET['username'])?$_GET['username']:'1';
$detail = isset($_GET['detail'])?$_GET['detail']:'1';
$email = isset($_GET['email'])?$_GET['email']:'1';
$search = isset($_GET['search'])?$_GET['search']:'1';

// 地址表用户id
$id = isset($_GET['id'])?$_GET['id']:'';

// 地址表关联用户名字段
$uid = isset($_GET['uid'])?$_GET['uid']:'1';
// 收货人
$rname = isset($_GET['rname'])?$_GET['rname']:'1';
$address = isset($_GET['address'])?$_GET['address']:'1';
$default = isset($_GET['default'])?$_GET['default']:'1';
$phone = isset($_GET['phone'])?$_GET['phone']:'1';
// 操作
$action = isset($_GET['action'])?$_GET['action']:'1';
// echo $action;

switch ($action) {
	case 'insert':
		//添加
		$sql = "INSERT into `address` (address,`default`,uid,rname,detail,email,search,phone,username) VALUES ('${address}','${default}','${uid}','${rname}','${detail}','${email}','${search}','${phone}','${username}')";
		$result = excute($sql);
		break;
	case 'del':
		// 删除
		$sql = "DELETE address from address,`userlist` where address.uid = `userlist`.id and address.id = '${id}'";
		$result = excute($sql);
		
		$sql1 = "select * from userlist as u inner join address as a on u.id = a.uid where u.username = '${username}'";
		$res = query($sql1);
		// echo $sql;
		echo json_encode($res, JSON_UNESCAPED_UNICODE);
		break;
    case 'update':
    	// 更新
		$sql = "UPDATE `userlist` as u INNER JOIN address as a ON u.id = a.uid SET u.phone = '${phone}', a.address = '${address}' WHERE a.id = '${id}'";
		$result = excute($sql);
		break;
	default:
		// 查询
		$sql = "select * from address where username = '$username'";
		
		$res = query($sql);
		// echo $sql;
		echo json_encode($res, JSON_UNESCAPED_UNICODE);
		break;
}

?>