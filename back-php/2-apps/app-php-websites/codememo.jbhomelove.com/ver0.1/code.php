<?php require ('lib/top.php'); ?>

<?php require ('_conn.php'); ?>

  <main id="main">

    <!-- ======= Resume Section ======= -->
    <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>Codes</h2>
        </div>

        <div class="row">

          <?php 
            $SQL = "SELECT * FROM `codememo2`"; 
            $result = mysqli_query($conn, $SQL);

            foreach($result as $v){
          ?>

          <div class="col-lg-12" data-aos="fade-up">
            <h3 class="resume-title"><?php echo $v['title']; ?></h3>
            <div class="resume-item pb-0">
              <h4>Type: <?php echo $v['type']; ?></h4>
              <p><em><?php echo $v['content']; ?></em></p>
            </div>
          </div>

          <?php } ?>

        </div>

      </div>
    </section><!-- End Resume Section -->

<?php require ('lib/bottom.php'); ?>
