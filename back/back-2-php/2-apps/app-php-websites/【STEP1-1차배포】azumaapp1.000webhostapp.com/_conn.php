<?php
    // 호스트, 유저명, 비밀번호, DB명, 포트번호
    $conn = new mysqli("localhost", "root", "", "php", "3306");
    mysqli_query($conn, "set names utf8");
?>