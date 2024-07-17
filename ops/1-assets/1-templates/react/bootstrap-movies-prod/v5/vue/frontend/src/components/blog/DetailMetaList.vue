<template>
  <div class="widget-area">
    <div id="search-2" class="widget widget_search">
      <form method="get" class="search-form" action="#" autocomplete="off">
        <div class="block-search_inside-wrapper position-relative d-flex">
          <input type="search" class="form-control" :placeholder="$t('blogs.search')" value="" name="s" />
          <button type="submit" class="block-search_button">
            <svg class="icon-16" width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
              <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>

    <RecentPost :recents="blogRecent"></RecentPost>
    <CategoriesWidget></CategoriesWidget>
    <TagsWidget :tags="blogTags"></TagsWidget>
    <FollowUs></FollowUs>
    <ProductWidget> </ProductWidget>
  </div>
</template>
<script setup>
import TagsWidget from '../../components/blog/sidebar/TagsWidget.vue';
import CategoriesWidget from '../../components/blog/sidebar/CategoriesWidget.vue';
import FollowUs from './sidebar/FollowUs.vue';
import RecentPost from '../../components/blog/sidebar/RecentPost.vue';
import ProductWidget from '../../components/blog/sidebar/ProductWidget.vue';
import { blogTags, blogRecent } from '../../StaticData/blogs';
</script>
