<?php
// ※세션의 기본 사용법 : 아래 코드를 세션이용 페이지마다 최상단(또는 DB 호출보다 위)에 위치
// session_start();

// ※[참조] 웹호스팅업체나 서버에서 php.ini에 session.auto_start 값이 0(off)로 되어있는 상태에서,
//          환경설정상의 문제로 PHP Session 변수가 입력이 안될 때 해결법
// 1. public_html/.htaccess 파일 생성후 다음과 같이 입력
// → php_value display_errors 1
// → php_value session.auto_start 1
// 2. 저장 후 기존 페이지의 session_start(); 코드는 중복되므로 주석화해두기

// DB 호출
require ('_conn.php');

// ID는 대소문자 섞일 경우 소문자로만 인식되게 하기 (비번은 대소문자 구분되게 해야하므로 수정할 필요없음)
// * PHP 문자열 대소문자 변환함수 : 소문자 변환 strtolower(), 대문자 변환 strtoupper(), 첫글자만 대문자로 ucfirst(), 각 단어 첫글자를 대문자로 ucwords();
$id = $_POST['id'];
// 비번 암호화
$pw = $_POST['pw'];
// $pw = md5($pw); // pw를 암호화한 정보로 가져오기(저장도 암호화한 정보로 저장되어 있음). 이런 중요한 것도 안 하면 안됨!

// 로그인성공/실패 여부 코딩법 : login && password 를 검색해서 검색건수가 1건이면 로그인 성공, 0건이면 로그인 실패
$sql = "SELECT * FROM `azuma_jb_user1` WHERE id='$id' AND pw='$pw'";
$result = mysqli_query($conn, $sql); // mysqli_query는 데이터베이스를 실행하라는 메소드 기능이다. 왼쪽에는 conn 객체(어느 DB를 쓸 것인가를 넣은 변수), 오른쪽에는 sql문을 넣어 쓰면 된다.
// ↑ 쿼리문 실행결과를 $result 객체에 담는다.
$row = $result->num_rows; // num_rows는 size와 같다. 1건 취득되면 1 안되면 0
// $result라는 검색취득건수는 몇개일지 모르니까 배열의 형태로(->num_rows) $row에 담는다.

// 세션입력
if($row > 0){  // 로그인 성공 - 세션입력
    // 로그인 처리
    require ('_loginok.php');
    // 로그인 성공 알림후 메인으로 이동
    echo "<script>window.alert('로그인이 완료되었습니다.')</script>";
    echo "<meta http-equiv='refresh' content='0;url=index.php'>";
    exit;
} else {  // 로그인 실패 - 세션입력하지 않음
    echo "<script>alert('아이디와 비밀번호를 다시 확인해주세요.')</script>";
    echo "<meta http-equiv='refresh' content='0;url=admin.php'>";
}
?>
