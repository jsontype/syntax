<?php 
    require('_conn.php');    
    $id = $_POST['id'];
    $pw = $_POST['pw'];

    // SELECT 조회, INSERT 삽입, DELETE 삭제, UPDATE 변경
    $sql = "SELECT * FROM `user` WHERE id='$id' AND pw='$pw' AND del_flg=0";
    $result = mysqli_query($conn, $sql);
    $row = $result->num_rows; // 결과값을 정수로 변환 1
    if($row > 0) {
        // 로그인처리
        require('_loginok.php');
        echo "<script>alert('로그인 완료!');location.href='index.php'</script>";
    } else {
        echo "<script>alert('로그인 실패! 아이디, 비밀번호를 확인해주세요.');location.href='login.php'</script>";
    }   
?>