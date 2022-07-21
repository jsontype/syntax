<?php
// 로그인 성공시의 처리
// require ('_conn.php'); // 부모가 DB를 호출하지 않았을 경우에 적용, db 접근은 최소화로 중복제거해야 빠름

// ★★★★★★★★★★★★★★★★★★★★★★★★★★★
// .htaccess 설정해야 세션이 돌아감! 반드시 잊지 말것!!
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★

// <!-- 세션입력 준비 : SQL문을 통해 해당 id의 유저정보를 변수에 담기 -->
// 이 SQL을 생략하고 아래 세션입력시 변수 $username을 $id['username']; 형태로 해도 세션저장은 되지만 illegal string offset 에러메시지를 동반한다.
$sql_user_info = "SELECT * FROM `azuma_php_user1` where id='$id'";
$result_user_info = mysqli_query($conn, $sql_user_info);
foreach($result_user_info as $user){
    // ＊ ID에 해당하는 세션변수를 추가/삭제하고 싶다면 아래 코드에서 빼면 된다.
    // ''부분에 DB에 해당하는 컬럼을 취해야하므로 유저정보가 담긴 DB를 보면서 작업할 것.
    // 단, 수정하게 되면, _join.php 내에서의 로그인 세션변수도 함께 수정해줘야 할 것이다.
    $username=$user['username'];
    $nickname=$user['nickname'];
}

// <!-- 세션입력 : 로그인 -->
$_SESSION['id'] = $id;
// ＊ 위 id에 해당하는 여러가지 세션정보들을 담는다. 바로 위 foreach{} 코드 안에서 설정해준 값들만 저장가능하다.
$_SESSION['username'] = $username;
$_SESSION['nickname'] = $nickname;
?>
