<?php
if(isset($_POST['familyname'])){
  $familyname = htmlspecialchars($_POST['familyname'], ENT_QUOTES, 'UTF-8');
} else $familyname = '';
if(isset($_POST['lastname'])){
  $lastname = htmlspecialchars($_POST['lastname'], ENT_QUOTES, 'UTF-8');
} else $lastname = '';
if(isset($_POST['email'])){
  $email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
} else $email = '';
if(isset($_POST['content'])){
  $content = htmlspecialchars($_POST['content'], ENT_QUOTES, 'UTF-8');
} else $content = '';
if(isset($_POST['message'])){
  $message = nl2br(htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8'));
} else $message = '';

require ('_conn.php');
$sql = "INSERT INTO `azuma_jb_bbs1` (`familyname`, `lastname`, `email`, `content`, `message`) VALUES ('$familyname', '$lastname', '$email', '$content', '$message')";
mysqli_query($conn, $sql);
echo "<meta http-equiv='refresh' content='0.1; url=index.php'>"; // 일반적인 내림차순의 경우 최신글이 제일 위에 올라오므로 그냥 bbs.php로 바로 가면 된다.
?>
