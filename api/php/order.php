<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $phone = isset($_POST["phone"]) ? $_POST["phone"] : '';
    $password = isset($_POST["password"]) ? $_POST["password"] : '';
    $order = isset($_POST["order"]) ? $_POST["order"] : '';
    $id = isset($_REQUEST["id"]) ? $_REQUEST["id"] : '';
    $status = isset($_REQUEST["status"]) ? $_REQUEST["status"] : '';
    include 'DBHelper.php';
    $sql = 'select * from buycarorder ';
    if($status== 0|| $status){
        $sql .= " WHERE status = '$status' ";
    }

    $result = excute_oop($sql);
    
    $row = $result->fetch_all(MYSQL_ASSOC);
    
    echo json_encode($row, JSON_UNESCAPED_UNICODE);

    
    
?>