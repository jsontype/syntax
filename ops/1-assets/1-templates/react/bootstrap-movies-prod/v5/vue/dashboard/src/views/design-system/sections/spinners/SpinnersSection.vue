<template>
  <article id="spinners">
    <card-lable lablename="Spinners" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Spinner"></card-lable>
    <section-components preview-component="spinners-preview" code-component="spinners-code" targetpreview="spinners-preview" targetcode="spinners-code"></section-components>
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
