<template>
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
                    <div class="blog-content">
                        <p><strong>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</strong></p>
                        <p>Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis. Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.</p>
                        <p>Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus. Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.</p>
                    </div>
                    <blockquote class="wp-block-quote">
                        <p>\”Simon Doe has his tongue planted in his cheek as he describes the<br>fictional skills of his advancing agent.\”</p>
                        <cite><a href="#">Steve Kowalsky</a></cite>
                    </blockquote>
                    <p>Potenti fusce himenaeos hac aenean quis donec vivamus aliquet, wprdpress integer inceptos curae sollicitudin in class sociosqu netus, euismod tempus fermentum odio gravida eleifend viverra pulvinar inceptos ligula consectetur. Potenti ante porttitor tristique curae scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra in commodo.</p>
                    <p>Nisi habitasse viverra praesent a maecenas odio erat tristique praesent elementum rutrum maecenas blandit nec curabitur donec, turpis varius etiam felis ultrices sit, per inceptos dapibus fames donec praesent quisque commodo primis proin leo nisl lacinia dictumst justo sagittis luctus vestibulum sed quisque.</p>
                    <div>
                        <div >
                            <iframe title="Lauren Cohan opens up about her ‘Walking Dead’ salary dispute" width="525" height="295" src="https://www.youtube.com/embed/bPh0kfMRIFA?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>
                    </div>
                    <p>Potenti fusce himenaeos hac aenean quis donec vivamus aliquet, wprdpress integer inceptos curae sollicitudin in class sociosqu netus, euismod tempus fermentum odio gravida eleifend viverra pulvinar inceptos ligula consectetur. Potenti ante porttitor tristique curae scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra in commodo.</p>
                </div>
                <div class="comments-area validate-form">
                    <div  class="comment-respond">
                        <h3  class="comment-reply-title">Leave a Reply <small><a href="#" style="display:none;">Cancel reply</a></small></h3>
                        <form class="comment-form" novalidate="">Your email address will not be published. Required fields are marked *<div class="comment-form-comment"><textarea name="comment" aria-required="true" placeholder="Comment"></textarea></div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="comment-form-author">
                                        <input id="author" name="author" aria-required="true" placeholder="Name*">
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="comment-form-email">
                                        <input id="email" name="email" placeholder="Email*">
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="comment-form-url">
                                        <input id="url" name="url" placeholder="Website">
                                    </div>
                                </div>
                            </div>
                            <p class="comment-form-cookies-consent">
                                <input  name="wp-comment-cookies-consent" type="checkbox" value="yes">
                                <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                            </p>
                            <p class="form-submit">
                                <button name="submit" type="submit" id="submit" class="submit" value="Post Comment">
                                    <span class="iq-btn-text-holder">Post Comment</span>
                                </button>
                                <input type="hidden" name="comment_post_ID" value="661" id="comment_post_ID">
                                <input type="hidden" name="comment_parent" id="comment_parent" value="0">
                            </p>
                        </form>
                    </div>
                    <div class="wpcf7-response-output error-msg" aria-hidden="true" style="display: none;">
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
export default {
  name: 'BlogdetailSidebar'
}
</script>
