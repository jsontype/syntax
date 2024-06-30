<template>
  <div class="d-flex align-items-center justify-content-between">
    <h6 :class="` mb-0`">
      {{ title }} <span :class="`text-${variant}`">{{ task }}</span>
    </h6>
    <b-dropdown id="dropdown-3" text="" class="dropdown" variant="link text-body p-0" toggle-class="text-decoration-none" no-caret dropleft>
      <template #button-content>
        <svg width="22" viewBox="0 0 22 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z" fill="currentColor"></path>
        </svg>
      </template>
      <b-dropdown-item> <icon-component type="dual-tone" icon-name="document-plus" :size="20"></icon-component> Duplicate </b-dropdown-item>
      <b-dropdown-item> <icon-component type="dual-tone" icon-name="pencil" :size="20"></icon-component> Rename </b-dropdown-item>
      <b-dropdown-item> <icon-component type="dual-tone" icon-name="trash" :size="20"></icon-component> Delete </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: '',
    },
    task: {
      type: Number,
      default: 0,
    },
  },
};
</script>
