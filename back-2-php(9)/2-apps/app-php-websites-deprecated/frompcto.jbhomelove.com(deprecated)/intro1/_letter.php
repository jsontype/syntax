<?php
// error_reporting(E_ALL); // 에러 검증 모드
$charset='UTF-8'; // 문자셋
$to = "ubi@kakao.com"; // 개발자의 이메일 주소
$name = $_POST['name']; // 보낸 이 이름
$name = str_replace("'", "''", $name);
$Email = $_POST['email']; // 보낸 이 이메일 주소
$subject = $_POST['subject']; // 제목
$subject = str_replace("'", "''", $subject);
$subject = "=?".$charset."?B?".base64_encode($subject)."?=\n";
$message = "작성자: ".$name."\n내용: ".$_POST['message']; // 내용
$message = str_replace("'", "''", $message);
// $message = "=?".$charset."?B?".base64_encode($message)."?=\n"; // 내용은 이 코드가 필요없으나, 혹시 한글 깨질 경우 코드 켜기
$headers = "From: ".$Email."\r\n"; // 헤더 설정 (보내는 이)
// $headers .= "Cc: 주소@메일\r\n"; // 참조 헤더 설정 (참조로 받는 이)
// $headers .= "Bcc: 주소@메일\r\n"; // 숨은 참조 헤더 설정 (숨은 참조로 받는 이)

$mail_result = mail($to, $subject, $message, $headers); // 메일 보내기

if ($mail_result) { ?>
<script>window.alert('메일 발송이 완료되었습니다.');</script>
<?php } ?>

<!-- Going Back -->
<script>window.location.replace(document.referrer);</script>
