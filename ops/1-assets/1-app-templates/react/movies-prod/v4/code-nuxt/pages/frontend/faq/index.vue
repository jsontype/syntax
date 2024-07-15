<template>
  <div>
    <breadcrumb name="Faq" />
    <FaqList />
  </div>
</template>
<script>
import breadcrumb from '../../../components/frontend/breadcrumb/breadcrumb.vue'
import FaqList from '../../../components/frontend/Faq/FaqList'
export default {
  name: 'Faq',
  layout: 'FrontendLayout',
  components: {
    FaqList,
    breadcrumb
  }
}
</script>
