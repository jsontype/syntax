<?php
    require('_conn.php');
    // 조회
    $sql = "SELECT * FROM `bbs1` WHERE `del_flg`=0 AND `no`=$no";
    $result = mysqli_query($conn, $sql);
?>