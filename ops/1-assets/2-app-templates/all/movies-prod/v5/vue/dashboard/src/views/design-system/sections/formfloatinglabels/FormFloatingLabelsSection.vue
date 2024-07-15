<template>
  <article id="formFloatingLabels">
    <card-lable lablename="Floating Labels" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Floatinglable"></card-lable>
    <section-components preview-component="formFloatingLabels-preview" code-component="formFloatingLabels-code" targetpreview="formFloatingLabels-preview" targetcode="formFloatingLabels-code"></section-components>
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
