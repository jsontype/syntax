<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'AuthLayout',
  components: {},
  data() {
    return {
      options: {
        slidesPerView: 1,
        loop: true,
      },
    };
  },
  // mounted() {
  //   document.querySelector('html').classList.add('dashboard-style');
  // },
  // unmounted() {
  //   document.querySelector('html').classList.remove('dashboard-style');
  // },
};
</script>
<style lang="scss">
/*---------------------------------------------------------------------
Font
-----------------------------------------------------------------------*/
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap');
</style>
