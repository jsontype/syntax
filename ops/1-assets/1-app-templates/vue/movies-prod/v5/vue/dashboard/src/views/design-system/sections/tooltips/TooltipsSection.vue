<template>
  <article id="tooltips">
    <card-lable lablename="Tooltips" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Tooltips"></card-lable>
    <section-components preview-component="tooltips-preview" code-component="tooltips-code" targetpreview="tooltips-preview" targetcode="tooltips-code"></section-components>
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
