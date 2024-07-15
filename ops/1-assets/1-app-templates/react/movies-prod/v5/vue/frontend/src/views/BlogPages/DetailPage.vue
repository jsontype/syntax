<template>
  <div class="section-padding">
    <div class="container">
      <b-row>
        <b-col xl="8">
          <div class="iq-blog-detail">
            <a class="blog-image d-block overflow-hidden">
              <img class="img-fluid w-100" :src="blog.thumbnail" loading="lazy" alt="" />
            </a>
            <div class="iq-blog-box pt-4">
              <div class="iq-blog-meta d-flex mb-3">
                <ul class="iq-blogtag list-inline">
                  <li class="border-gredient-left">
                    <router-link rel="bookmark" :to="{ name: 'landing-page.blogs' }"> <i class="far fa-user me-1" aria-hidden="true"></i>{{ blog.username }} </router-link>
                  </li>
                </ul>
                <ul class="iq-blogtag list-inline">
                  <li class="border-gredient-left">
                    <router-link rel="bookmark" :to="{ name: 'landing-page.blogs' }"> <i class="far fa-calendar-alt me-1" aria-hidden="true"></i>{{ blog.blogDate }} </router-link>
                  </li>
                </ul>
              </div>
              <div class="blog-content">
                <div v-html="blog.longDescription"></div>
              </div>
              <form-widget></form-widget>
            </div>
          </div>
        </b-col>
        <b-col xl="4" mt="5" mt-xl="0">
          <detail-meta-list></detail-meta-list>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script setup>
import DetailMetaList from '../../components/blog/DetailMetaList.vue'; //this page is not avialable
import FormWidget from '../../components/blog/comments/FormWidget.vue';
import { filterBlog } from '../../StaticData/blogs';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const slug = computed(() => route.params.slug);
const blog = computed(() => filterBlog(slug.value));
</script>
