<template>
  <article>
    <div class="iq-blog-box">
      <div class="iq-blog-image clearfix">
        <router-link :to="{ name: 'landing-page.blogs.detail', params: { slug: props.slug } }">
          <img :src="props.thumbnail" alt="" class="img-fluid w-100" loading="lazy" />
        </router-link>
      </div>
      <div class="iq-blog-detail">
        <div class="iq-blog-meta d-flex mb-3">
          <ul class="iq-blogtag list-inline">
            <li class="border-gredient-left">
              <!-- <time datetime="2019-02-02T12:46:15+00:00"> -->
              <router-link to="/blogs-date">
                {{ props.date }}
              </router-link>
              <!-- </time> -->
            </li>
          </ul>
          <ul class="list-inline mb-0">
            <li class="border-gredient-left">
              <a href="#" class=""
                ><i class="fa fa-user-o me-1" aria-hidden="true"></i><router-link to="/blogs-author">{{ props.username }}</router-link></a
              >
            </li>
          </ul>
        </div>
        <router-link :to="{ name: 'landing-page.blogs.detail', params: { slug: props.slug } }">
          <h3 class="mb-3 line-count-1 blog-heading">{{ props.title }}</h3>
        </router-link>
        <p class="line-count-2">{{ $t(props.description) }}</p>
        <div class="iq-button">
          <router-link class="btn text-uppercase position-relative" :to="{ name: 'landing-page.blogs.detail', params: { slug: props.slug } }">
            <span class="button-text">{{ $t('form.read_more') }} </span>
            {{ '' }}
            <i class="fa-solid fa-play"></i>
          </router-link>
        </div>
        <ul class="iq-blog-meta-cat-tag iq-blogcat mt-4">
          <li class="iq-tag-title">
            <i class="fas fa-film" aria-hidden="true"></i>
            {{ $t('form.categories') }}:
          </li>
          <li>
            <router-link to="/blogs-category">{{ $t(props.categories) }}</router-link>
          </li>
        </ul>
        <ul class="iq-blog-meta-cat-tag iq-blogcat">
          <li class="iq-tag-title">
            <i class="fas fa-tags" aria-hidden="true"></i>
            {{ $t('form.tags') }}:
          </li>
          <li v-for="data in props.tags" :key="data">
            <router-link to="/blogs-tag">{{ $t(data) }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </article>

  <!-- added -->
</template>
<script setup>
const props = defineProps({
  thumbnail: { type: String, default: '' },
  title: { type: String, default: 'blogs.anticipated_movies' },
  slug: { type: String, default: '' },
  username: { type: String, default: '' },
  tags: { type: Array, default: () => [] },
  description: { type: String, default: 'blogs.blog_desc' },
  date: { type: String, default: '' },
  categories: { type: String, default: 'blogs.movy' },
});
</script>
