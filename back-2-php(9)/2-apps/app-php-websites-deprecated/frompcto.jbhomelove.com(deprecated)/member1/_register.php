<?php
  $id = $_POST['id'];
  $id = strtolower($id); // 소문자 변환
  $password = $_POST['password'];
  $password = md5($password); // 암호화
  $passwordchk = $_POST['passwordchk'];
  $passwordchk = md5($passwordchk);
  $realname = htmlspecialchars($_POST['realname'], ENT_QUOTES, 'UTF-8');
  $nickname = htmlspecialchars($_POST['nickname'], ENT_QUOTES, 'UTF-8');
  $gender = $_POST['gender'];
  $birth = $_POST['birth'];
  $email = $_POST['email'];
  $tel = $_POST['tel'];
  $phone = $_POST['phone'];
  $address = htmlspecialchars($_POST['address'], ENT_QUOTES, 'UTF-8');

  require('_conn.php');

  // 중복된 아이디 걸러내기 사전작업
  $checkid = "SELECT * FROM `azuma_f_user1` WHERE id='$id'";
  $result = mysqli_query($conn, $checkid);
  // ↑ 쿼리문 실행결과를 $result 객체에 담는다.
  $row = $result->num_rows; // num_rows는 size와 같다. 1건 취득되면 1 안되면 0
  // $result라는 검색취득건수는 몇개일지 모르니까 배열의 형태로(->num_rows) $row에 담는다.

  // 걸러내기
  if($row > 0){    // 중복된 아이디 걸러내기
    echo "<script>alert('이미 존재하는 ID입니다.');history.back();</script>";
  } else if(!$id||!$password||!$passwordchk||!$realname||!$nickname||!$gender||!$birth||!$email||!$tel||!$phone||!$address){ // 미입력 걸러내기
    echo "<script>alert('항목을 모두 작성해주세요.');history.back();</script>";
  } else if($password!=$passwordchk){ // 비밀번호 1과 2 입력이 틀린 경우 걸러내기
    echo "<script>alert('비밀번호를 정확히 입력해주세요.');history.back();</script>";
  } else {


  // 정상회원가입시의 처리

  $sql = "INSERT INTO `azuma_f_user1` (`id`, `password`, `realname`, `nickname`, `gender`, `birth`, `email`, `tel`, `phone`, `address`, `bill1`, `bill2`, `bill3`, `bill4`, `bill5`, `bill6`, `bill7`, `bill8`, `bill9`, `bill10`) VALUES ('$id', '$password', '$realname', '$nickname', '$gender', '$birth', '$email', '$tel', '$phone', '$address', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0')";
  mysqli_query($conn, $sql);
  echo "<script>alert('회원가입이 완료되었습니다. 다시 로그인을 해주십시오.')</script>";
  echo "<meta http-equiv='refresh' content='0;url=login.php'>";
  }
?>
