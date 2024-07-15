<template>
  <article id="formFilledInput">
    <card-lable lablename="Filled Input" lablelink="#"></card-lable>
    <section-components preview-component="formFilledInput-preview" code-component="formFilledInput-code" targetpreview="formFilledInput-preview" targetcode="formFilledInput-code"></section-components>
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
