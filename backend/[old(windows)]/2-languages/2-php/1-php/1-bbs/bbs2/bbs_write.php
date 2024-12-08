<?php require('../lib/top_in_folder.php'); ?>

<?php require('_conn.php'); ?>

<!-- form에 파일을 입력시 : post 메소드 지정과 enctype 타입 지정 필수, * 단 이때는 minlength 등의 태그가 안 먹힘. 따로 조치를 취해줘야함.
      이번 write의 경우에는 _write에서 필수사항 미입력시 돌아가도록 조치를 취했음. -->
<form action="_bbs_write.php" method="post" enctype="multipart/form-data">

  <!-- ★ 게시판 ID -->
  <input type="hidden" name="bbsid" value="bbs2">

  <!-- userid : 세션아이디입력 -->
  <input type="hidden" name="id" value="<?=$_SESSION['id']?>">
  <input type="hidden" name="nickname" value="<?=$_SESSION['nickname']?>">
  <!-- <input type="hidden" name="username" value="<'?=$_SESSION['username']"> // username은 세션있으나 게시판에서 사용안함 -->
  <!-- <input type="hidden" name="addr" value="<'?=$_SESSION['addr']"> // addr는 처음부터 세션부여하지 않음(Login1 기준) -->
  * 제목 : <input type="text" name="title" placeholder="제목" minlength="1" maxlength="100">
  카테고리 : <input type="text" name="category" placeholder="카테고리" maxlength="20">
  링크 : <input type="text" name="link" placeholder="http://.." maxlength="100"><br>
  * 내용 : <textarea class="form-control" cols="60" rows="10" name="content" placeholder="내용" minlength="1"></textarea><br>

  ※ 이미지(jpg, png) 파일 등록<br>
  Img : <input type="file" name="img1"><br>
  <button type="submit">등록</button>&nbsp;
  <button type="button" onclick="location.href='bbs.php'">뒤로가기</button>

</form>

<?php require('../lib/bottom_in_folder.php'); ?>
