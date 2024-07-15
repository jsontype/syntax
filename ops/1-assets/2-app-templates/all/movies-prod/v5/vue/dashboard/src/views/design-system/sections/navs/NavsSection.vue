<template>
  <article id="navs">
    <card-lable lablename="Navs" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Navsandtabs"></card-lable>
    <section-components preview-component="navs-preview" code-component="navs-code" targetpreview="navs-preview" targetcode="navs-code"></section-components>
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
