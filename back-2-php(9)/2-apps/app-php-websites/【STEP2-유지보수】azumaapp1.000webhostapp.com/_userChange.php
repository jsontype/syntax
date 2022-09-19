<?php
    require('_conn.php');

    // XSS 방지 처리 대상
    $name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
    $addr = htmlspecialchars($_POST['address'], ENT_QUOTES, 'UTF-8');    

    $no = $_SESSION['no'];
    $pw = $_POST['pw'];
    $pwc = $_POST['pwc'];
    $id = $_SESSION['id'];

    // 패스워드를 잘못 입력한 경우의 처리
    if ($pw != $pwc) {
        echo "<script>alert('패스워드를 확인해주세요.');location.href='user.php'</script>";
    }

    // pw 암호화
    $pws = md5($pw);
    // SELECT 조회, INSERT 삽입, DELETE 삭제, UPDATE 변경
    $sql = "UPDATE `user` SET `name`='$name', `address`='$addr', `pw`='$pws' WHERE `no`=$no";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        $sql = "SELECT * FROM `user` WHERE id='$id'";
        $result = mysqli_query($conn, $sql);
        foreach($result as $user) {
            $_SESSION['no'] = $user['no'];
            $_SESSION['id'] = $user['id'];
            $_SESSION['name'] = $user['name'];
            $_SESSION['address'] = $user['address'];
        }
        echo "<script>alert('변경이 완료되었습니다.');location.href='user.php'</script>";
    }
?>