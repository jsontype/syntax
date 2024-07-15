<template>
  <div :class="className">
    <input
:id="id" type="radio" :class="inputClass" :value="value" :name="btnName" autoComplete="off"
      :checked="radioCheckValue(defaultChecked, value)" @change="$emit('onChange', value, btnName)" />
    <label v-b-tooltip.hover.top="tooltip" :class="labelClass" :for="id">
      <slot></slot>
    </label>
  </div>
</template>
<script>
export default {
  name: 'RadioInput',
  props: {
    className: {
      type: String,
      default: '',
    },
    inputClass: {
      type: String,
      default: '',
    },
    btnName: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    labelTitle: {
      type: String,
      default: '',
    },
    labelClass: {
      type: String,
      default: '',
    },
    imgComponent: {
      type: Boolean,
      default: false,
    },
    defaultChecked: {
      type: String,
      default: '',
    },
    tooltip: {
      type: String,
      default: '',
    },
  },
  emits: ['onChange'],
  setup() {
    const radioCheckValue = (selector, value) => {
      if (selector === value) {
        return true;
      }
      return false;
    };
    return { radioCheckValue };
  },
};
</script>
