<template>
  <router-view />
</template>
<script>
import { onMounted } from 'vue'

// Pinia Store
import { useSetting } from './store/pinia'

export default {
  name: 'App',
  setup(){
    const store = useSetting()
    onMounted(() => {
      store.setSetting()
    })
  }
};
</script>
<style lang="scss">
// swiper css
@import 'swiper/css';
@import 'swiper/css/navigation';
@import 'line-awesome/dist/line-awesome/css/line-awesome.css';
</style>
