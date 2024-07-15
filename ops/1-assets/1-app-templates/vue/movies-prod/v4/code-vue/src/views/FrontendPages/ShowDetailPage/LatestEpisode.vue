<template>
    <section id="iq-favorites">
        <b-container fluid >
            <div class="block-space">
                <b-row>
                    <b-col sm="12" class="overflow-hidden">
                        <div class="iq-main-header d-flex align-items-center justify-content-between">
                        <h4 class="main-title">Latest Episodes</h4>
                       <router-link :to="{ name: 'landing-page.show-single' }" class="text-primary">View all</router-link>
                        </div>
                    </b-col>
                </b-row>
                <div class="row">
                    <b-col md="6" class="col-1-5 iq-mb-30" v-for="(item,index) in latestData" :key="index">
                        <div class="epi-box">
                            <div class="epi-img position-relative">
                                <img :src="item.image" class="img-fluid img-zoom" alt="">
                                <div class="episode-play-info">
                                    <div class="episode-play">
                                        <router-link :to="{ name: 'landing-page.category-detail' }">
                                        <i class="ri-play-fill"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="epi-desc p-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="text-white">{{item.date}}</span>
                                    <span class="text-primary">{{item.time}}</span>
                                </div>
                                <router-link :to="{ name: 'landing-page.category-detail' }">
                                    <h6 class="epi-name text-white mb-0">{{item.text}}</h6>
                                </router-link>
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
  mounted () {
  },
  data () {
    return {
      latestData: [
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), date: '11 Aug 20', time: '30m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/02.jpg'), date: '12 Aug 20', time: '35m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/03.jpg'), date: '14 Aug 20', time: '20m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/04.jpg'), date: '15 Aug 20', time: '40m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/05.jpg'), date: '16 Aug 20', time: '25m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/06.jpg'), date: '20 Aug 20', time: '35m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/07.jpg'), date: '21 Aug 20', time: '40m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/08.jpg'), date: '23 Aug 20', time: '45m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/09.jpg'), date: '24 Aug 20', time: '25m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/10.jpg'), date: '25 Aug 20', time: '30m', text: 'Lorem Ipsum is simply dummy text' }
      ]
    }
  }
}
</script>
