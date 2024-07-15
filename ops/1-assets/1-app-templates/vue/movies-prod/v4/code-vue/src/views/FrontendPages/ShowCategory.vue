<template>
  <div>
    <Popular/>
    <International/>
    <Recommend/>
  </div>
</template>
<script>
import { core } from '../../config/pluginInit'
import Popular from './CategoryPage/PopularShow'
import International from './CategoryPage/InternationalShow'
import Recommend from './CategoryPage/Recommend'
export default {
  name: 'ShowCategory',
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
