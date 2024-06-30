<template>
  <div class="section-padding">
    <div class="container">
      <b-row>
        <b-col v-for="data in blogsGrid" :key="data" :lg="column" sm="12">
          <CardBlogGrid :title="$t(data.title)" :slug="data.slug" :thumbnail="data.thumbnail" :short-description="data.shortDescription" :username="data.username" :date="data.blogDate" :categories="$t(data.categories)"></CardBlogGrid>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import CardBlogGrid from '../../components/cards/CardBlogGrid.vue';
import { blogsGrid } from '../../StaticData/blogs';
import { useRoute } from 'vue-router';
const column = ref(12);
const route = useRoute();
const title = ref();
const changeGridColumn = (gridType) => {
  switch (gridType) {
    case 'one-column':
      column.value = 12;
      title.value = 'header.1_column_blog';
      break;
    case 'two-column':
      column.value = 6;
      title.value = 'header.2_column_blog';
      break;
    case 'three-column':
      column.value = 4;
      title.value = 'header.3_column_blog';
      break;
    case 'four-column':
      column.value = 3;
      title.value = 'header.4_column_blog';
      break;

    default:
      break;
  }
};

changeGridColumn(route.params.grid);

watch(
  () => route.params.grid,
  (gridType) => {
    changeGridColumn(gridType);
  }
);
</script>
