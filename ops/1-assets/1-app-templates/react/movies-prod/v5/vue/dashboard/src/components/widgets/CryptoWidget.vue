<template>
  <b-card>
    <div class="d-flex justify-content-between mb-2 align-items-center">
      <div class="d-flex align-items-center gap-2">
        <slot name="headerTitle"></slot>
      </div>
      <a id="dropdownMenuButton25" href="#" class="text-gray" data-bs-toggle="dropdown" aria-expanded="false">
        <b-dropdown no-caret variant="link text-gray p-0">
          <template #button-content>
            <icon-component type="solid" icon-name="three-dot" :size="25"></icon-component>
          </template>
          <b-dropdown-item>This Year</b-dropdown-item>
          <b-dropdown-item>This Month</b-dropdown-item>
          <b-dropdown-item>This Week</b-dropdown-item>
        </b-dropdown>
      </a>
    </div>
    <div class="d-flex align-items-center">
      <div>
        <h3>${{ title }}</h3>
        <small v-if="incrementText !== null" class="text-success">+ {{ incrementText }}%</small>
        <small v-if="decrementText !== null" class="text-danger">+ {{ decrementText }}%</small>
        <small class="ms-2">{{ subTitle }}</small>
      </div>
      <slot name="chart"></slot>
    </div>
    <slot></slot>
  </b-card>
</template>
<script>
export default {
  name: 'CryptoChart',
  props: {
    title: {
      type: String,
      default: '0',
    },
    subTitle: {
      type: String,
      default: '',
    },
    incrementText: {
      type: String,
      default: null,
    },
    decrementText: {
      type: String,
      default: null,
    },
  },
};
</script>
