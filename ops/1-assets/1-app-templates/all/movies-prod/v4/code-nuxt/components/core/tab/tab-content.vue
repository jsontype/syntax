<template>
  <div :id="id" class="tab-content">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'TabContent',
  props: {
    id: { type: String, default: 'myTabContent' }
  }
}
</script>
