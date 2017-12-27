<?php
    header('Access-Control-Allow-Origin:*');

    include './DBHelper.php';

    $id = isset($_POST['id']) ? $_POST['id'] : null;
    $productName = isset($_POST['productName']) ? $_POST['productName'] : null;
    $imgUrl = isset($_POST['imgUrl']) ? $_POST['imgUrl'] : null;
    $todayPrice = isset($_POST['todayPrice']) ? $_POST['todayPrice'] : null;
    $username = isset($_POST['username']) ? $_POST['username'] : null;
    
    $number = 1;
    $status = 0;

    $conn = connect_oop();

    if($conn->connect_error){
        die('链接失败'.$conn->connect_error);
    }

    $conn->set_charset('utf8');

    $sql = "INSERT INTO Buycarorder (id, productName, imgUrl,todayPrice,status,username,`number`)
    VALUES ('$id', '$productName', '$imgUrl','$todayPrice','$status','$username','$number')";

    $result = $conn->query($sql);
    if ($result === TRUE) {
        $rows = array('status'=>1);
    } else {
        $rows = array('status'=>0);
    }
    echo json_encode($rows,JSON_UNESCAPED_UNICODE);


?>