<template>
  <div class="bd-example">
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <b-button-group class="me-2 mt-2" role="group" aria-label="First group">
        <b-button variant="secondary">1</b-button>
        <b-button variant="secondary">2</b-button>
        <b-button variant="secondary">3</b-button>
        <b-button variant="secondary">4</b-button>
      </b-button-group>
      <b-button-group class="me-2 mt-2" role="group" aria-label="Second group">
        <b-button variant="secondary">5</b-button>
        <b-button variant="secondary">6</b-button>
        <b-button variant="secondary">7</b-button>
      </b-button-group>
      <b-button-group class="mt-2" role="group" aria-label="Third group">
        <b-button class="secondary">8</b-button>
      </b-button-group>
    </div>
  </div>
  <div class="bd-example">
    <b-button-group role="group" aria-label="Basic example">
      <b-button variant="primary">Home</b-button>
      <b-button variant="outline-primary">Profile</b-button>
      <b-button variant="outline-primary">Message</b-button>
    </b-button-group>
  </div>
  <div class="bd-example">
    <b-button-group vertical>
      <b-button variant="primary">Home</b-button>
      <b-button variant="outline-primary">Profile</b-button>
      <b-button variant="outline-primary">Message</b-button>
    </b-button-group>
  </div>
  <div class="bd-example">
    <div class="btn-group iq-qty-btn me-4" data-qty="btn" role="group">
      <button type="button" class="btn btn-sm btn-outline-primary iq-quantity-minus" @click="newValue -= 1">
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
          <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
        </svg>
      </button>
      <input v-model="newValue" type="text" class="btn btn-sm btn-outline-primary input-display" data-qty="input" title="Qty" readonly="" />
      <button type="button" class="btn btn-sm btn-outline-primary iq-quantity-plus" @click="newValue += 1">
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
          <path d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z" fill="currentColor"></path>
        </svg>
      </button>
    </div>
    <div class="btn-group iq-qty-btn me-4" data-qty="btn" role="group">
      <button type="button" class="btn btn-sm btn-outline-secondary iq-quantity-minus" @click="newValue1 -= 1">
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
          <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
        </svg>
      </button>
      <input v-model="newValue1" type="text" class="btn btn-sm btn-outline-secondary input-display" data-qty="input" title="Qty" readonly="" />
      <button type="button" class="btn btn-sm btn-outline-secondary iq-quantity-plus" @click="newValue1 += 1">
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
          <path d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z" fill="currentColor"></path>
        </svg>
      </button>
    </div>
    <div class="btn-group iq-qty-btn" data-qty="btn" role="group">
      <button type="button" class="btn btn-sm btn-outline-light iq-quantity-minus" @click="newValue2 -= 1">
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
          <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
        </svg>
      </button>
      <input v-model="newValue2" type="text" class="btn btn-sm btn-outline-light input-display" data-qty="input" title="Qty" readonly="" />
      <button type="button" class="btn btn-sm btn-outline-light iq-quantity-plus" @click="newValue2 += 1">
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
          <path d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z" fill="currentColor"></path>
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import { ref, watch } from 'vue';
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const newValue = ref(props.modelValue);
    const newValue1 = ref(props.modelValue);
    const newValue2 = ref(props.modelValue);
    watch(newValue, newValue1, newValue2, () => {
      emit('update:modelValue', newValue.value);
      emit('update:modelValue', newValue1.value);
      emit('update:modelValue', newValue2.value);
    });
    return {
      newValue,
      newValue1,
      newValue2,
    };
  },
};
</script>
