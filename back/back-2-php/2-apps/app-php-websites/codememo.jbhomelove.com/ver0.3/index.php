<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Code Memo</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: iPortfolio - v1.5.1
  * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

  <!-- ======= Mobile nav toggle button ======= -->
  <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

  <!-- ======= Header ======= -->
  <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <!-- <img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle"> -->
        <!-- <h1 class="text-light"><a href="index.html">Code Memo</a></h1> -->
        <div class="social-links mt-3 text-center">
          <!-- <a href="#" class="twitter"><i class="bx bxl-python"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-github"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a> -->
        </div>
      </div>

      <nav class="nav-menu">
        <ul>
          <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>Code Histroy</span></a></li>
          <li><a href="#contact"><i class="bx bx-envelope"></i> Write</a></li>

        </ul>
      </nav><!-- .nav-menu -->
      <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
      <!-- clock.js -->
      <div class="js-clock">
          <h1 style="font-size:200px; padding-bottom:100px;">00:00:00</h1>
      </div>

      <p>Code: <span class="typed" data-typed-items="Python, Java, Javascript, Etc"></span></p>
    </div>
  </section><!-- End Hero -->

  <main id="main">

    <!-- ======= Resume Section ======= -->
    <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>Code Histroy</h2>
        </div>

        <div class="row">
          <div class="col-lg-12" data-aos="fade-up">

            <?php require ('_conn.php'); ?>

            <?php
            $sql = "SELECT * FROM `codememo1` WHERE `del_flg` = 0";
            $result = mysqli_query($conn, $sql);
            foreach($result as $v){
            ?>

            <!-- *** example 1-->
            <h3 class="resume-title"><?=$v['title'];?></h3>
            <div class="resume-item pb-0">
              <h4>Code: <?=$v['code'];?></h4>
              <p><em><pre id="<?=$v['no'];?>"><?=$v['content'];?></pre></em></p>
            </div>
            <button class="btn-danger" onclick="location.href='_delete.php?no=<?=$v['no'];?>'">Delete</button>
            <button class="btn-secondary" onclick="copyToClipboard('#<?=$v['no'];?>')">Copy</button>
            
            <?php
            }
            ?>

          </div>
        </div>

      </div>
    </section><!-- End Resume Section -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
    <!-- <section id="contact" class="contact"> -->
      <div class="container">

        <div class="section-title">
          <h2>Write</h2>
        </div>

        <div class="row" data-aos="fade-in">
          <!-- name : title, code, content -->
          <div class="col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="_write.php" method="post" role="form" class="php-email-form">
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="title">Title</label>
                  <input type="text" name="title" id="name" class="form-control"/>
                </div>
                <div class="form-group col-md-12">
                  <label for="name">Language</label>
                  <!-- <input type="dropdown" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" /> -->
                  <select id="code" name="code" class="form-control">
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Etc">Etc</option>
                  </select>                  
                </div>
              </div>
              <div class="form-group">
                <label for="name">Code</label>
                <textarea name="content" rows="10" class="form-control"></textarea>
              </div>
              <div class="text-center"><button type="submit">Send</button></div>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Azuma</span></strong>
      </div>
      <div class="credits">
        Designed by <a href="https://github.com/Azumait">D.Yang</a>
      </div>
    </div>
  </footer><!-- End  Footer -->

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/counterup/counterup.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/typed.js/typed.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="clock.js"></script>
  <script src="copy.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>