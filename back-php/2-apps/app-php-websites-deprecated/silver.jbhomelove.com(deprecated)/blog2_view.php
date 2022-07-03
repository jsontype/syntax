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










			<!-- start banner Area -->
			<section class="banner-area relative" id="home">
				<div class="overlay overlay-bg"></div>
				<div class="container">
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								상세보기
							</h1>
							<p class="text-white link-nav"><a href="index.php">홈 </a>  <span class="lnr lnr-arrow-right"></span>  <a href="blog2.php"> 커뮤니티</a>  <span class="lnr lnr-arrow-right"></span> <a href="blog2.php"> 상세보기</a></p>
						</div>
					</div>
				</div>
			</section>
			<!-- End banner Area -->








			<!-- Start post-content Area -->
			<section class="post-content-area single-post-area">
				<div class="container">
					<div class="row">

						<div class="col-lg-8 posts-list">
							<?php
			        $sql = "SELECT * FROM `azuma_d_blog2` WHERE no = $no";
			        $result = mysqli_query($conn, $sql);
			        foreach($result as $v){ ?>
							<!-- Single-Post Start -->
							<div class="single-post row">
								<div class="col-lg-12">
									<?php
		              if(isset($v['imgfile1'])){  ?>
										<div class="feature-img"><img class="img-fluid" src="blog_images/<?=$v['imgfile1']?>" alt="게시물이미지"></div>
									<?php } else {} ?>
								</div>
								<div class="col-lg-12">
										<div class="col-lg-12 mt-30">
                      <p><strong>
                        <b>제목 : <?=$v['title']?></b>
                      </p></strong>
											<p><strong>
												내용 : <?=$v['content']?>
											</p></strong>
                      <p><strong>
                        <b>작성자 : <?=$v['nickname']?></b>
                      </p></strong>
										</div>
									</div>
								</div>

  							<div class="navigation-area">
  								<div class="row">
  									<div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
  										<div class="thumb">
  											<a href="blog2.php"><img class="img-fluid" src="img/blog/prev.jpg" alt=""></a>
  										</div>
  										<div class="arrow">
  											<a href="blog2.php"><span class="lnr text-white lnr-arrow-left"></span></a>
  										</div>
  										<div class="detials">
  											<p><strong>글 목록</strong></p>
  											<a href="blog2.php"><h4>이전으로 돌아가기</h4></a>
  										</div>
  									</div>

									<?php
									if(!isset($_SESSION['id'])){ // 세션 없는 경우 ?>
                    <div class="col-lg-2 col-md-6 col-12 nav-right">
                      <p><a href="blog2_pw_modify.php?no=<?=$v['no']?>" class="primary-btn">수정</a></p>
                      <p><a href="blog2_pw_delete.php?no=<?=$v['no']?>" class="primary-btn">삭제</a></p>
                    </div>
									<?php } else { // 세션 있는 경우 ?>
										<div class="col-lg-2 col-md-6 col-12 nav-right">
                      <p><a href="blog2_modify.php?no=<?=$v['no']?>" class="primary-btn">수정</a></p>
                      <p><a href="_blog2_delete.php?no=<?=$v['no']?>" class="primary-btn">삭제</a></p>
										</div>
									<?php } ?>

								</div>
							</div>
						<?php } ?>

<?php require('lib/side.php'); ?>

<?php require('lib/bottom.php'); ?>

<?php } ?>
