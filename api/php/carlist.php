<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');

    include 'DBHelper.php';

    $username = isset($_GET["username"]) ? $_GET["username"] : 1;
    $action = isset($_GET["action"]) ? $_GET["action"] : 1;
    $status = isset($_GET["status"]) ? $_GET["status"] : 0;



    if($action == 'get'){
    	$sql = "select * from buycarorder where status = '1'";

    	$result = multi_query_oop($sql);
    	echo json_encode($result, JSON_UNESCAPED_UNICODE);

    }else{

	    $sql = "select * from buycarorder where username = '$username' and status='$status'";
	    $result = multi_query_oop($sql);
	    echo json_encode($result, JSON_UNESCAPED_UNICODE);
    	
    }

?>