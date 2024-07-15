<template>
  <article id="figures">
    <card-lable lablename="Figures" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Figures"></card-lable>
    <section-components preview-component="figures-preview" code-component="figures-code" targetpreview="figures-preview" targetcode="figures-code"></section-components>
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
