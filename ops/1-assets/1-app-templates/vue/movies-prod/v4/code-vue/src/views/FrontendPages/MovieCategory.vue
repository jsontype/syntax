<template>
  <div>
    <Popular/>
    <International/>
    <Recommend/>
  </div>
</template>
<script>
import { core } from '../../config/pluginInit'
import Popular from './MovieCategoryPage/PopularShow'
import International from './MovieCategoryPage/InternationalShow'
import Recommend from './MovieCategoryPage/Recommend'
export default {
  name: 'MovieCategory',
  components: {
    Popular,
    International,
    Recommend
  },
  mounted () {
    core.index()
  }
}
</script>
