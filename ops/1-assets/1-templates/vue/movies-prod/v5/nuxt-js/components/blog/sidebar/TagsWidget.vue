<template>
  <div id="tag_cloud-2" class="widget">
    <h5 class="widget-title position-relative">{{ $t("form.tags") }}</h5>

    <ul class="p-0 m-0 list-unstyled gap-2 widget_tags">
      <li v-for="tag in props.tags" :key="tag">
        <nuxt-link
          :to="{ name: 'blogs-filter-type', params: { type: 'tags' } }"
          class="position-relative"
        >
          {{ $t(tag.name) }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  tags: { type: Array, default: () => [] },
});
</script>
