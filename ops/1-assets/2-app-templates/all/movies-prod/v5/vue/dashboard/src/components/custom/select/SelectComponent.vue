<template>
  <vue-select v-model="newValue" :options="options" :clear-on-select="false" label="name" track-by="value" :placeholder="placeholder" :searchable="true" :taggable="taggable">
    <slot></slot>
  </vue-select>
</template>

<script>
import { ref, watch } from 'vue';
import VueSelect from '@vueform/multiselect';
export default {
  components: {
    VueSelect,
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Select',
    },
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    taggable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const newValue = ref(props.modelValue);
    watch(newValue, () => {
      emit('update:modelValue', newValue.value);
    });
    return {
      newValue,
    };
  },
};
</script>

<style>
@import '@vueform/multiselect/themes/default.css';
.multiselect-option.is-selected {
  background: var(--bs-primary) !important;
}
.multiselect-option.is-selected.is-pointed {
  background: var(--bs-primary) !important;
}
.multiselect.is-active {
  box-shadow: unset !important;
}
.multiselect.is-open {
  border-radius: unset;
}
.multiselect-option.is-pointed {
  background: var(--bs-primary);
  color: white;
}
.multiselect-tag {
  background: var(--bs-primary);
}
.multiselect-tag-remove-icon {
  color: white !important;
}
.multiselect {
  display: flex;
}
.multiselect-wrapper {
  min-height: unset;
}
</style>
