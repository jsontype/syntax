<?php require('../lib/top.php'); ?>

<?php require('_conn.php'); ?>

<div class="container">
  <form action="_bbs_write.php" method="post" enctype="multipart/form-data">
    타이틀 <input class="form-control" type="text" name="title" placeholder="제목" minlength="1" maxlength="100">
    컨텐츠 <textarea class="form-control" cols="60" rows="10" name="content" placeholder="내용" minlength="1"></textarea>
    <input class="form-control" type="text" name="nickname" value="<?=$_SESSION['nickname']?>" readonly><br>
    영상 태그 <textarea class="form-control" cols="60" rows="3" name="blackbox1" placeholder="유투브 영상 → 공유 → 퍼가기 안의 태그입력 <iframe...>" maxlength="1000"></textarea>
    코드 소스 <textarea class="form-control" cols="60" rows="3" name="tag1" placeholder="학생의 카피페용 태그 소스"></textarea>
    ※ 이미지(jpg, png) 파일 등록<br>
    <input class="form-control" type="file" name="img1"><br>
    <button type="submit">등록</button>&nbsp;
    <button type="button" onclick="location.href='bbs.php'">뒤로가기</button>
    <br><br>
  </form>
</div>

<?php require('../lib/bottom.php'); ?>
