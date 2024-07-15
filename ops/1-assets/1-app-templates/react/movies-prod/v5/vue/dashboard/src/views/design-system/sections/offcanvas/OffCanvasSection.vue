<template>
  <article id="offCanvas">
    <card-lable lablename="OffCanvas" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Offcanvas"></card-lable>
    <section-components preview-component="offCanvas-preview" code-component="offCanvas-code" targetpreview="offCanvas-preview" targetcode="offCanvas-code"></section-components>
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
