<template>
<!-- <div> -->
<div class="col-lg-8 col-sm-12">
    <article>
        <div class="iq-blog-box">
            <div class="iq-blog-image">
                <img width="1920" height="1080" src="@/assets/images/blog/blog1.jpeg">
            </div>
            <div class="iq-blog-detail">
                <div class="iq-blog-meta">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#" class="iq-user"><i class="fa fa-user-o mr-1" aria-hidden="true"></i>admin</a>
                    </li>
                    <li class="list-inline-item">
                        <i class="fa fa-calendar mr-1" aria-hidden="true"></i>
                        <span class="screen-reader-text">Posted on</span>
                        <a href="#" rel="bookmark">
                            <time  datetime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                        </a>
                    </li>
                </ul>
                </div>
                <div class="blog-title">
                <h3 class="entry-title">
                    <router-link :to="{name: 'landing-page.blogdetail'}">
                    The Most Anticipated Movies
                    </router-link>
                </h3>
                </div>
                <div class="blog-content">
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                </div>
                <div class="blog-button">
                <a class="button-link" href="#">Read More<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <ul class="iq-blogcat">
                <li class="iq-tag-title"><i class="fa fa-film" aria-hidden="true"></i> Categories:</li>
                <li><a href="#">Dramas</a></li>
                </ul>
                <ul class="iq-blogtag">
                <li class="iq-tag-title">
                    <i class="fa fa-tags" aria-hidden="true"></i> Tags:
                </li>
                <li><a href="#">comedy</a></li>
                <li><a href="#">Drama</a></li>
                <li><a href="#">Trailers</a></li>
                </ul>
            </div>
        </div>
    </article>
    <article>
        <div class="iq-blog-box">
            <div class="iq-blog-image">
                <img width="1920" height="1080" src="@/assets/images/blog/blog2.jpeg" >
            </div>
            <div class="iq-blog-detail">
                <div class="iq-blog-meta">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#" class="iq-user"><i class="fa fa-user-o mr-1" aria-hidden="true"></i>admin</a>
                    </li>
                    <li class="list-inline-item">
                        <i class="fa fa-calendar mr-1" aria-hidden="true"></i>
                        <span class="screen-reader-text">Posted on</span>
                        <a href="#" rel="bookmark">
                            <time  datetime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                        </a>
                    </li>
                </ul>
                </div>
                <div class="blog-title">
                <h3 class="entry-title">
                    <a href="#">Amy Adams Always Dreamed</a>
                </h3>
                </div>
                <div class="blog-content">
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                </div>
                <div class="blog-button">
                <a class="button-link" href="#">Read More<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <ul class="iq-blogcat">
                <li class="iq-tag-title"><i class="fa fa-film" aria-hidden="true"></i> Categories:</li>
                <li><a href="#">Dramas</a></li>
                </ul>
                <ul class="iq-blogtag">
                <li class="iq-tag-title">
                    <i class="fa fa-tags" aria-hidden="true"></i> Tags:
                </li>
                <li><a href="#">Drama</a></li>
                <li><a href="#">Movie Trailers</a></li>
                </ul>
            </div>
        </div>
    </article>
    <article>
        <div class="iq-blog-box">
            <div class="iq-blog-image">
                <img width="1920" height="1080" src="@/assets/images/blog/blog3.jpeg" >
            </div>
            <div class="iq-blog-detail">
                <div class="iq-blog-meta">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#" class="iq-user"><i class="fa fa-user-o mr-1" aria-hidden="true"></i>admin</a>
                    </li>
                    <li class="list-inline-item">
                        <i class="fa fa-calendar mr-1" aria-hidden="true"></i>
                        <span class="screen-reader-text">Posted on</span>
                        <a href="#" rel="bookmark">
                            <time  datetime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                        </a>
                    </li>
                </ul>
                </div>
                <div class="blog-title">
                <h3 class="entry-title">
                    <a href="#"> WandaVision Will Reveal Scarlet Witch’s Untapped Powers</a>
                </h3>
                </div>
                <div class="blog-content">
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                </div>
                <div class="blog-button">
                <a class="button-link" href="#">Read More<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <ul class="iq-blogcat">
                <li class="iq-tag-title"><i class="fa fa-film" aria-hidden="true"></i> Categories:</li>
                <li><a href="#">Movie Trailers</a></li>
                </ul>
                <ul class="iq-blogtag">
                <li class="iq-tag-title">
                    <i class="fa fa-tags" aria-hidden="true"></i> Tags:
                </li>
                <li><a href="#">horr</a></li>
                <li><a href="#">Movie</a></li>
                <li><a href="#">Movie Trailers</a></li>
                <li><a href="#">Thriller</a></li>
                </ul>
            </div>
        </div>
    </article>
    <article>
        <div class="iq-blog-box">
            <div class="iq-blog-image">
                <img width="1920" height="1080" src="@/assets/images/blog/blog4.jpeg" >
            </div>
            <div class="iq-blog-detail">
                <div class="iq-blog-meta">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#" class="iq-user"><i class="fa fa-user-o mr-1" aria-hidden="true"></i>admin</a>
                    </li>
                    <li class="list-inline-item">
                        <i class="fa fa-calendar mr-1" aria-hidden="true"></i>
                        <span class="screen-reader-text">Posted on</span>
                        <a href="#" rel="bookmark">
                            <time  datetime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                        </a>
                    </li>
                </ul>
                </div>
                <div class="blog-title">
                <h3 class="entry-title">
                    <a href="#"> Everything You Need to Know About</a>
                </h3>
                </div>
                <div class="blog-content">
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                </div>
                <div class="blog-button">
                <a class="button-link" href="#">Read More<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <ul class="iq-blogcat">
                <li class="iq-tag-title"><i class="fa fa-film" aria-hidden="true"></i> Categories:</li>
                <li><a href="#">Trailers</a></li>
                </ul>
                <ul class="iq-blogtag">
                <li class="iq-tag-title">
                    <i class="fa fa-tags" aria-hidden="true"></i> Tags:
                </li>
                <li><a href="#">comedy</a></li>
                <li><a href="#">Movie Trailers</a></li>
                <li><a href="#">Trailers</a></li>
                <li><a href="#">TV Series</a></li>
                </ul>
            </div>
        </div>
    </article>
    <article>
        <div class="iq-blog-box">
            <div class="iq-blog-image">
                <img width="1920" height="1080" src="@/assets/images/blog/blog5.jpeg" >
            </div>
            <div class="iq-blog-detail">
                <div class="iq-blog-meta">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#" class="iq-user"><i class="fa fa-user-o mr-1" aria-hidden="true"></i>admin</a>
                    </li>
                    <li class="list-inline-item">
                        <i class="fa fa-calendar mr-1" aria-hidden="true"></i>
                        <span class="screen-reader-text">Posted on</span>
                        <a href="#" rel="bookmark">
                            <time  datetime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                        </a>
                    </li>
                </ul>
                </div>
                <div class="blog-title">
                <h3 class="entry-title">
                    <a href="#">My streaming Black Pearl</a>
                </h3>
                </div>
                <div class="blog-content">
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                </div>
                <div class="blog-button">
                <a class="button-link" href="#">Read More<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <ul class="iq-blogcat">
                <li class="iq-tag-title"><i class="fa fa-film" aria-hidden="true"></i> Categories:</li>
                <li><a href="#"> Movie Trailers</a></li>
                </ul>
                <ul class="iq-blogtag">
                <li class="iq-tag-title">
                    <i class="fa fa-tags" aria-hidden="true"></i> Tags:
                </li>
                <li><a href="#">Movie Trailers</a></li>
                <li><a href="#">Mystery</a></li>
                <li><a href="#">thrill</a></li>
                </ul>
            </div>
        </div>
    </article>
    <article>
        <div class="iq-blog-box">
            <div class="iq-blog-image">
                <img width="1920" height="1080" src="@/assets/images/blog/blog6.jpeg" >
            </div>
            <div class="iq-blog-detail">
                <div class="iq-blog-meta">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#" class="iq-user"><i class="fa fa-user-o mr-1" aria-hidden="true"></i>admin</a>
                    </li>
                    <li class="list-inline-item">
                        <i class="fa fa-calendar mr-1" aria-hidden="true"></i>
                        <span class="screen-reader-text">Posted on</span>
                        <a href="#" rel="bookmark">
                            <time  datetime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                        </a>
                    </li>
                </ul>
                </div>
                <div class="blog-title">
                <h3 class="entry-title">
                    <a href="#">My streaming Black Pearl</a>
                </h3>
                </div>
                <div class="blog-content">
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                </div>
                <div class="blog-button">
                <a class="button-link" href="#">Read More<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <ul class="iq-blogcat">
                <li class="iq-tag-title"><i class="fa fa-film" aria-hidden="true"></i> Categories:</li>
                <li><a href="#"> Movie Trailers</a></li>
                </ul>
                <ul class="iq-blogtag">
                <li class="iq-tag-title">
                    <i class="fa fa-tags" aria-hidden="true"></i> Tags:
                </li>
                <li><a href="#">Horror</a></li>
                <li><a href="#">Movie</a></li>
                <li><a href="#">Movie Trailers</a></li>
                </ul>
            </div>
        </div>
    </article>
    <article>
        <div class="iq-blog-box">
            <div class="iq-blog-image">
                <img width="1920" height="1080" src="@/assets/images/blog/blog7.jpeg" >
            </div>
            <div class="iq-blog-detail">
                <div class="iq-blog-meta">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#" class="iq-user"><i class="fa fa-user-o mr-1" aria-hidden="true"></i>admin</a>
                    </li>
                    <li class="list-inline-item">
                        <i class="fa fa-calendar mr-1" aria-hidden="true"></i>
                        <span class="screen-reader-text">Posted on</span>
                        <a href="#" rel="bookmark">
                            <time  datetime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                        </a>
                    </li>
                </ul>
                </div>
                <div class="blog-title">
                <h3 class="entry-title">
                    <a href="#">Cookies and Web Beacons</a>
                </h3>
                </div>
                <div class="blog-content">
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                </div>
                <div class="blog-button">
                <a class="button-link" href="#">Read More<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <ul class="iq-blogcat">
                <li class="iq-tag-title"><i class="fa fa-film" aria-hidden="true"></i> Categories:</li>
                <li><a href="#">TV Comedies</a></li>
                </ul>
                <ul class="iq-blogtag">
                <li class="iq-tag-title">
                    <i class="fa fa-tags" aria-hidden="true"></i> Tags:
                </li>
                <li><a href="#">comedy</a></li>
                <li><a href="#">Tv Rumors</a></li>
                <li><a href="#">TV Series</a></li>
                </ul>
            </div>
        </div>
    </article>
    <article>
        <div class="iq-blog-box">
            <div class="iq-blog-image">
                <img width="1920" height="1080" src="@/assets/images/blog/blog8.jpeg" >
            </div>
            <div class="iq-blog-detail">
                <div class="iq-blog-meta">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#" class="iq-user"><i class="fa fa-user-o mr-1" aria-hidden="true"></i>admin</a>
                    </li>
                    <li class="list-inline-item">
                        <i class="fa fa-calendar mr-1" aria-hidden="true"></i>
                        <span class="screen-reader-text">Posted on</span>
                        <a href="#" rel="bookmark">
                            <time  datetime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                        </a>
                    </li>
                </ul>
                </div>
                <div class="blog-title">
                <h3 class="entry-title">
                    <a href="#"> Birds Of Prey Star Says She’s Definitely Open To A Ghost Return</a>
                </h3>
                </div>
                <div class="blog-content">
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                </div>
                <div class="blog-button">
                <a class="button-link" href="#">Read More<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <ul class="iq-blogcat">
                <li class="iq-tag-title"><i class="fa fa-film" aria-hidden="true"></i> Categories:</li>
                <li><a href="#">Dramas</a></li>
                </ul>
                <ul class="iq-blogtag">
                <li class="iq-tag-title">
                    <i class="fa fa-tags" aria-hidden="true"></i> Tags:
                </li>
                <li><a href="#">Comedies</a></li>
                <li><a href="#">Drama</a></li>
                <li><a href="#">Horror</a></li>
                <li><a href="#">Movie</a></li>
                </ul>
            </div>
        </div>
    </article>
    <article>
        <div class="iq-blog-box">
            <div class="iq-blog-image">
                <img width="1920" height="1080" src="@/assets/images/blog/blog9.jpeg" >
            </div>
            <div class="iq-blog-detail">
                <div class="iq-blog-meta">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#" class="iq-user"><i class="fa fa-user-o mr-1" aria-hidden="true"></i>admin</a>
                    </li>
                    <li class="list-inline-item">
                        <i class="fa fa-calendar mr-1" aria-hidden="true"></i>
                        <span class="screen-reader-text">Posted on</span>
                        <a href="#" rel="bookmark">
                            <time  datetime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                        </a>
                    </li>
                </ul>
                </div>
                <div class="blog-title">
                <h3 class="entry-title">
                    <a href="#"> Saturday Night Live’ Re-Enacts Biden and Harris’ Victory Speeches</a>
                </h3>
                </div>
                <div class="blog-content">
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                </div>
                <div class="blog-button">
                <a class="button-link" href="#">Read More<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <ul class="iq-blogcat">
                <li class="iq-tag-title"><i class="fa fa-film" aria-hidden="true"></i> Categories:</li>
                <li><a href="#">Historical</a></li>
                </ul>
                <ul class="iq-blogtag">
                <li class="iq-tag-title">
                    <i class="fa fa-tags" aria-hidden="true"></i> Tags:
                </li>
                <li><a href="#">Historical</a></li>
                <li><a href="#">Movie</a></li>
                <li><a href="#">Mystery</a></li>
                <li><a href="#">Thriller</a></li>
                </ul>
            </div>
        </div>
    </article>
    <article>
        <div class="iq-blog-box">
            <div class="iq-blog-image">
                <img width="1920" height="1080" src="@/assets/images/blog/blog10.jpeg" >
            </div>
            <div class="iq-blog-detail">
                <div class="iq-blog-meta">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#" class="iq-user"><i class="fa fa-user-o mr-1" aria-hidden="true"></i>admin</a>
                    </li>
                    <li class="list-inline-item">
                        <i class="fa fa-calendar mr-1" aria-hidden="true"></i>
                        <span class="screen-reader-text">Posted on</span>
                        <a href="#" rel="bookmark">
                            <time  datetime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                        </a>
                    </li>
                </ul>
                </div>
                <div class="blog-title">
                <h3 class="entry-title">
                    <a href="#"> Gillian Anderson Shares the  Photos From The Crown</a>
                </h3>
                </div>
                <div class="blog-content">
                <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                </div>
                <div class="blog-button">
                <a class="button-link" href="#">Read More<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <ul class="iq-blogcat">
                <li class="iq-tag-title"><i class="fa fa-film" aria-hidden="true"></i> Categories:</li>
                <li><a href="#">Movie</a></li>
                </ul>
                <ul class="iq-blogtag">
                <li class="iq-tag-title">
                    <i class="fa fa-tags" aria-hidden="true"></i> Tags:
                </li>
                <li><a href="#">Comedies</a></li>
                <li><a href="#">Movie Trailers</a></li>
                <li><a href="#">TV Series</a></li>
                </ul>
            </div>
        </div>
    </article>
    <a class=" btn btn-hover iq-button">
        <span>Load More</span>
    </a>
</div>
<!-- </div> -->
</template>
<script>
export default {
  name: 'BlogSidebar'
}
</script>
