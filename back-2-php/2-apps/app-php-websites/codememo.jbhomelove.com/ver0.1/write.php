<?php require ('lib/top.php'); ?>

  <main id="main">


    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2>Write</h2>
        </div>

        <div class="row" data-aos="fade-in">

          <div class="col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="_write.php" method="post" role="form" class="php-email-form">
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="name">Title</label>
                  <input type="text" name="title" class="form-control" id="name" />
                </div>
              </div>
              <div class="form-group">
                <label for="name">Language</label>
                <select name="type" class="form-control">
                  <option value="Java">Java</option>
                  <option value="Javascript" >Javascript </option>
                  <option value="Python">Python</option>
                  <option value="Etc">Etc</option>
                </select>

              </div>
              <div class="form-group">
                <label for="name">Content</label>
                <textarea class="form-control" name="content" rows="8" ></textarea>
              </div>
              <div class="text-center"><button type="submit">Send</button></div>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

  </main><!-- End #main -->

<?php require ('lib/bottom.php'); ?>
