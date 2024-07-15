<template>
  <div class="section-padding">
    <div class="container">
      <b-row>
        <b-col lg="8" sm="12">
          <div v-for="data in blogs" :key="data">
            <card-blog-list
              :title="$t(data.title)"
              :slug="data.slug"
              :thumbnail="data.thumbnail"
              :tags="data.tags"
              :username="data.username"
              :description="data.description"
              :date="data.blogDate"
              :categories="data.categories"
            ></card-blog-list>
          </div>
        </b-col>
        <b-col lg="4" sm="12">
          <detail-meta-list></detail-meta-list>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script setup>
import { onUnmounted } from "vue";

//components
import CardBlogList from "../../components/cards/CardBlogList.vue";
import DetailMetaList from "../../components/blog/DetailMetaList.vue";

//static data
import { blogs } from "../../StaticData/blogs";

//store
import { useStremit } from "~/store/streamit";
const store = useStremit();

//route
const route = useRoute();
const params = computed(() => route.params.type);

const changeTitle = (gridType) => {
  switch (gridType) {
    case "author":
      store.breadcrumbSet({ show: true, name: "Author: Goldenmace" });
      break;
    case "date":
      store.breadcrumbSet({ show: true, name: "Day: September 23, 2022" });
      break;
    case "category":
      store.breadcrumbSet({ show: true, name: "Drama" });
      break;
    case "tags":
      store.breadcrumbSet({ show: true, name: "Comedy" });
      break;

    default:
      break;
  }
};

onUnmounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});

changeTitle(params.value);

watch(params, (value) => {
  changeTitle(value);
});
</script>
