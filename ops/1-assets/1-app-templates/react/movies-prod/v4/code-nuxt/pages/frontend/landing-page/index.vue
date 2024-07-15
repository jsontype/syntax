<template>
  <div>
    <Home />
    <div class="main-content">
      <favourite />
      <upcomming />
      <top />
      <suggestion />
      <detail />
      <trending />
      <thriller />
    </div>
  </div>
</template>

<script>
import { core } from '../../../assets/app/app'
import Home from '../../../components/frontend/landing-page/Home'
import favourite from '../../../components/frontend/landing-page/favourite'
import upcomming from '../../../components/frontend/landing-page/upcomming'
import top from '../../../components/frontend/landing-page/top-ten'
import suggestion from '../../../components/frontend/landing-page/suggestion'
import detail from '../../../components/frontend/landing-page/detail'
import trending from '../../../components/frontend/landing-page/trending'
import thriller from '../../../components/frontend/landing-page/thriller'
export default {
  layout: 'FrontendLayout',
  components: {
    Home,
    favourite,
    upcomming,
    top,
    suggestion,
    detail,
    trending,
    thriller
  },
  mounted () {
    setTimeout(function () {
      core.index()
    }, 1000)
  }
}
</script>
