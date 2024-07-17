<template>
  <article>
    <div class="iq-blog-box">
      <div class="iq-blog-image clearfix">
        <nuxt-link :to="{ name: 'blogs-detail' }">
          <img
            :src="props.thumbnail"
            alt=""
            class="img-fluid w-100"
            loading="lazy"
          />
        </nuxt-link>
      </div>
      <div class="iq-blog-detail">
        <div class="iq-blog-meta d-flex mb-3">
          <ul class="list-inline mb-0">
            <li class="border-gredient-left">
              <nuxt-link
                :to="{ name: 'blogs-filter-type', params: { type: 'author' } }"
                class=""
                ><i class="fa fa-user-o me-1" aria-hidden="true"></i
                >{{ props.username }}</nuxt-link
              >
            </li>
          </ul>
          <ul class="iq-blogtag list-inline">
            <li class="border-gredient-left">
              <a href="#" rel="bookmark">
                <time datetime="2019-02-02T12:46:15+00:00">{{
                  props.date
                }}</time>
              </a>
            </li>
          </ul>
        </div>
        <nuxt-link :to="{ name: 'blogs-detail' }">
          <h3 class="mb-3 line-count-1 blog-heading">{{ props.title }}</h3>
        </nuxt-link>
        <p class="line-count-2">{{ props.description }}</p>
        <div class="iq-button">
          <nuxt-link
            class="btn text-uppercase position-relative"
            :to="{ name: 'blogs-detail' }"
          >
            <span class="button-text">{{ $t("form.read_more") }}</span>
            <i class="fa-solid fa-play"></i>
          </nuxt-link>
        </div>
        <ul class="iq-blog-meta-cat-tag iq-blogcat mt-4">
          <li class="iq-tag-title">
            <i class="fas fa-film" aria-hidden="true"></i>
            {{ props.categories }}
          </li>

          <li>
            <nuxt-link
              :to="{ name: 'blogs-filter-type', params: { type: 'category' } }"
              >{{ props.categories }}</nuxt-link
            >
          </li>
        </ul>
        <ul class="iq-blog-meta-cat-tag iq-blogtag">
          <li class="iq-tag-title">
            <i class="fas fa-tags" aria-hidden="true"></i>
            {{ $t("shop.tags") }}:
          </li>
          <li v-for="data in tags" :key="data">
            <nuxt-link
              :to="{ name: 'blogs-filter-type', params: { type: 'tags' } }"
              >{{ data }}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </article>

  <!-- added -->
</template>
<script setup>
const props = defineProps({
  thumbnail: { type: String, default: "" },
  title: { type: String, default: "" },
  slug: { type: String, default: "" },
  username: { type: String, default: "" },
  tags: { type: Array, default: () => [] },
  description: { type: String, default: "" },
  date: { type: String, default: "" },
  categories: { type: String, default: "" },
});
</script>
