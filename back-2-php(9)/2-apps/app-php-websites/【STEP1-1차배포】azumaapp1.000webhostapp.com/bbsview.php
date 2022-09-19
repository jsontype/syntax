<?php require('lib/top.php'); ?>

<?php 
    $no = $_GET['no'];
    $current_page = $_GET['current_page'];
?>

<?php require('_bbsview1page.php'); ?>

    <!-- ##### Breadcumb Area Start ##### -->
    <section class="breadcumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/breadcumb3.jpg);">
        <div class="bradcumbContent">
            <p>See what’s new</p>
            <h2>게시판 조회</h2>
        </div>
    </section>
    <!-- ##### Breadcumb Area End ##### -->

    <!-- ##### Blog Area Start ##### -->
    <div class="blog-area section-padding-100">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-12">

                    <?php
                        if (isset($_SESSION['id'])) {
                    ?>
                        <button class="btn btn-secondary" onclick="location.href='bbs.php?current_page=<?=$current_page;?>'">뒤로</button>
                        <hr>
                    <?php
                        }

                        foreach($result as $bbs) { 
                    ?>

                    <!-- Single Post Start -->
                    <div class="single-blog-post mb-100 wow fadeInUp" data-wow-delay="100ms">
                        <!-- Post Thumb -->
                        <div class="blog-post-thumb mt-30">
                            <?php if($bbs['img_file']) { ?>
                                <a href="#"><img src="bbs_img/<?=$bbs['img_file'];?>" alt="bbs image"></a>
                            <?php } else { ?>
                                <a href="#"><img src="bbs_img/noimage.png" alt="no bbs image"></a>
                            <?php } ?>
                            <!-- Post Date -->
                            <div class="post-date">
                                <?php 
                                    if ($bbs['mod_date'] != null) {
                                        $day = date("d", strtotime($bbs['mod_date']));
                                        $month = date("F", strtotime($bbs['mod_date']));
                                        $year = date("y", strtotime($bbs['mod_date']));
                                    } else {
                                        $day = date("d", strtotime($bbs['reg_date']));
                                        $month = date("F", strtotime($bbs['reg_date']));
                                        $year = date("y", strtotime($bbs['reg_date']));
                                    }
                                ?>
                                <span><?=$day;?></span>
                                <span><?=$month;?> ‘<?=$year;?></span>
                            </div>
                        </div>

                        <!-- Blog Content -->
                        <div class="blog-content">
                            <!-- Post Title -->
                            <a href="#" class="post-title"><?=$bbs['title'];?></a>
                            <!-- Post Meta -->
                            <div class="post-meta d-flex mb-30">
                                <p class="post-author">By<a href="#"> <?=$bbs['name'];?></a></p>
                                <p class="tags">in<a href="#"> <?=$bbs['category'];?></a></p>
                            </div>
                            <!-- Post Excerpt -->
                            <p><?=$bbs['content'];?></p>

                            <hr>

                            <!-- 수정, 삭제 버튼 -->
                            <?php 
                                if(isset($_SESSION['id'])) {
                                    if($_SESSION['id'] == $bbs['id']) { 
                            ?>
                                        <button class="btn btn-secondary" onclick="location.href='bbs1mod.php?no=<?=$bbs['no'];?>'">수정</button>
                                        <button class="btn btn-secondary" onclick="location.href='_bbs1delete.php?no=<?=$bbs['no'];?>'">삭제</button>
                            <?php 
                                    }
                                }                            
                            ?>

                        </div>
                    </div>
                    <!-- Single Post End -->                    

                    <?php
                        }
                    ?>


                </div>            
            </div>
        </div>
    </div>
    <!-- ##### Blog Area End ##### -->

    <!-- ##### Contact Area Start ##### -->
    <section class="contact-area section-padding-100 bg-img bg-overlay bg-fixed has-bg-img" style="background-image: url(img/bg-img/bg-2.jpg);">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading white">
                        <p>See what’s new</p>
                        <h2>Get In Touch</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <!-- Contact Form Area -->
                    <div class="contact-form-area">
                        <form action="#" method="post">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="name" placeholder="Name">
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" placeholder="E-mail">
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="subject" placeholder="Subject">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea name="message" class="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-12 text-center">
                                    <button class="btn oneMusic-btn mt-30" type="submit">Send <i class="fa fa-angle-double-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ##### Contact Area End ##### -->

    <?php require('lib/bottom.php'); ?>