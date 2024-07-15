<template>
   <section class="container-fluid seasons">
        <div class="iq-custom-select d-inline-block sea-epi s-margin">
            <V-select :options="sessonOption" v-model="selected">
            </V-select>
         </div>
         <ul class="trending-pills d-flex nav nav-pills align-items-center text-center s-margin" role="tablist">
            <li class="nav-item">
               <a class="nav-link active show" data-toggle="pill" href="#episodes" role="tab"
                  aria-selected="true">Episodes</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" data-toggle="pill" href="#popularclips" role="tab" aria-selected="false">Popular
                  Clips</a>
            </li>
         </ul>
         <div class="tab-content">
             <div id="episodes" class="tab-pane fade active show" role="tabpanel">
                 <div class="block-space">
                     <b-row>
                        <b-col  md="6" class="col-1-5 iq-mb-30" v-for="(item,index) in sessonData" :key="index">
                            <div class="epi-box">
                                <div class="epi-img position-relative">
                                    <img :src="item.image" class="img-fluid img-zoom" alt="">
                                    <div class="episode-number">{{item.episode}}</div>
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
                     </b-row>
                 </div>
             </div>
             <div id="popularclips" class="tab-pane fade" role="tabpanel">
                 <div class="block-space">
                     <b-row>
                        <b-col  md="6" class="col-1-5 iq-mb-30" v-for="(item,index1) in popularclips" :key="index1">
                            <div class="epi-box">
                                <div class="epi-img position-relative">
                                    <img :src="item.image" class="img-fluid img-zoom" alt="">
                                    <div class="episode-number">{{item.episode}}</div>
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
                     </b-row>
                 </div>
             </div>
         </div>
      </section>
</template>
<script>

export default {
  name: 'Sesson',
  components: {
  },
  mounted () {
  },
  data () {
    return {
      selected: 1,
      sessonOption: [
        { id: 1, value: 'season1', text: 'Season 1' },
        { id: 2, value: 'season2', text: 'Season 2' },
        { id: 3, value: 'season3', text: 'Season 3' }
      ],
      sessonData: [
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
      ],
      popularclips: [
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
  }
}
</script>
