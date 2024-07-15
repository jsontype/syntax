<template>
  <article id="formValidation">
    <card-lable lablename="Validation" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Validation"></card-lable>
    <section-components preview-component="formValidation-preview" code-component="formValidation-code" targetpreview="formValidation-preview" targetcode="formValidation-code"></section-components>
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
