<template>
  <article id="Modal">
    <card-lable lablename="Modal" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Modal"></card-lable>
    <section-components preview-component="Modal-preview" code-component="Modal-code" targetpreview="Modal-preview" targetcode="Modal-code"></section-components>
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
