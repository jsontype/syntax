<?php 
    require('_conn.php');    
    $no = $_SESSION['no'];

    // SELECT 조회, INSERT 삽입, DELETE 삭제, UPDATE 변경

    // DB에 남기고 삭제
    $sql = "UPDATE `user` SET `del_flg` = 1 WHERE `no`=$no";

    // 완전 삭제
    // $sql = "DELETE FROM `user` WHERE `no`=\"$_SESSION['no']\"";

    $result = mysqli_query($conn, $sql);
    if ($result) {
        echo "<script>alert('회원탈퇴가 완료되었습니다. 안녕히 가십시오.');location.href='index.php'</script>";
        require('_logout.php');
    }
?>