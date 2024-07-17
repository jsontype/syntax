<template>
    <section class="movie-detail container-fluid">
        <b-row>
            <b-col lg="12">
                <div class="trending-info season-info g-border">
                    <h4 class="trending-text big-title text-uppercase mt-0">The Hero Camp</h4>
                    <div class="d-flex align-items-center text-white text-detail episode-name mb-0">
                        <span>S1E01</span>
                        <span class="trending-year">Lorem Ipsum is dummy text</span>
                    </div>
                    <p class="trending-dec w-100 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries.</p>
                    <ul class="list-inline p-0 mt-4 share-icons music-play-lists">
                        <li><span><i class="ri-add-line"></i></span></li>
                        <li><span><i class="ri-heart-fill"></i></span></li>
                        <li class="share">
                        <span><i class="ri-share-fill"></i></span>
                        <div class="share-box">
                            <div class="d-flex align-items-center">
                                <a href="#" class="share-ico"><i class="ri-facebook-fill"></i></a>
                                <a href="#" class="share-ico"><i class="ri-twitter-fill"></i></a>
                                <a href="#" class="share-ico"><i class="ri-links-fill"></i></a>
                            </div>
                        </div>
                        </li>
                    </ul>
                </div>
            </b-col>
        </b-row>
    </section>
</template>
<script>
export default {
  name: 'Detail',
  components: {
  },
  mounted () {
  },
  data () {
    return {
    }
  }
}
</script>
