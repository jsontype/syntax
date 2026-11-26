<?php require('lib/top.php'); ?>

<!-- DB연결 -->
<?php require('_conn.php'); ?>

<!-- 페이지연결 -->
<?php require('_blog2page.php'); ?>





			<!-- start banner Area -->
			<section class="banner-area relative blog-home-banner" id="home">
				<div class="overlay overlay-bg"></div>
				<div class="container">
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content blog-header-content col-lg-12">
							<h1 class="text-white">
								커뮤니티
							</h1>
							<p class="text-white">
								대한치매예방협회 커뮤니티입니다.
							</p>
							<a href="#togo" class="primary-btn">보러가기</a>
						</div>
					</div>
				</div>
			</section>
			<!-- End banner Area -->

			<!-- Start top-category-widget Area -->
			<section class="top-category-widget-area pt-90 pb-90 ">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<div class="single-cat-widget">
								<div class="content relative">
									<div class="overlay overlay-bg"></div>
								    <a href="blog1.php">
								      <div class="thumb">
												<img class="content-image img-fluid d-block mx-auto" src="img/blog/cat-widget2.jpg" alt="커뮤니티 사진">
								  	  </div>
								      <div class="content-details">
								        <h4 class="content-title mx-auto text-uppercase">공지사항</h4>
								        <span></span>
								        <p id="togo">협회에서 진행중인 프로그램이나 치매 관련 정보를 소개합니다.</p>
								      </div>
								    </a>
								</div>
							</div>
						</div>

						<div class="col-lg-6">
							<div class="single-cat-widget">
								<div class="content relative">
									<div class="overlay overlay-bg"></div>
										<a href="blog2.php">
								      <div class="thumb">
												<img class="content-image img-fluid d-block mx-auto" src="img/blog/cat-widget1.jpg" alt="커뮤니티 사진">
								  	  </div>
								      <div class="content-details">
								        <h4 class="content-title mx-auto text-uppercase">커뮤니티</h4>
								        <span></span>
								        <p>방문자 모두가 참여하는 자유로운 공간입니다.</p>
								      </div>
								    </a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- End top-category-widget Area -->










			<!-- Start post-content Area -->
			<section class="post-content-area">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 posts-list">


							<?php foreach($result_blog as $v){ ?>

							<!-- Single-Post Start -->
							<div class="single-post row">
								<div class="col-lg-3  col-md-3 meta-details">
									<ul class="tags">
										<li><a href="#"><b><strong>커뮤니티</strong></b></a></li>
									</ul>
									<div class="user-details row">
										<p class="user-name col-lg-12 col-md-12 col-6"><strong><?=$v['nickname']?>&nbsp; &nbsp; </strong><span class="lnr lnr-user"></span></p>
										<p class="date col-lg-12 col-md-12 col-6"><strong><?=DateTime::createFromFormat("Y-m-d H:i:s", "{$v['regdate']}")->format("j M, Y");?>&nbsp; &nbsp; </strong><span class="lnr lnr-calendar-full"></span></p>
										<p class="view col-lg-12 col-md-12 col-6"><strong><?=$v['no']?>번째 글</a>&nbsp; &nbsp; </strong><span class="lnr lnr-eye"></span></p>
										<p class="comments col-lg-12 col-md-12 col-6"><a href="index.php#booking"><strong>신청하기</strong></a> <span class="lnr lnr-bubble"></span></p>
									</div>
								</div>
								<div class="col-lg-9 col-md-9">

									<?php
		              if(isset($v['imgfile1'])){  ?>
										<div class="feature-img"><a href="blog2_view.php?no=<?=$v['no']?>"><img class="img-fluid" src="blog_images/<?=$v['imgfile1']?>" alt="게시물이미지"></a></div>
									<?php } else {} ?>

									<a class="posts-title" href="blog2_view.php?no=<?=$v['no']?>"><h3><?=$v['title']?></h3></a>
									<!-- <p class="excert">
										MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
									</p> -->
									<a href="blog2_view.php?no=<?=$v['no']?>" class="primary-btn"><strong>자세히보기</strong></a>
								</div>
							</div>
							<!-- Single-Post End -->

						<?php } ?>









							<!-- Pagination Start -->
              <nav class="blog-pagination justify-content-center d-flex">
                  <ul class="pagination">

										<?php if($current_blog_page==1){ ?>
                      <li class="page-item active">
                          <a href="#" class="page-link" aria-label="Previous">
                              <span aria-hidden="true">
                                  <span class="lnr lnr-chevron-left"></span>
                              </span>
                          </a>
                      </li>
                      <li class="page-item"><a href="#" class="page-link"><strong>앞</strong></a></li>
										<?php } else { ?>
											<li class="page-item active">
                          <a href="blog2.php?current_blog_page=1" class="page-link" aria-label="Previous">
                              <span aria-hidden="true">
                                  <span class="lnr lnr-chevron-left"></span>
                              </span>
                          </a>
                      </li>
                      <li class="page-item"><a href="blog2.php?current_blog_page=<?=$prev_blog_page?>" class="page-link"><strong>앞</strong></a></li>
										<?php } ?>





										<?php if($current_blog_page==$end_blog_page){ ?>
											<li class="page-item"><a href="#" class="page-link"><strong>뒤</strong></a></li>
                      <li class="page-item active">
                          <a href="#" class="page-link" aria-label="Next">
                              <span aria-hidden="true">
                                  <span class="lnr lnr-chevron-right"></span>
                              </span>
                          </a>
                      </li>
										<?php } else { ?>
											<li class="page-item"><a href="blog2.php?current_blog_page=<?=$next_blog_page?>" class="page-link"><strong>뒤</strong></a></li>
                      <li class="page-item active">
                          <a href="blog2.php?current_blog_page=<?=$end_blog_page?>" class="page-link" aria-label="Next">
                              <span aria-hidden="true">
                                  <span class="lnr lnr-chevron-right"></span>
                              </span>
                          </a>
                      </li>
										<?php } ?>


								<li> &nbsp;
											<?php echo "<strong>".$current_blog_page;echo " / ".$end_blog_page." Page</strong>";?>
								</li>
											<?php
											if(!isset($_SESSION['id'])){ // 세션 없는 경우 ?>
													<a href="blog2_pw_write.php"> &nbsp;<strong>등록</strong></a>
											<?php } else { // 세션 있는 경우 ?>
													<a href="blog2_write.php"> &nbsp;<strong>등록</strong></a>
											<?php } ?>

								</ul>
							</nav>

<?php require('lib/side.php'); ?>

<?php require('lib/bottom.php'); ?>
