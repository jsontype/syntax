<template>
  <article id="collapse">
    <card-lable lablename="Collapse" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Collapse"></card-lable>
    <section-components preview-component="collapse-preview" code-component="collapse-code" targetpreview="collapse-preview" targetcode="collapse-code"></section-components>
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
