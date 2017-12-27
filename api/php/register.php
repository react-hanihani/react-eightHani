<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $phone = isset($_POST["phone"]) ? $_POST["phone"] : '';
    $password = isset($_POST["password"]) ? $_POST["password"] : '';
    $order = isset($_POST["order"]) ? $_POST["order"] : '';

    include 'DBHelper.php';
    $insert = "INSERT INTO students (phone,password) VALUES($phone,$password)";

    $result = excute($insert);

    
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>