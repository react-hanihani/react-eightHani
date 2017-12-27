<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $phone = isset($_POST["phone"]) ? $_POST["phone"] : '';
    $password = isset($_POST["password"]) ? $_POST["password"] : '';
    $order = isset($_POST["order"]) ? $_POST["order"] : '';

    include 'DBHelper.php';
    
    $sql = 'select * from students ';
    
    if($phone){
        $sql .= " WHERE phone = '$phone' ";
    }if($password){
        $sql .= " AND password = '$password' ";
    }

    $result = excute_oop($sql);
    
    $row = $result->fetch_all(MYSQL_ASSOC);
    
    $arr=array($row,$phone);
    $obj = (object)$arr;
    echo json_encode($obj, JSON_UNESCAPED_UNICODE);

    
    
?>