<template>
  <div class="tab-content" :id="id">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'tab-content',
  props: {
    id: { type: String, default: 'myTabContent' }
  }
}
</script>
