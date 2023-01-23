<template>
  <div class="app">
    현재 시각 : {{ timeNow }}
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'App',
  data() {
    return {
      timeNow: moment().format('YYYY-MM-DD'),
    }
  },
}
</script>

<style>
.app {
  font-size: 20px;
}
</style>
