<?php require('lib/top.php'); ?>

<?php require('_bbs1page.php'); ?>

    <!-- ##### Breadcumb Area Start ##### -->
    <section class="breadcumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/breadcumb3.jpg);">
        <div class="bradcumbContent">
            <p>See what’s new</p>
            <h2>BBS</h2>
        </div>
    </section>
    <!-- ##### Breadcumb Area End ##### -->

    <!-- ##### BBS Area Start ##### -->
    <div class="blog-area section-padding-100">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-9">

                    <?php
                        if (isset($_SESSION['id'])) {
                    ?>
                        <button class="btn btn-secondary" onclick="location.href='bbs1write.php'">새 글</button>
                        <hr>
                    <?php
                        }

                        foreach($result as $bbs) { 
                    ?>

                    <!-- Single Post Start -->
                    <div class="single-blog-post mb-30 wow fadeInUp" data-wow-delay="100ms">
                        <!-- BBS Content -->
                        <div class="blog-content">
                            <!-- Post Title -->
                            <div class="post-meta d-flex mb-30">
                                <?php if($bbs['img_file']) { ?>
                                    <img class="mr-5" style="height:50px;" src="bbs_img/<?=$bbs['img_file'];?>" alt="bbs image"></a>
                                <?php } else { ?>
                                    <img class="mr-5" style="height:50px;" src="bbs_img/noimage.png" alt="no bbs image"></a>
                                <?php } ?>
                                <a href="bbsview.php?no=<?=$bbs['no'];?>&current_page=<?=$current_page;?>" class="pr-5 post-title"><?=$bbs['title'];?></a>
                                <p class="post-author">By<a href="#"> <?=$bbs['name'];?></a></p>
                                <p class="tags">in<a href="#"> <?=$bbs['category'];?></a></p>
                                <!-- 수정, 삭제 버튼 -->
                                <?php 
                                    if(isset($_SESSION['id'])) {
                                        if($_SESSION['id'] == $bbs['id']) { 
                                ?>
                                            <button class="ml-5 btn btn-secondary" onclick="location.href='bbs1mod.php?no=<?=$bbs['no'];?>'">수정</button>
                                            <button class="ml-1 btn btn-secondary" onclick="location.href='_bbs1delete.php?no=<?=$bbs['no'];?>'">삭제</button>
                                <?php 
                                        }
                                    }                            
                                ?>
                            </div>


                        </div>
                    </div>
                    <!-- Single Post End -->                    

                    <?php
                        }
                    ?>



                    <!-- Pagination -->
                    <div class="oneMusic-pagination-area wow fadeInUp" data-wow-delay="300ms">
                        <nav>
                            <ul class="pagination">
                                <li class="page-item active"><a class="page-link" href="bbs.php?current_page=1">&laquo;</a></li>
                                
                                <?php if ($current_page > 1) { ?>
                                    <li class="page-item active"><a class="page-link" href="bbs.php?current_page=<?=$prev_page;?>">앞</a></li>
                                <?php } else { ?>
                                    <li class="page-item active"><a class="page-link" href="#">앞</a></li>
                                <?php } ?>

                                <?php if ($current_page < $end_page) { ?>
                                    <li class="page-item active"><a class="page-link" href="bbs.php?current_page=<?=$next_page;?>">뒤</a></li>
                                <?php } else { ?>
                                    <li class="page-item active"><a class="page-link" href="#">뒤</a></li>
                                <?php } ?>

                                <li class="page-item active"><a class="page-link" href="bbs.php?current_page=<?=$end_page;?>">&raquo;</a></li>
                            <p>현 페이지 <?=$current_page;?> / 총 페이지 <?=$end_page;?></p>
                            </ul>
                        </nav>
                    </div>
                </div>            




                <div class="col-12 col-lg-3">
                    <div class="blog-sidebar-area">

                        <!-- Widget Area -->
                        <div class="single-widget-area mb-30">
                            <div class="widget-title">
                                <h5>Categories</h5>
                            </div>
                            <div class="widget-content">
                                <ul>
                                    <li><a href="#">Music</a></li>
                                    <li><a href="#">Events &amp; Press</a></li>
                                    <li><a href="#">Festivals</a></li>
                                    <li><a href="#">Lyfestyle</a></li>
                                    <li><a href="#">Uncategorized</a></li>
                                </ul>
                            </div>
                        </div>

                        <!-- Widget Area -->
                        <div class="single-widget-area mb-30">
                            <div class="widget-title">
                                <h5>Archive</h5>
                            </div>
                            <div class="widget-content">
                                <ul>
                                    <li><a href="#">February 2018</a></li>
                                    <li><a href="#">March 2018</a></li>
                                    <li><a href="#">April 2018</a></li>
                                    <li><a href="#">May 2018</a></li>
                                    <li><a href="#">June 2018</a></li>
                                </ul>
                            </div>
                        </div>

                        <!-- Widget Area -->
                        <div class="single-widget-area mb-30">
                            <div class="widget-title">
                                <h5>Tags</h5>
                            </div>
                            <div class="widget-content">
                                <ul class="tags">
                                    <li><a href="#">music</a></li>
                                    <li><a href="#">events</a></li>
                                    <li><a href="#">artists</a></li>
                                    <li><a href="#">press</a></li>
                                    <li><a href="#">mp3</a></li>
                                    <li><a href="#">videos</a></li>
                                    <li><a href="#">concerts</a></li>
                                    <li><a href="#">performers</a></li>
                                </ul>
                            </div>
                        </div>

                        <!-- Widget Area -->
                        <div class="single-widget-area mb-30">
                            <a href="#"><img src="img/bg-img/add.gif" alt=""></a>
                        </div>

                        <!-- Widget Area -->
                        <div class="single-widget-area mb-30">
                            <a href="#"><img src="img/bg-img/add2.gif" alt=""></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ##### BBS Area End ##### -->

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