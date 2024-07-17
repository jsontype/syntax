<template>
<div>
     <Banner/>
     <div class="main-content">
            <Detail />
            <LatestEpisode/>
     </div>
  </div>
</template>
<script>
import { core } from '../../../assets/app/app'
import Banner from '../../../components/frontend/show-detail/BannerVideo'
import Detail from '../../../components/frontend/show-detail/Detail'
import LatestEpisode from '../../../components/frontend/show-detail/LatestEpisode'
export default {
  layout: 'FrontendLayout',
  name: 'ShowDetail',
  components: {
    Banner,
    Detail,
    LatestEpisode
  },
  mounted () {
    core.index()
  }
}
</script>
