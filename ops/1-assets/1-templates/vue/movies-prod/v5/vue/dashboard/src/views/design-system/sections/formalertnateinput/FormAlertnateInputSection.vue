<template>
  <article id="formAlertnateInput">
    <card-lable lablename="Alertnate Input" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Alternateinput"></card-lable>
    <section-components preview-component="formAlertnateInput-preview" code-component="formAlertnateInput-code" targetpreview="formAlertnateInput-preview" targetcode="formAlertnateInput-code"></section-components>
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
