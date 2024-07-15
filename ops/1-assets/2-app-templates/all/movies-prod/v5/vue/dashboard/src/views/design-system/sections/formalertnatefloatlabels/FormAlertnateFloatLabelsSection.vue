<template>
  <article id="formAlertnateFloatLabels">
    <card-lable lablename="Alertnate FloatLabels" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Alternatefloatlable"></card-lable>
    <section-components preview-component="formAlertnateFloatLabels-preview" code-component="formAlertnateFloatLabels-code" targetpreview="formAlertnateFloatLabels-preview" targetcode="formAlertnateFloatLabels-code"></section-components>
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
