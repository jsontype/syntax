<template>
  <article id="Accordion" class="pb-5">
    <card-lable lablename="Accordion" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Accordian"></card-lable>
    <section-components preview-component="accordion-preview" code-component="accordion-code" targetpreview="accordion-preview" targetcode="accordion-code" class="iq-doc-head"></section-components>
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
