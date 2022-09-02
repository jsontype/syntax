<?php require('../lib/top.php'); ?>

<?php if(isset($_SESSION['nickname'])) {$nickname = $_SESSION['nickname'];} else {}?>

    <div class="container">
      <div class="row">
        <h2>Contact</h2>
      </div>
    </div>

    <div class="container">
        <div class="row">

            <div class="col-12 col-lg-3">
                <div>
                    <!-- Single Contact Info -->
                    <div style="padding-bottom:12px;">
                      <p><h4>2-chōme-24 Shibuya, Shibuya City, Tōkyō-to</h4></p>
                    </div>

                    <!-- Single Contact Info -->
                    <div style="padding-bottom:12px;">
                      <p><h4><a href="tel:+81 80-3590-6030">080-3590-6030</a></h4></p>
                    </div>

                    <!-- Single Contact Info -->
                    <div style="padding-bottom:12px;">
                      <p><h4>Kakao ID. ubii1</h4></p>
                      <p><h4>Line ID. ubii2</h4></p>
                    </div>

                    <!-- Single Contact Info -->
                    <div style="padding-bottom:12px;">
                      <p><h4><a href="mailto:ubi@kakao.com">ubi@kakao.com</a></h5></p>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-9" style="text-align: right;">
              <!-- ##### Google Maps ##### -->
              <div class="map-area">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7430716729273!2d139.69947901525813!3d35.658701280199665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5823ffffff%3A0xc9b596da76d00b95!2s2-ch%C5%8Dme-24-24-11F%20Shibuya%2C%20Shibuya%20City%2C%20T%C5%8Dky%C5%8D-to%20150-8319!5e0!3m2!1sko!2sjp!4v1579414113768!5m2!1sko!2sjp" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
              </div>
            </div>
        </div>
    </div>
    <!-- ##### Contact Info Area End ##### -->







    <!-- ##### Contact Area Start ##### -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading white">
            <h2>Get In Touch</h2>
          </div>
        </div>
      </div>

      <div class="row">
          <div class="col-12">
            <!-- Contact Form Area -->
            <div class="contact-form-area">
            <form action="_letter.php" method="post">
                <div class="row">
                  <div class="col-lg-6">
                      <div class="form-group">
                        <?php if(isset($_SESSION['realname'])){ ?>
                          <input type="text" class="form-control" name="name" placeholder="성함" value="<?=$_SESSION['realname'];?> 님" readonly>
                        <?php } else { ?>
                          <input type="text" class="form-control" name="name" placeholder="성함" maxlength="15">
                        <?php } ?>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="form-group">
                        <?php if(isset($_SESSION['email'])){ ?>
                          <input type="email" class="form-control" name="email" placeholder="E-mail" value="<?=$_SESSION['email'];?>" maxlength="30">
                        <?php } else { ?>
                          <input type="email" class="form-control" name="email" placeholder="E-mail" maxlength="30">
                        <?php } ?>
                      </div>
                  </div>
                  <div class="col-lg-12">
                      <div class="form-group">
                        <input type="text" class="form-control" name="subject" placeholder="제목" maxlength="999">
                      </div>
                  </div>
                  <div class="col-lg-12">
                      <div class="form-group">
                        <textarea class="form-control" cols="30" rows="10" name="message" placeholder="문의내용" maxlength="14999"></textarea>
                      </div>
                  </div>
                  <div class="col-12 text-center" style="padding-bottom: 100px;">
                    <button class="btn btn-primary mt-30" type="submit">보내기</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- ##### Contact Area End ##### -->

<?php require('../lib/bottom.php'); ?>
