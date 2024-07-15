<template>
  <div>
    <MiniFooter>
      <template #left>
        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
        <li class="list-inline-item"><a href="#">Terms of Use</a></li>
      </template>
      <template #right> </template>
    </MiniFooter>
  </div>
</template>
<script>
import MiniFooter from '../../components/core/footer/MiniFooter.vue';
export default {
  name: 'LayoutFooter',
  components: {
    MiniFooter,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
