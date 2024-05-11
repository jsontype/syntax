<?php
if(isset($_SESSION['id'])){

  $id = $_POST['id'];
  $id = strtolower($id); // 소문자 변환

  if($_SESSION['id'] == $_POST['id']){

    $oldpasswordchk = $_POST['oldpasswordchk'];
    $oldpasswordchk = md5($oldpasswordchk);
    if($_POST['password'] and $_POST['passwordchk']){
      $password = $_POST['password'];
      $password = md5($password); // 암호화
      $passwordchk = $_POST['passwordchk'];
      $passwordchk = md5($passwordchk);
    } else {}
    $realname = htmlspecialchars($_POST['realname'], ENT_QUOTES, 'UTF-8');
    $nickname = htmlspecialchars($_POST['nickname'], ENT_QUOTES, 'UTF-8');
    $gender = $_POST['gender'];
    $birth = $_POST['birth'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $phone = $_POST['phone'];
    $address = htmlspecialchars($_POST['address'], ENT_QUOTES, 'UTF-8');

    require('_conn.php');

    // 기존 password 일치여부 확인
    $checkid = "SELECT * FROM `azuma_f_user1` WHERE id='$id' and password='$oldpasswordchk'";
    $result = mysqli_query($conn, $checkid);
    // ↑ 쿼리문 실행결과를 $result 객체에 담는다.
    $row = $result->num_rows; // num_rows는 size와 같다. 1건 취득되면 1 안되면 0
    // $result라는 검색취득건수는 몇개일지 모르니까 배열의 형태로(->num_rows) $row에 담는다.

    // 걸러내기
    if($row < 1){    // 중복된 아이디 걸러내기
        echo "<script>alert('기존 비밀번호가 틀렸습니다. 확인후 다시 진행해주세요.');history.back();</script>";
      } else if(!$id||!$oldpasswordchk||!$realname||!$nickname||!$gender||!$birth||!$email||!$tel||!$phone||!$address){ // 미입력 걸러내기
        echo "<script>alert('필수 항목을 모두 작성해주세요.');history.back();</script>";
      } else if($password!=$passwordchk){ // 비밀번호 1과 2 입력이 틀린 경우 걸러내기
        echo "<script>alert('변경할 비밀번호를 정확히 입력해주세요.');history.back();</script>";
      } else {
      // 정상회원수정시의 처리
        $sql = "UPDATE `azuma_f_user1` SET `password` = '$password', `realname` = '$realname', `nickname` = '$nickname',
        `gender` = '$gender', `birth` = '$birth', `email` = '$email', `tel` = '$tel', `phone` = '$phone', `address` = '$address' WHERE `azuma_f_user1`.`id`='$id'";
        mysqli_query($conn, $sql);
        echo "<script>alert('회원정보수정이 완료되었습니다.')</script>";
        echo "<meta http-equiv='refresh' content='0;url=../intro1/intro.php'>";
      }

    // 세션 아이디와 해당글 작성자 아이디가 다른 경우 = XSS 해킹이나 주소창 접근 등 비정상 경로
    } else {
      echo "<script>alert('권한이 없습니다.');</script>";
      echo "<meta http-equiv='refresh' content='0.1; url=../member1/login.php'>";
    }

// 세션 자체가 없는 경우 = 세션 제거 당한 사람이거나 위와 동일하게 비정상 경로
} else {
echo "<script>alert('다시 로그인을 해주시기 바랍니다.');</script>";
echo "<meta http-equiv='refresh' content='0.1; url=../member1/login.php'>";
}
?>
