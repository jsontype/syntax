<template>
  <div class="section-padding">
    <div class="container">
      <b-row>
        <b-col lg="8" sm="12">
          <div v-for="data in blogs" :key="data">
            <card-blog-list :title="$t(data.title)" :slug="data.slug" :thumbnail="data.thumbnail" :tags="data.tags" :username="data.username" :description="data.description" :date="data.blogDate" :categories="data.categories"></card-blog-list>
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
import CardBlogList from '../../components/cards/CardBlogList.vue';
import { blogs } from '../../StaticData/blogs';

import DetailMetaList from '../../components/blog/DetailMetaList.vue';
</script>
