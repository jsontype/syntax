<?php 
require ('_conn.php');

$title = nl2br(htmlspecialchars($_POST['title'], ENT_QUOTES, 'UTF-8'));
$content = nl2br(htmlspecialchars($_POST['content'], ENT_QUOTES, 'UTF-8'));
$code = $_POST['code'];

// <!-- 잘못 입력된 경우 걸러내기 -->
if(!$title||!$content){ // 필수항목 미입력 걸러내기
    echo "<script>alert('There is no title or content.');history.back();</script>";
} 
else { // 여기서부터 페이지 끝까지 담아버리기
    $sql = "INSERT INTO `codememo1` (`no`, `title`, `code`, `content`) VALUES (NULL, '$title', '$code', '$content')";
    mysqli_query($conn, $sql);
}      
echo "<meta http-equiv='refresh' content='0.1; url=../index.php'>"; // 일반적인 내림차순의 경우 최신글이 제일 위에 올라옴
?>

