<template>
  <div class="section-padding">
    <div class="container">
      <b-row>
        <b-col v-for="data in blogsGrid" :key="data" :lg="column" sm="12">
          <CardBlogGrid
            :title="$t(data.title)"
            :slug="data.slug"
            :thumbnail="data.thumbnail"
            :short-description="data.shortDescription"
            :username="$t(data.username)"
            :date="data.blogDate"
            :categories="$t(data.categories)"
          ></CardBlogGrid>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, onMounted } from "vue";

import CardBlogGrid from "../../components/cards/CardBlogGrid.vue";
import { blogsGrid } from "../../StaticData/blogs";
import { useRoute } from "vue-router";
import { useStremit } from "~/store/streamit";
const store = useStremit();

const column = ref(12);

const route = useRoute();

const type = computed(() => route.params.type);

const changeGridColumn = () => {
  switch (type.value) {
    case "one-column":
      column.value = 12;
      store.breadcrumbSet({ show: true, name: "1 column blog" });
      break;
    case "two-column":
      column.value = 6;
      store.breadcrumbSet({ show: true, name: "2 column blog" });
      break;
    case "three-column":
      column.value = 4;
      store.breadcrumbSet({ show: true, name: "3 column blog" });
      break;
    case "four-column":
      column.value = 3;
      store.breadcrumbSet({ show: true, name: "4 column blog" });
      break;

    default:
      break;
  }
};

onUnmounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});

onMounted(() => {
  changeGridColumn();
});

watch(
  type,
  (value) => {
    changeGridColumn();
  },
  { deep: true }
);
</script>
