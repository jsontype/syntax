<template>
  <div id="categories-2" class="widget widget_categories">
    <h5 class="widget-title position-relative">{{ $t("form.categories") }}</h5>
    <ul class="p-0 m-0 list-unstyled">
      <li
        v-for="category in props.categories"
        :key="category"
        class="text-capitalize"
      >
        <nuxt-link
          :to="{ name: 'blogs-filter-type', params: { type: 'category' } }"
          class="position-relative"
          >{{ $t(category.title) }}</nuxt-link
        >
        <span class="post_count">(4)</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  categories: { type: Array, default: () => [] },
});
</script>
