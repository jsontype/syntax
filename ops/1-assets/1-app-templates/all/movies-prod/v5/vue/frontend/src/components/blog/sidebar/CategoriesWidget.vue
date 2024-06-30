<template>
  <div id="categories-2" class="widget widget_categories">
    <h5 class="widget-title position-relative">{{ $t('form.categories') }}</h5>
    <ul class="p-0 m-0 list-unstyled">
      <li v-for="category in props.categories" :key="category" class="text-capitalize">
        <router-link to="/blogs-category" class="position-relative">{{ $t(category) }}</router-link>
        <span class="post_count">(4)</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  categories: {
    type: Array,
    default: () => ['blogs.dramas', 'blogs.history', 'header.movie', 'blogs.movie_trailers', 'home.trailers', 'blogs.tv_comedies', 'blogs.tv_rumors', 'blogs.tv_series'],
  },
});
</script>
