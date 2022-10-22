웹프로그래밍 기본
1. 객체지향이란?
2. 프로그래머의 덕목1 : 물어보기보단 검색하기

PHP 핵심구문
<?
// SQL문 쓰기전에 항상 필요
require ('_conn.php');

// SQL문 실행
$sql = "SELECT * FROM `azuma_php_comment1` WHERE `cno` = $cno";
mysqli_query($conn, $sql);

// 변수에 담아서 입력시 주의할 점! (삽입/갱신의 경우)
// ★ 같은 변수여도 문자열 변수(Text, Varchar 등)엔 '' 넣고 숫자열(Int, Float, Boolean 등) 변수엔 안 넣는다.
$sql = "UPDATE `azuma_php_comment1` SET `nickname`='$nickname', `comment`='$comment' WHERE `cno`=$cno";
// ★ 사소해보여도 이건 매우 중요하다. 하나라도 틀리면 입력 안된다.
$sql_example = "UPDATE `azuma_php_comment1` SET `nickname`='관리자', `comment`=안녕 WHERE `cno`=35"; // 입력안됨!
$sql_example = "UPDATE `azuma_php_comment1` SET `nickname`='관리자', `comment`='불굴의 의지' WHERE `cno`=37"; // 입력됨!

// SELECT문 결과값을 한개씩 출력하라1.
$sql = "SELECT * FROM `azuma_php_comment1` WHERE `cno` = $cno";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
echo $row['no'];

// SELECT문 결과값을 한개씩 출력하라2.
$sql = "SELECT * FROM `azuma_php_comment1` WHERE `cno` = $cno";
$result = mysqli_query($conn, $sql);
$row = $result->fetch_assoc();
echo $row['no'];

// SELECT문 결과값을 한개씩 출력하라3.
$sql = "SELECT * FROM `azuma_php_comment1` WHERE `cno` = $cno";
foreach($conn->query($sql) as $row){
  echo $row['no'];
}

// SELECT문 결과값의 총 개수를 정수형태로 출력하라.
$cno = $c['cno'];
$sql = "SELECT * FROM `azuma_php_comment1` WHERE `cno` = $cno";
$result = mysqli_query($conn, $sql)->num_rows; // num_rows : 전체값을 센 수를 담아 정수형태로 출력
if($result > 0){
  echo "총 {$result}개 입니다.";
}

// isset와 if($var)의 차이점
if(isset($_SESSION['id'])){} // 세션 유무는 isset으로 한다.
if($id){} // 변수 유무는 if($var)로 한다.

// 끝.
