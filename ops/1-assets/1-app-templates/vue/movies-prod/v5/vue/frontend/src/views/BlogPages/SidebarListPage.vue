<template>
  <div class="section-padding">
    <div class="container">
      <b-row>
        <b-col lg="4" sm="12">
          <DetailMetaList></DetailMetaList>
        </b-col>
        <b-col lg="8" sm="12">
          <div v-for="data in blogsGrid" :key="data">
            <CardBlogList :title="$t(data.title)" :slug="data.slug" :thumbnail="data.thumbnail" :tags="data.tags" :username="data.username" :description="data.description" :date="data.blogDate" :categories="data.categories"></CardBlogList>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script setup>
// import GridList from './GridList.vue';
import CardBlogList from '../../components/cards/CardBlogList.vue';
import { blogsGrid } from '../../StaticData/blogs';
import DetailMetaList from '../../components/blog/DetailMetaList.vue';
</script>
