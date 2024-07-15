<template>
  <div class="form-group px-3">
    <label v-if="label" class="form-label" :for="label">
      <strong>{{ label }}</strong> <span v-if="isRequired" class="text-danger">*</span>:
    </label>
    <Multiselect v-if="isMulti == false" v-model="selectedValue" :placeholder="placeholder" :close-on-select="true" :searchable="true" :create-option="false" :options="options" @input="updateModelValue" />

    <Multiselect v-else v-model="selectedValue" :placeholder="placeholder" mode="tags" :close-on-select="false" :searchable="true" :create-option="createNew" :options="options" @input="updateModelValue" />

    <span class="text-danger">{{ error }}</span>
  </div>
</template>

<script setup>
import Multiselect from '@vueform/multiselect';

defineProps({
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  options: { type: Array, default: () => [] },
  isRequired: { type: Boolean, default: false },
  modelValue: { type: Array, default: () => [] },
  error: { type: String, default: '' },
  isMulti: { type: Boolean, default: true },
  createNew: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue']);

const updateModelValue = (selectedValues) => emit('update:modelValue', selectedValues);
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
