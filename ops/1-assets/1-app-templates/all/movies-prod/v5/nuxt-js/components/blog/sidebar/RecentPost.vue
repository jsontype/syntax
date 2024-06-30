<template>
  <div id="recent-posts-2" class="widget iq-widget-blog">
    <h5 class="widget-title position-relative">
      {{ $t("blogs.recent_post") }}
    </h5>
    <ul class="list-inline p-0 m-0">
      <li
        v-for="recent in props.recents"
        :key="recent"
        class="d-flex align-items-center gap-4"
      >
        <div class="img-holder">
          <nuxt-link :to="{ name: 'blogs-detail' }">
            <img
              :src="recent.thumbnail"
              class="img-fluid h-100 w-100 object-cover"
              alt=""
              loading="lazy"
            />
          </nuxt-link>
        </div>
        <div class="post-blog">
          <nuxt-link :to="{ name: 'blogs-detail' }">
            <h6 class="post-title">
              {{ $t(recent.title) }}
            </h6>
          </nuxt-link>
          <ul class="list-inline mb-2">
            <li clas="list-inline-item border-0 mb-0 pb-0">
              <nuxt-link class="blog-data" to="#">
                <i class="far fa-calendar-alt me-1" aria-hidden="true"></i>
                {{ recent.blogDate }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  recents: { type: Array, default: () => [] },
});
</script>
