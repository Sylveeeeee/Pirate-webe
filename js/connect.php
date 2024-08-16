<?php
    $hostname = 'localhost';
    $username = '';
    $password = '';
    $database = 'piratedatabase';
    $port = NULL;
    $socket = NULL;
    $connnect = mysqli_connect($hostname, $username, $password, $database);

    if(!$connnect){
        die("เชื่อมต่อไม่สำเร็จ : " .mysqli_connect_error($connnect));
    }else{
        mysqli_set_charset($connnect, 'utf8');
    }

?>