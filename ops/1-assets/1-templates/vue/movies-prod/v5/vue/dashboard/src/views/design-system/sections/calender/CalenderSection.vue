ss
<template>
  <article id="calender">
    <card-lable lablename="Calender" lablelink="https://templates.iqonic.design/hope-ui/pro/documentation/vue/Flatpickr"></card-lable>
    <section-components preview-component="calender-preview" code-component="calender-code" targetpreview="calender-preview" targetcode="calender-code"></section-components>
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
