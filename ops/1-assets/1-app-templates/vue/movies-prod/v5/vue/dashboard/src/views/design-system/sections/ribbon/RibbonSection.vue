<template>
  <article id="ribbon">
    <card-lable lablename="Ribbon" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Ribbion"></card-lable>
    <section-components preview-component="ribbon-preview" code-component="ribbon-code" targetpreview="ribbon-preview" targetcode="ribbon-code"></section-components>
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
