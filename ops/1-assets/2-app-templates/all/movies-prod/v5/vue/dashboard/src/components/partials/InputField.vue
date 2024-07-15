<template>
  <div class="form-group px-3">
    <label class="form-label flex-grow-1" :for="label">
      <strong>{{ label }}</strong> <span v-if="isRequired" class="text-danger">*</span>:</label
    >

    <!-- textarea input -->
    <textarea v-if="type == 'textarea'" :id="label" class="form-control" :value="modelValue" :placeholder="placeholder" @input="updateModelValue"></textarea>

    <!-- toggle switch -->
    <div v-else-if="type == 'toggle'" class="d-flex justify-content-between">
      <div class="form-check form-switch ms-2">
        <input :id="label" class="form-check-input" type="checkbox" checked />
      </div>
    </div>

    <!-- dropdown menu -->
    <select v-else-if="type == 'select'" :id="label" class="form-select">
      <!-- <option value="0">select a {{ label }}</option> -->
      <option v-for="(option, index) in options" :key="index" :value="index">{{ option }}</option>
    </select>

    <!-- date -->

    <flat-pickr v-else-if="type == 'date'" v-model="date" class="form-control flatpickr-input" :placeholder="placeholder" />

    <!-- simple input -->
    <input v-else :id="label" :type="type" :class="`form-control ${className}`" :value="modelValue" :placeholder="placeholder" :min="min" :multiple="isMulti" @input="updateModelValue" />
    <span class="text-danger">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

const date = ref(null);

defineProps({
  isLabel: { type: Boolean, default: true },
  isRequired: { type: Boolean, default: false },
  label: { type: String, default: '' },
  className: { type: String, default: '' },
  type: { type: String, default: 'text' },
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  error: { type: String, default: '' },
  options: { type: Array, default: () => [''] },
  isMulti: { type: Boolean, default: false },
  min: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue']);

const updateModelValue = (e) => emit('update:modelValue', e.target.value);
</script>
