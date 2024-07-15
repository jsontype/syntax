<template>
  <article id="formDisabled">
    <card-lable lablename="Disabled Forms" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Disableforms"></card-lable>
    <section-components preview-component="formDisabled-preview" code-component="formDisabled-code" targetpreview="formDisabled-preview" targetcode="formDisabled-code"></section-components>
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
