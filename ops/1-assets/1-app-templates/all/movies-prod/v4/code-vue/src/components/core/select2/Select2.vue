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
  name: 'select2',
  props: ['options', 'value'],
  mounted: function () {
    var vm = this
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
    value: function (value) {
      // update value
      $(this.$el)
        .val(value)
        .trigger('change')
    },
    options: function (options) {
      // update options
      $(this.$el)
        .empty()
        .select2({ data: options })
    }
  },
  destroyed: function () {
    $(this.$el).off().select2('destroy')
  }
}
</script>
