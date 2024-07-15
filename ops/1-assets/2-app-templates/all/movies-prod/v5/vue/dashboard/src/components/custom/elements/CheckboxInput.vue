<template>
  <div :class="className">
    <input :id="id" type="checkbox" :value="value" class="btn-check" :name="btnName" autoComplete="off" :checked="checkboxCheckValue(defaultChecked, value)" @change="$emit('onChange', onCheckboxUpdate(defaultChecked, value), btnName)" />
    <label :class="`btn btn-border btn-setting-panel d-block overflow-hidden  ${labelClass}`" :for="id">
      <slot />
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
      type: Array,
      default: () => [],
    },
  },
  emits: ['onChange'],
  setup() {
    const checkboxCheckValue = (selector, value) => {
      if (selector.includes(value)) {
        return true;
      }
      return false;
    };

    const onCheckboxUpdate = (defaultChecked, value) => {
      if (checkboxCheckValue(defaultChecked, value)) {
        return [...defaultChecked.filter((item) => item !== value)];
      } else {
        return [...defaultChecked, value];
      }
    };
    return { checkboxCheckValue, onCheckboxUpdate };
  },
};
</script>
