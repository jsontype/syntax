<?php
// ★ 쿠키로 조회수 증가 처리 : viewbbs.$no 라는 파일명으로 해당 게시판 폴더 안에 로컬파일 생성
if(!empty($no) && empty($_COOKIE['viewbbs'.$no])) { // $no 변수는 있는데, 해당쿠키는 없을 경우 : 미방문자일 경우
	$viewsql = "UPDATE azuma_f_bbs1 SET view=view+1 WHERE no = $no"; // 조회수 1 증가
  $viewresult = mysqli_query($conn, $viewsql);

	// result변수가 생성되지 않은 경우 : DB 오류 발생
	if(empty($viewresult)) { ?>
    <script>alert('오류가 발생했습니다.');history.back();</script>

    <?php
		// result변수가 생성된 경우
		} else {
    // <!-- 쿠키 설정 : 그다지 중요하지 않은 일반적인 "게시판 조회수" 설정(조작가능) -->
    // ★ setcookie('쿠키명, 쿠키값(true생성/false삭제), 쿠키유지시간(초단위, 60*60*24=하루24시간), 경로('/'는 모든 경로 포함 하루 한번, ''은 각 경로마다 하루 한번씩)')
		setcookie('viewbbs'.$no, TRUE, time() + (60 * 60 * 24), '/');
	  }
  }

  /*
	 * 쿠키사용시 주의점 : header, setcookie 사용시 echo등이 앞에 있거나 html문의 공백이 중간에 들어간 경우, 다음의 에러 발생 : "Cannot modify header information - headers already sent by"
   * 그래서 이례적으로 전체가 현재 Top보다 먼저 위치해 있고, 중간에 script문도 echo를 넣지 않음.
	 */

?>
