<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    include 'DBHelper.php';
    $sql = 'select SQL_CALC_FOUND_ROWS * from product ';
   

    $result = multi_query_oop($sql);
    
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>ss