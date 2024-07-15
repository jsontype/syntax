<template>
  <article id="card">
    <card-lable lablename="card" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Cards"></card-lable>
    <section-components preview-component="card-preview" code-component="card-code" targetpreview="card-preview" targetcode="card-code"></section-components>
  </article>
</template>
<script>
import SectionComponents from '../../components/SectionComponents.vue';
import CardLable from '../../components/CardLable.vue';
import { onMounted } from 'vue';
const prism = () => import('@/plugins/prism.mini.js');

export default {
  components: {
    SectionComponents,
    CardLable,
  },
  setup() {
    onMounted(() => {
      prism();
    });
  },
};
</script>
