<?php require('lib/top.php'); ?>

<?php
// _bbs_delete가 끝나서 돌아온 거라면 뒤로 한번 더 가기 : bbs 해당 리스트 상태로
if(isset($_SESSION['delback'])){
  unset($_SESSION['delback']);
  echo "<script>history.go(-1);</script>";
} else { // _bbs_delete 안했을 경우에 해당하는 페이지 전체 묶어버리기
?>

<?php
$no = $_GET['no'];
require('_conn.php');
?>




    <div class="ftco-blocks-cover-1">
       <!-- data-stellar-background-ratio="0.5" style="background-image: url('images/hero_1.jpg')" -->
      <div class="site-section-cover overlay" data-stellar-background-ratio="0.5" style="background-image: url('images/hero_1.jpg')">
        <div class="container">
          <div class="row align-items-center ">

            <div class="col-md-5 mt-5 pt-5">
              <span class="text-cursive h5 text-red">Notice</span>
              <h1 class="mb-3 font-weight-bold text-teal">공지사항</h1>
              <p><a href="index.html" class="text-white">Home</a> <span class="mx-3">/</span> <strong>Notice</strong></p>
            </div>

          </div>
        </div>
      </div>
    </div>



    <?php
    $sql = "SELECT * FROM `azuma_h_blog1` WHERE no = $no";
    $result = mysqli_query($conn, $sql);
    foreach($result as $v){ ?>
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <?php
            if(isset($v['imgfile1'])){  ?>
              <img src="blog_images/<?=$v['imgfile1']?>" alt="Image" class="img-fluid">
            <?php } else { ?>
              <img src="images/img_3.jpg" alt="Image" class="img-fluid">
            <?php } ?>


          </div>
          <div class="col-md-5 ml-auto pl-md-5">
            <span class="text-cursive h5 text-red">Notice</span>
            <h3 class="text-black"><?=$v['title']?></h3>
            <p><span><strong><?=$v['content']?></strong></span></p>
            <p><span>게시시간: <?=$v['regdate']?></span></p>
            <p><span>게시자: <?=$v['nickname']?></span></p>
            <p class="mt-5"><a href="blog1.php" class="btn btn-warning py-4 btn-custom-1">뒤로</a> &nbsp;<a href="apply.php" class="btn btn-warning py-4 btn-custom-1">신청</a></p>



            <?php
            if(!isset($_SESSION['id'])){ // 세션 없는 경우 ?>
            <?php } else { // 세션 있는 경우 ?>
              <p class="mt-5"><a href="blog1_modify.php?no=<?=$v['no']?>" class="btn btn-warning py-4 btn-custom-1">수정</a> &nbsp;<a href="_blog1_delete.php?no=<?=$v['no']?>" class="btn btn-warning py-4 btn-custom-1">삭제</a></p>
            <?php } ?>



          </div>
        </div>
      </div>
    </div>
    <?php } ?>




<?php require('lib/bottom.php'); ?>

<?php } ?>
