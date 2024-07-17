<template>
  <div>
    <Banner />
    <div class="main-content">
      <Details />
      <MoreLike />
      <Upcomming />
    </div>
  </div>
</template>
<script>
import { core } from '../../../assets/app/app'
import Banner from '../../../components/frontend/movie-detail/BannerVideo'
import Details from '../../../components/frontend/movie-detail/Detail'
import Upcomming from '../../../components/frontend/movie-detail/Upcomming'
import MoreLike from '../../../components/frontend/movie-detail/MoreLike'
export default {
  layout: 'FrontendLayout',
  name: 'MovieDetail',
  components: {
    Details,
    Upcomming,
    MoreLike,
    Banner
  },
  mounted () {
    core.index()
  }
}
</script>
