<?php require('lib/top.php'); ?>

			<!-- start banner Area -->
			<section class="banner-area relative" id="home">
				<div class="overlay overlay-bg"></div>
				<div class="container">
					<div class="row fullscreen d-flex align-items-center justify-content-center">
						<div class="banner-content col-lg-8 col-md-12">
							<h1>
								대한치매예방협회
								전북익산지부
							</h1>
							<p class="pt-10 pb-10 text-white">
								"치매를 퇴치하겠습니다."<br>
								우리는 소명의식을 갖고 치매 없는 세상을 만들겠습니다.
							</p>
							<a href="about.php" class="primary-btn text-uppercase" id="booking">자세히 알아보기</a>
						</div>
					</div>
				</div>
			</section>
			<!-- End banner Area -->

			<!-- Start appointment Area -->
			<section class="appointment-area">
				<div class="container">
					<div class="row justify-content-between align-items-center pb-120 appointment-wrap">
						<div class="col-lg-5 col-md-6 appointment-left">
							<h1>
								교육시간
							</h1>
							<p><strong>
								상담 후 원하는 교육시간에 맞추어 방문해드립니다.
							</strong></p>
							<ul class="time-list">
								<li class="d-flex justify-content-between">
									<span>월-금</span>
									<span>09.00 am - 17.00 pm</span>
								</li>
								<li class="d-flex justify-content-between">
									<span>토</span>
									<span>09.00 am - 17.00 pm</span>
								</li>
								<li class="d-flex justify-content-between">
									<span>일</span>
									<span>휴무</span>
								</li>
							</ul>
						</div>
						<div class="col-lg-6 col-md-6 appointment-right pt-60 pb-60">
							<form class="form-wrap" action="_letter.php" method="post">
								<h3 class="pb-20 text-center mb-30">상담 예약</h3>
								<input type="text" class="form-control" name="familyname" placeholder="성함" onfocus="this.placeholder = ''" onblur="this.placeholder = 'name'" maxlength="15">
								<input type="hidden" name="lastname" value="님, 아래날짜로 치매교육문의">
								<input type="text" class="form-control" name="email" placeholder="전화번호" onfocus="this.placeholder = ''" onblur="this.placeholder = 'phone'" maxlength="30">
								<input id="datepicker1" name="content" class="dates form-control"  placeholder="희망 교육 일자" type="text">
								<textarea name="message" class="" rows="5" placeholder="메시지를 남겨주세요" onfocus="this.placeholder = ''" onblur="this.placeholder = 'message'" maxlength="3000"></textarea>
								<button type="submit" class="primary-btn text-uppercase">보내기</button>
							</form>
						</div>
					</div>
				</div>
			</section>
			<!-- End appointment Area -->

			<!-- Start facilities Area -->
			<section class="facilities-area section-gap">
				<div class="container">
		            <div class="row d-flex justify-content-center">
		                <div class="menu-content pb-70 col-lg-7">
		                    <div class="title text-center">
		                        <h1 class="mb-10">치매는 질병입니다.</h1>
		                        <p><strong>따라서 운동과 인지 훈련 등을 통해 얼마든지 예방도 가능합니다.
														그러나 한번 발생시 현대 의학으로도 완치가 힘든 질병입니다. 따라서 가장 좋은 방법은 치매를 예방하는 것입니다. </strong></p>
		                    </div>
		                </div>
		            </div>
						</div>
			</section>
			<!-- End facilities Area -->

<?php require('lib/bottom.php'); ?>
