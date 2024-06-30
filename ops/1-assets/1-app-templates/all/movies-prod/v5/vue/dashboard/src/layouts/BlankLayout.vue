<template>
  <div>
    <Loader />
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>
<script>
import Loader from '../components/core/loader/Loader';
import { core } from '../config/pluginInit';
export default {
  name: 'BlankLayout',
  components: {
    Loader,
  },
  mounted() {
    core.mainIndex();
  },
};
</script>
<style lang="scss">
.modal-backdrop {
  opacity: 0.5;
}
</style>
