<?php require('lib/top.php'); ?>

<?php
// _bbs_modify가 끝나서 돌아온 거라면 뒤로 한번 더 가기 : bbs 뷰 상태로
if(isset($_SESSION['modback'])){
  unset($_SESSION['modback']);
  echo "<script>history.go(-1);</script>";
} else  // _bbs_modify 안했을 경우에 해당하는 페이지 전체(bottom까지) 묶어버리기
?>


<?php
// 수정을 위한 DB 호출
require('_conn.php');
$no = $_GET['no'];
$sql = "SELECT * FROM `azuma_d_blog2` WHERE no = $no";
$result = mysqli_query($conn, $sql);
// ★ 호출 결과값 한줄씩 빼기
$mod = mysqli_fetch_assoc($result);
?>




    <!-- start banner Area -->
    <section class="banner-area relative about-banner" id="home">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="about-content col-lg-12">
            <h1 class="text-white">
              <?=$no?>번 커뮤니티 수정
            </h1>
            <p class="text-white link-nav"><a href="index.php">홈 </a>  <span class="lnr lnr-arrow-right"></span>  <a href="blog2.php"> 커뮤니티</a></p>
          </div>
        </div>
      </div>
    </section>
    <!-- End banner Area -->

    <!-- Start contact-page Area -->
    <section class="contact-page-area section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-6 appointment-right pt-60 pb-60">
            <form class="form-wrap" action="_blog2_modify.php?no=<?=$no?>" method="post" enctype="multipart/form-data">
              <input type="hidden" name="id" value="<?=$_SESSION['id']?>">
              <input type="hidden" name="nickname" value="<?=$_SESSION['nickname']?>">

              <h3 class="pb-20 text-center mb-30">글쓰기</h3>
              <input type="text" class="form-control" name="title" value="<?=$mod['title']?>" minlength="1" maxlength="100" placeholder="제목을 입력해주세요."><br>
              <textarea name="content" class="form-control" placeholder="내용을 입력해주세요."><?php $bcontent = $mod['content']; $bcontent = str_replace("<br />", "", $bcontent); echo $bcontent?></textarea><br>
              ※ 이미지 수정 필요시 등록하세요. : <input type="file" name="img1"><br><br>
              <button type="submit" class="primary-btn text-uppercase">보내기</button>
              <button type="button" class="primary-btn text-uppercase" onclick="location.href='blog2.php'">뒤로가기</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End contact-page Area -->

<?php require('lib/bottom.php'); ?>
