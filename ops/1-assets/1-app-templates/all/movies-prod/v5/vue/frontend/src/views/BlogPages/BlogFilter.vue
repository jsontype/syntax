<template>
  <div class="section-padding">
    <div class="container">
      <b-row>
        <b-col lg="8" sm="12">
          <div v-for="data in list" :key="data">
            <card-blog-list
:title="$t(data.title)" :slug="data.slug" :thumbnail="data.thumbnail" :tags="data.tags"
              :username="data.username" :description="data.description" :date="data.blogDate"
              :categories="data.categories"></card-blog-list>
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
import { dateWiseBlogs, categoryWiseBlogs, tagsWiseBlogs } from '../../StaticData/blogs';

import DetailMetaList from '../../components/blog/DetailMetaList.vue';

import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();

//to get the type to make if and else working
const type = ref(route.params.type);

//for date wise blogs
const date = ref(route.params.date);

let list;

switch (type.value) {
  case 'date':
    list = dateWiseBlogs(date.value);
    break;
  case 'category':
    list = categoryWiseBlogs(date.value);
    break;
  case 'tag':
    list = tagsWiseBlogs(date.value);
    break;
}
</script>
