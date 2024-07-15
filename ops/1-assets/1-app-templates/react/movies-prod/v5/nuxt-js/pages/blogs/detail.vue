<template>
  <div class="section-padding">
    <div class="container">
      <b-row>
        <b-col xl="8">
          <div class="iq-blog-detail">
            <a class="blog-image d-block overflow-hidden">
              <img
                class="img-fluid w-100"
                :src="blog.thumbnail"
                loading="lazy"
                alt=""
              />
            </a>
            <div class="iq-blog-box pt-4">
              <div class="iq-blog-meta d-flex mb-3">
                <ul class="iq-blogtag list-inline">
                  <li class="border-gredient-left">
                    <nuxt-link rel="bookmark" :to="{ name: 'blogs' }">
                      <i class="far fa-user me-1" aria-hidden="true"></i
                      >{{ $t(blog.username) }}
                    </nuxt-link>
                  </li>
                </ul>
                <ul class="list-inline mb-0 ms-2">
                  <li class="border-gredient-left">
                    <nuxt-link rel="bookmark" :to="{ name: 'blogs' }">
                      <i class="far fa-calendar-alt me-1" aria-hidden="true"></i
                      >{{ blog.blogDate }}
                    </nuxt-link>
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
//components
import DetailMetaList from "../../components/blog/DetailMetaList.vue";
import FormWidget from "../../components/blog/comments/FormWidget.vue";

//data
import { filterBlog } from "../../StaticData/blogs";

//custom hook
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("The Most Anticipated Movies");

const slug = "the-most-anticipated-movies";
const blog = filterBlog(slug);
</script>
