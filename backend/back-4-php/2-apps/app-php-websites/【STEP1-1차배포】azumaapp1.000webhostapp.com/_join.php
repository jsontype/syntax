<?php
    // 회원가입
    require('_conn.php');    
    $id = $_POST['id'];
    $pw = $_POST['pw'];
    $pwc = $_POST['pwc'];
    $name = $_POST['name'];
    $addr = $_POST['address'];

    // id가 중복된 경우의 처리
    $sql = "SELECT * FROM `user` WHERE id='$id'";
    $result = mysqli_query($conn, $sql);
    $row = $result->num_rows; // 결과값을 정수로 변환 1
    if($row > 0) {
        // 중복된 아이디가 있음
        echo "<script>alert('중복된 아이디가 있습니다.');location.href='join.php'</script>";
    }

    // 패스워드를 잘못 입력한 경우의 처리
    if ($pw != $pwc) {
        echo "<script>alert('패스워드를 확인해주세요.');location.href='join.php'</script>";
    }

    // SELECT 조회, INSERT 삽입, DELETE 삭제, UPDATE 변경
    $sql = "INSERT INTO `user` (`no`, `id`, `pw`, `name`, `address`) VALUE (NULL, '$id', '$pw', '$name', '$addr')";
    $result = mysqli_query($conn, $sql);
    if($result) {
        // 회원가입 후 로그인처리
        require('_loginok.php');
        echo "<script>alert('회원가입 완료!');location.href='index.php'</script>";
    } else {
        echo "<script>alert('회원가입 실패!');location.href='join.php'</script>";
    }   
?>