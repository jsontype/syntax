<?php 
    session_unset();
    session_destroy();
    session_start();
    echo "<script>alert('로그아웃되었습니다.');location.href='login.php'</script>";
?>