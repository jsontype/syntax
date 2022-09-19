<?php
// _bbs_modify가 끝나서 돌아온 거라면 뒤로 한번 더 가기 : bbs 뷰 상태로
if(isset($_SESSION['modback'])){
  unset($_SESSION['modback']);
  echo "<script>history.go(-1);</script>";
} else { // _bbs_modify 안했을 경우에 해당하는 페이지 전체(bottom까지) 묶어버리기
?>

<?php require('../lib/top_in_folder.php'); ?>

<?php
// 수정을 위한 DB 호출
require('_conn.php');
$no = $_GET['no'];
$sql = "SELECT * FROM `azuma_php_blog1` WHERE no = $no";
$result = mysqli_query($conn, $sql);
// ★ 호출 결과값 한줄씩 빼기
$mod = mysqli_fetch_assoc($result);
?>

<!-- 게시판 수정 -->
<h2><?php echo $no?>번 글 수정</h2>

<form action="_blog_modify.php" method="post" enctype="multipart/form-data">
  <input type="hidden" name="no" value="<?php echo $no?>">
  * 제목 : <input type="text" name="title" value="<?php echo $mod['title']?>" placeholder="제목" minlength="1" maxlength="100">
  카테고리 : <input type="text" name="category" value="<?php echo $mod['category']?>" placeholder="카테고리" maxlength="20">
  링크 : <input type="text" name="link" value="<?php echo $mod['link']?>" placeholder="http://.." maxlength="100"><br>
  * 내용 : <textarea name="content" cols="60" rows="10" placeholder="내용" minlength="1"><?php $bcontent = $mod['content']; $bcontent = str_replace("<br />", "", $bcontent); echo $bcontent?></textarea><br>
  <!-- [참조] php문에서 <br />을 \n으로 치환하면 바꿀때마다 한줄씩 줄바꿈이 추가되기 때문에 공백 ("")으로 두는 게 수정버튼 클릭시 그대로 나온다. -->
  ※ 이미지(jpg, png) 파일 수정(수정 필요하면 새로 업로드하세요)<br>
  Img : <?php echo $mod['imgfile1']?> <input type="file" name="img1"><br>
  <button type="submit">수정</button>&nbsp;
  <button type="button" onclick="history.go(-1);">뒤로가기</button>
</form>

<?php require('../lib/bottom_in_folder.php'); ?>

<?php } // "_bbs_modify 안했을 경우에 해당하는 페이지 전체(bottom까지) 묶어버리기" 닫기 ?>
