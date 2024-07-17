<template>
  <div class="iq-blog-box">
    <div class="iq-blog-image clearfix">
      <img
        :src="props.thumbnail"
        alt="blog"
        class="img-fluid w-100"
        loading="lazy"
      />
    </div>
    <div class="iq-blog-detail">
      <div class="iq-blog-meta d-flex mb-3">
        <ul class="list-inline">
          <li class="border-gredient-left">
            <i class="fa fa-calendar me-1" aria-hidden="true"></i>
            <nuxt-link
              :to="{ name: 'blogs-filter-type', params: { type: 'date' } }"
            >
              <time datetime="2019-02-02T12:46:15+00:00" class="ms-2">{{
                props.date
              }}</time>
            </nuxt-link>
          </li>
        </ul>
        <ul class="iq-blogtag list-inline">
          <li class="border-gredient-left">
            <nuxt-link
              :to="{ name: 'blogs-filter-type', params: { type: 'category' } }"
            >
              {{ props.categories }}</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div class="blog-title">
        <h4 class="mb-3">
          <nuxt-link :to="{ name: 'blogs-detail' }">
            {{ props.title }}
          </nuxt-link>
        </h4>
      </div>
      <p>{{ props.shortDescription }}</p>
      <div class="iq-button link-button">
        <nuxt-link
          class="btn text-capitalize position-relative"
          :to="{ name: 'blogs-detail' }"
        >
          <span class="button-text"
            >{{ $t("form.read_more")
            }}<i class="fa fa-angle-right ml-2" aria-hidden="true"></i
          ></span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  thumbnail: { type: String, default: "" },
  title: { type: String, default: "" },
  slug: { type: String, default: "" },
  shortDescription: { type: String, default: "" },
  date: { type: String, default: "" },
  categories: { type: String, default: "" },
  username: { type: String, default: "" },
});
</script>
