<?php
    // 페이지네이션
    if(isset($_GET['current_page'])) {
        $current_page = $_GET['current_page'];
    } else {
        $current_page = 1;
    }

    $show_item = 3;
    $start_item = ($current_page - 1) * $show_item;

    require('_conn.php');
    
    // 마지막 페이지 구하기
    $sql1 = "SELECT * FROM `blog1` WHERE `del_flg`=0";
    $count = mysqli_query($conn, $sql1)->num_rows;
    $end_page = ceil($count/3);

    // 조회
    $sql = "SELECT * FROM `blog1` WHERE `del_flg`=0 ORDER BY no DESC LIMIT $start_item, $show_item";
    $result = mysqli_query($conn, $sql);

    // 이전, 다음페이지
    $prev_page = $current_page - 1;
    $next_page = $current_page + 1;
?>