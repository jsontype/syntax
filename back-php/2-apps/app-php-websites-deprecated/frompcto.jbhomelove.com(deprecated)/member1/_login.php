<?php
  $id = $_POST['id'];
  $password = $_POST['password'];
  $password = md5($password); // 암호화

  require('_conn.php');

  $sql = "SELECT * FROM `azuma_f_user1` WHERE id='$id' AND password='$password'";
  $result = mysqli_query($conn, $sql);
  $row = $result->num_rows;

  if($row > 0){
    require('_loginok.php');
    echo "<script>alert('로그인에 성공하였습니다.')</script>";
    echo "<meta http-equiv='refresh' content='0;url=../intro1/intro.php'>";
    // header("Location:../intro1/intro.php");
  } else {
    echo "<script>alert('로그인 실패! ID와 Password를 확인해주십시오.')</script>";
    echo "<meta http-equiv='refresh' content='0;url=login.php'>";
    // header("Location:login.php");
  }
?>
