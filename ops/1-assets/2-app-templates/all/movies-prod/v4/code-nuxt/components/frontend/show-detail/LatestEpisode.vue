<template>
  <section id="iq-favorites">
    <b-container fluid>
      <div class="block-space">
        <b-row>
          <b-col sm="12" class="overflow-hidden">
            <div class="iq-main-header d-flex align-items-center justify-content-between">
              <h4 class="main-title">
                Latest Episodes
              </h4>
              <nuxt-link to="/frontend/show-single" class="text-primary">
                View all
              </nuxt-link>
            </div>
          </b-col>
        </b-row>
        <div class="row">
          <b-col v-for="(item,index) in latestData" :key="index" md="6" class="col-1-5 iq-mb-30">
            <div class="epi-box">
              <div class="epi-img position-relative">
                <img :src="item.image" class="img-fluid img-zoom" alt="">
                <div class="episode-number">
                  {{ item.episode }}
                </div>
                <div class="episode-play-info">
                  <div class="episode-play">
                    <nuxt-link to="/frontend/show-detail">
                      <i class="ri-play-fill" />
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div class="epi-desc p-3">
                <div class="d-flex align-items-center justify-content-between">
                  <span class="text-white">{{ item.date }}</span>
                  <span class="text-primary">{{ item.time }}</span>
                </div>
                <nuxt-link to="/frontend/show-detail">
                  <h6 class="epi-name text-white mb-0">
                    {{ item.text }}
                  </h6>
                </nuxt-link>
              </div>
            </div>
          </b-col>
        </div>
      </div>
    </b-container>
  </section>
</template>
<script>
export default {
  name: 'LatestEpisode',
  components: {
  },
  data () {
    return {
      latestData: [
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '1', date: '11 Aug 20', time: '30m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '2', date: '12 Aug 20', time: '35m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '3', date: '14 Aug 20', time: '20m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '4', date: '15 Aug 20', time: '40m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '5', date: '16 Aug 20', time: '25m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '6', date: '20 Aug 20', time: '35m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '7', date: '21 Aug 20', time: '40m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '8', date: '23 Aug 20', time: '45m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '9', date: '24 Aug 20', time: '25m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '10', date: '25 Aug 20', time: '30m', text: 'Lorem Ipsum is simply dummy text' }
      ]
    }
  },
  mounted () {
  }
}
</script>
