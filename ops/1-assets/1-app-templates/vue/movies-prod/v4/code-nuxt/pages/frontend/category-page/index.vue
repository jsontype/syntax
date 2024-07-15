<template>
  <div>
    <Home />
    <div class="main-content">
      <popularshow />
      <international />
      <recommend />
    </div>
  </div>
</template>

<script>
import { core } from '../../../assets/app/app'
import Home from '../../../components/frontend/category-page/Home'
import popularshow from '../../../components/frontend/category-page/popularshow'
import international from '../../../components/frontend/category-page/internationalshow'
import recommend from '../../../components/frontend/category-page/recommend'
export default {
  layout: 'FrontendLayout',
  components: {
    Home,
    popularshow,
    international,
    recommend
  },
  mounted () {
    setTimeout(function () {
      core.index()
    }, 1000)
  }
}
</script>
