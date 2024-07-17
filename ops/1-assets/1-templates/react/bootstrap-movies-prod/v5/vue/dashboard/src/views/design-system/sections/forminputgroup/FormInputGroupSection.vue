s
<template>
  <article id="formInputGroup">
    <card-lable lablename="Input Group" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Inputgroup"></card-lable>
    <section-components preview-component="formInputGroup-preview" code-component="formInputGroup-code" targetpreview="formInputGroup-preview" targetcode="formInputGroup-code"></section-components>
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
