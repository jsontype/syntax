<template>
  <div class="section-padding">
    <div class="container">
      <b-row>
        <b-col lg="8" sm="12" :class="order">
          <div v-for="data in blogsGrid" :key="data">
            <CardBlogList
              :title="$t(data.title)"
              :slug="data.slug"
              :thumbnail="data.thumbnail"
              :tags="data.tags"
              :username="$t(data.username)"
              :description="data.description"
              :date="data.blogDate"
              :categories="$t(data.categories)"
            ></CardBlogList>
          </div>
        </b-col>
        <b-col lg="4" sm="12">
          <DetailMetaList></DetailMetaList>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script setup>
import { watch, computed, ref } from "vue";

import { onUnmounted, onMounted } from "vue";
import { useStremit } from "~/store/streamit";
import { useRoute } from "vue-router";
import CardBlogList from "../../components/cards/CardBlogList.vue";
import { blogsGrid } from "../../StaticData/blogs";
import DetailMetaList from "../../components/blog/DetailMetaList.vue";
const route = useRoute();

const type = computed(() => route.params.type);
const order = ref("");
//breadcrumb
const store = useStremit();
const checkType = () => {
  switch (type.value) {
    case "left":
      order.value = "order-1";
      store.breadcrumbSet({ show: true, name: "Left Sidebar" });
      break;
    case "right":
      order.value = "";
      store.breadcrumbSet({ show: true, name: "Right Sidebar" });
      break;
    default:
      break;
  }
};
watch(
  type,
  () => {
    checkType();
  },
  { deep: true }
);
onMounted(() => {
  checkType();
});
onUnmounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});
</script>
