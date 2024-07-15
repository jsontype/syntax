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
              :username="$t(data.username)"
              :description="$t(data.description)"
              :date="data.blogDate"
              :categories="$t(data.categories)"
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
//components
import CardBlogList from "../../components/cards/CardBlogList.vue";
import DetailMetaList from "~/components/blog/DetailMetaList.vue";

//static data
import { blogs } from "../../StaticData/blogs";

//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("Blog Listing");
</script>
