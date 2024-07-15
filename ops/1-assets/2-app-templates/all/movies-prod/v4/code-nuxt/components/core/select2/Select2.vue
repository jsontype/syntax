<template>
  <select :options="options" class="select2">
    <slot></slot>
  </select>
</template>
<script>
import $ from 'jquery'
if (typeof window !== 'undefined') {
  require('select2')
}
export default {
  props: ['options', 'value'],
  mounted () {
    let vm = this
    $(this.$el)
    // init select2
      .select2({ data: this.options })
      .val(this.value)
      .trigger('change')

    // emit event on change.
      .on('change', function () {
        vm.$emit('input', this.value)
      })
  },
  watch: {
    value (value) {
      // update value
      $(this.$el)
        .val(value)
        .trigger('change')
    },
    options (options) {
      // update options
      $(this.$el)
        .empty()
        .select2({ data: options })
    }
  },
  destroyed () {
    $(this.$el).off().select2('destroy')
  }
}
</script>
