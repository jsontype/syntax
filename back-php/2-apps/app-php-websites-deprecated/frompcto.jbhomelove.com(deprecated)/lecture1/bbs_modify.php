<?php
// _bbs_modify가 끝나서 돌아온 거라면 뒤로 한번 더 가기 : bbs 뷰 상태로
if(isset($_SESSION['modback'])){
  unset($_SESSION['modback']);
  echo "<script>history.go(-1);</script>";
} else { // _bbs_modify 안했을 경우에 해당하는 페이지 전체(bottom까지) 묶어버리기
?>

<?php require('../lib/top.php'); ?>

<?php
require('_conn.php');
$no = $_GET['no'];
$sql = "SELECT * FROM `azuma_f_bbs1` WHERE no = $no";
$result = mysqli_query($conn, $sql);
$mod = mysqli_fetch_assoc($result);
?>

<!-- 게시판 수정 -->
<h2><?php echo $no?>번 글 수정</h2>

<div class="container">
  <form action="_bbs_modify.php" method="post" enctype="multipart/form-data">
    <input type="hidden" name="no" value="<?=$no?>">
    타이틀 <input class="form-control" type="text" name="title" value="<?=$mod['title']?>" placeholder="제목" minlength="1" maxlength="100">
    컨텐츠 <textarea class="form-control" name="content" cols="60" rows="10" placeholder="내용" minlength="1"><?php $mod_content = $mod['content']; $mod_content = str_replace("<br />", "", $mod_content); echo $mod_content?></textarea>
    글쓴이 <input class="form-control" type="text" name="nickname" value="<?=$mod['nickname']?>" readonly><br>
    영상 태그 <textarea class="form-control" cols="60" rows="3" name="blackbox1" placeholder="유투브 영상 → 공유 → 퍼가기 안의 태그입력 <iframe...>" maxlength="1000"><?php $mod_blackbox1 = $mod['blackbox1']; $mod_blackbox1 = str_replace("<br />", "", $mod_blackbox1); echo $mod_blackbox1?></textarea>
    코드 소스 <textarea class="form-control" cols="60" rows="3" name="tag1" placeholder="학생의 카피페용 태그 소스"><?php $mod_tag1 = $mod['tag1']; $mod_tag1 = str_replace("<br />", "", $mod_tag1); echo $mod_tag1?></textarea>
    <!-- [참조] php문에서 <br />을 \n으로 치환하면 바꿀때마다 한줄씩 줄바꿈이 추가되기 때문에 공백 ("")으로 두는 게 수정버튼 클릭시 그대로 나온다. -->
    ※ 이미지(jpg, png) 파일 변경 : <?php echo $mod['img_file1']?><br>
    <input class="form-control" type="file" name="img1"><br>
    <button type="submit">수정</button>&nbsp;
    <button type="button" onclick="history.go(-1);">뒤로가기</button>
    <br><br>
  </form>
</div>

<?php require('../lib/bottom.php'); ?>

<?php } // "_bbs_modify 안했을 경우에 해당하는 페이지 전체(bottom까지) 묶어버리기" 닫기 ?>
