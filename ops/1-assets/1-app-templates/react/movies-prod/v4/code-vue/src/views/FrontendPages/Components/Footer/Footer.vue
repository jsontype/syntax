<template>
<footer id="contact" class="footer-one iq-bg-dark">

        <!-- Address -->
        <div class="footer-top">
            <div class="container-fluid">
                <div class="row footer-standard">
                    <div class="col-lg-7">
                        <div class="widget text-left">
                            <div class="menu-footer-link-1-container">
                                <ul id="menu-footer-link-1" class="menu p-0">
                                    <li id="menu-item-7314" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7314">
                                        <a href="#">Terms Of Use</a>
                                    </li>
                                    <li id="menu-item-7316" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7316">
                                        <router-link :to="{name: 'landing-page.privacypolicy'}">Privacy-Policy</router-link>
                                    </li>

                                    <li id="menu-item-7315" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7315">
                                        <router-link :to="{name: 'landing-page.faq'}">FAQ</router-link>
                                    </li>
                                    <li id="menu-item-7118" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7118">
                                        <router-link :to="{name: 'landing-page.watchvideo'}">Watch List</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="widget text-left">
                            <div class="textwidget">
                                <p><small>© 2021 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 mt-4 mt-lg-0">
                        <h6 class="footer-link-title">
                            Follow Us :
                        </h6>
                        <ul class="info-share">
                            <li><a target="_blank" href="#"><i class="ri-facebook-fill"></i></a></li>
                            <li><a target="_blank" href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a target="_blank" href="#"><i class="fab fa-google-plus-g"></i></a></li>
                            <li><a target="_blank" href="#"><i class="fab fa-github"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
                        <div class="widget text-left">
                            <div class="textwidget">
                                <h6 class="footer-link-title">Streamit App</h6>
                                <div class="d-flex align-items-center">
                                    <a class="app-image" href="#">
                                        <img src="@/assets/images/frontend/footer/01.jpg" alt="play-store">
                                    </a><br>
                                    <a class="ml-3 app-image" href="#"><img src="@/assets/images/frontend/footer/02.jpg" alt="app-store"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Address END -->
    </footer>
</template>
<script>

export default {
  name: 'Footer',
  components: {
  },
  mounted () {
  }
}
</script>
