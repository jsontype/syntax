<template>
  <div :class="`iq-progress-bar ${verticle ? 'progress-bar-vertical iq-bg-'+color : ''}`">
    <span :class="`bg-${color}`" ref="progress" :data-value="value"></span>
  </div>
</template>
<script>
import { core } from '../../../config/pluginInit'
export default {
  name: 'Progressbar',
  props: {
    value: { type: Number, default: 0 },
    color: { type: String, default: 'primary' },
    verticle: { type: Boolean, default: false }
  },
  watch: {
    value: function () {
      this.init()
    }
  },
  mounted () {
    this.$nextTick()
    setTimeout(() => {
      this.init()
    }, 100)
  },
  methods: {
    init () {
      if (this.verticle) {
        core.progressInitVerticle(this.$refs.progress)
      } else {
        core.progressInit(this.$refs.progress)
      }
    }
  }
}
</script>
