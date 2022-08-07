<?php
// ★ 쿠키로 조회수 증가 처리 : viewbbs.$no 라는 파일명으로 해당 게시판 폴더 안에 쿠키 생성 (로컬파일)
// * 쿠키는 사용자가 마음대로 접근할 수 있기 때문에 보안과는 관련없는 기능에 사용해야한다.
//   쿠키를 지우게 되면 조회수가 한번 더 오르기 때문에 딱히 하든 안하든 차이는 없어보이지만,
//   조회수 같이 "별로 중요하지 않은 기능", "굳이 시간투자를 하지 않을 거라 예상되는 기능"이라 생각할 때 사용한다.
//   더불어 쿠키는, 각 사용자의 로컬파일에 저장하므로, "이용자가 많아도 서버에 전혀 무리가 안간다는 장점"이 있다.
if(!empty($no) && empty($_COOKIE['viewbbs'.$no])) { // $no 변수는 있는데, 해당쿠키는 없을 경우, 미방문자임
	$viewsql = "UPDATE azuma_php_bbs1 SET view=view+1 WHERE no = $no"; // 미방문자이므로 view를 +1 증가시킨다.
	// $viewresult = $conn->query($viewsql);  // SQL문을 실행시키는 result변수를 생성한다.
  $viewresult = mysqli_query($conn, $viewsql);
	if(empty($viewresult)) { // result변수가 생성되지 않은 경우 = DB 오류 발생
		?>
    <script>alert('오류가 발생했습니다.');history.back();</script>
    <?php } else { // result변수가 생성된 경우
    // <!-- 쿠키 설정 : 그다지 중요하지 않은 일반적인 "게시판 조회수" 설정(조작가능) -->
    // ★ setcookie('쿠키명, 쿠키값, 쿠키유지시간, 경로') : viewbbs.$no 라는 파일명으로 쿠키를 생성한다. 쿠키는 empty와 더불어 쓰는, 일종의 스위치와 같다. 장점은 서버에 전혀 영향을 주지 않는다. 단점은 사용자 로컬파일에 저장되어 조작이 가능해 보안에 취약하다. 그래서 간단한 것에만 사용한다.
    // 쿠키명 : 해당게시판폴더/viewbbs.$no 의 이름으로 생성될 것이다.
    // 쿠키값 : TRUE(생성) OR FALSE(삭제)
    // 쿠키유지시간 : 60초 * 60분 * 24시간은 = 하루. 쿠키는 하루 후 삭제되며, 하루 후 다시 조회 가능하다.
    // 경로 : ''라면 일시 게시판이 포함된 여는 폴더가 두개라면 두번의 조회가 가능하며, '/'이라면 몇개의 폴더에 겹쳐있더라도 하루 한번의 조회만 가능하다.
		setcookie('viewbbs'.$no, TRUE, time() + (60 * 60 * 24), '/');
	  }
  }
  // ★ 쿠키사용시 주의점 : header, setcookie 사용시 echo등이 앞에 있거나 html문의 공백이 중간에 들어간 경우에는, 에러가 발생한다. → "Cannot modify header information - headers already sent by"가 뜬다.
  // ★ 그래서 이례적으로 전체가 현재 Top보다 먼저 위치해 있고, 중간에 script문도 echo를 넣지 않았다.
?>
