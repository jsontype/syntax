<template>
  <div :id="id" :class="'tab-pane fade'+' '+ active ? 'show active' : ''" :role="role" :aria-labelledby="ariaLabelledBy">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'TabContentItem',
  props: {
    id: { type: String, default: '' },
    active: { type: Boolean, default: false },
    role: { type: String, default: 'tabpanel' },
    ariaLabelledBy: { type: String, default: '' }
  }
}
</script>
