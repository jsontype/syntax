<?php require('lib/top_admin.php'); ?>




<?php
// _bbs_modify가 끝나서 돌아온 거라면 뒤로 한번 더 가기 : bbs 뷰 상태로
if(isset($_SESSION['modback'])){
  unset($_SESSION['modback']);
  echo "<script>history.go(-1);</script>";
} else { // _bbs_modify 안했을 경우에 해당하는 페이지 전체(bottom까지) 묶어버리기
?>


<?php
// 수정을 위한 DB 호출
require('_conn.php');
$no = $_GET['no'];
$sql = "SELECT * FROM `azuma_jb_blog0` WHERE no = $no";
$result = mysqli_query($conn, $sql);
// ★ 호출 결과값 한줄씩 빼기
$mod = mysqli_fetch_assoc($result);
?>





<div class="row justify-content-center mb-5 pb-2">
  <div class="col-md-8 text-center heading-section ftco-animate">
    <form action="_blog0_admin_modify.php?no=<?=$no?>" class="p-5 bg-light" method="post" enctype="multipart/form-data">
      <div class="form-group">
      <h2 class="mb-4"><span><?=$no?>번 공지사항</span> 수정<br><br></h2>
        <input type="text" class="form-control" name="title" value="<?=$mod['title']?>" minlength="1" maxlength="100" placeholder="제목을 입력해주세요.">
      </div>
      <div class="form-group">
        <textarea name="content" cols="30" rows="10" class="form-control" placeholder="내용을 입력해주세요."><?php $bcontent = $mod['content']; $bcontent = str_replace("<br />", "", $bcontent); echo $bcontent?></textarea>
      </div>
      <div class="form-group" >※ 이미지 수정 필요시 등록하세요. : <input type="file" name="img1"></div>
      <br>
      <br>
      <div class="form-group">
        <input type="submit" value="수정" class="btn py-3 px-4 btn-primary">
        <input type="button" value="뒤로가기" onclick="location.href='blog0_admin.php'" class="btn py-3 px-4 btn-primary">
      </div>
    </form>
  </div>
</div>



<?php } // "_bbs_modify 안했을 경우에 해당하는 페이지 전체(bottom까지) 묶어버리기" 닫기 ?>










<?php require('lib/bottom_admin.php'); ?>
