<template>
  <div class="section-padding">
    <b-container>
      <b-row>
        <b-col xl="8">
          <div class="iq-blog blog-detail">
            <template v-if="type === 'audio'">
              <div>
                <iframe
                  height="200"
                  class="w-100"
                  frameborder="no"
                  src="https://w.soundcloud.com/player/?visual=false&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F36701924&amp;show_artwork=true&amp;maxheight=750&amp;maxwidth=720&amp;auto_play=false&amp;buying=true&amp;liking=true&amp;download=true&amp;sharing=true&amp;show_comments=true&amp;show_playcount=true&amp;show_user=true&amp;color"
                ></iframe>
              </div>
            </template>

            <template v-else-if="type === 'video'">
              <div>
                <VideoPlayer :options="playerOption"></VideoPlayer>
              </div>
            </template>

            <template v-else-if="type === 'gallery'">
              <b-row class="row-cols-xl-3 row-cols-md-2 row-cols-1">
                <b-col
                  v-for="(item, index) in gallery"
                  :key="index"
                  :class="item.class"
                >
                  <nuxt-link to="">
                    <img :src="item.img" :alt="index" />
                  </nuxt-link>
                </b-col>
              </b-row>
            </template>

            <div class="iq-blog-box pt-4">
              <div class="iq-blog-meta d-flex mb-3">
                <ul class="iq-blogtag list-inline">
                  <li class="border-gredient-left">
                    <nuxt-link :to="{ name: 'blogs' }">
                      <i class="far fa-user me-1" aria-hidden="true"></i>
                      {{ $t(blog.username) }}
                    </nuxt-link>
                  </li>
                </ul>
                <ul class="list-inline mb-0 ms-2">
                  <li class="border-gredient-left">
                    <nuxt-link :to="{ name: 'blogs' }">
                      <i
                        class="far fa-calendar-alt me-1"
                        aria-hidden="true"
                      ></i>
                      {{ blog.blogDate }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
              <template v-if="type === 'link'">
                <div class="mb-4">
                  <nuxt-link to="https://iqonic.design/">
                    <i class="fas fa-link text-primary quote-icon"></i>
                  </nuxt-link>
                </div>
              </template>
              <template v-if="type === 'quote'">
                <div class="blockquote text-center mb-3">
                  <div class="blockquote-icon">
                    <i aria-hidden="true" class="fas fa-quote-right"></i>
                  </div>
                  <p>
                    {{ $t("blogs.movies_tretmendos") }}
                  </p>
                  <div class="my-4">
                    <h6
                      class="border-gredient-left d-inline-block ps-2 fw-normal py-1"
                    >
                      {{ $t("blogs.walt_disney") }}
                    </h6>
                  </div>
                </div>
              </template>
              <div v-html="blog.longDescription"></div>
              <div class="iq-blog-tag">
                <form-widget></form-widget>
              </div>
            </div>
          </div>
        </b-col>
        <b-col xl="4" class="mt-5 mt-xl-0">
          <DetailMetaList />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, onMounted } from "vue";
import { useRoute } from "vue-router";
import VideoPlayer from "~/components/plugins/VideoPlayer.vue";
import DetailMetaList from "~/components/blog/DetailMetaList.vue";
import { blogs } from "../../StaticData/blogs";
import { generateImgPath } from "../../StaticData/data";

import { useStremit } from "~/store/streamit";

const route = useRoute();
const type = computed(() => route.params.type);
const slug = "the-most-anticipated-movies";
const blog = blogs.find((item) => item.slug === slug);

const checkType = () => {
  switch (type.value) {
    case "audio":
      store.breadcrumbSet({ show: true, name: "Audio" });
      break;
    case "video":
      store.breadcrumbSet({ show: true, name: "Video" });
      break;
    case "link":
      store.breadcrumbSet({ show: true, name: "Link" });
      break;
    case "quote":
      store.breadcrumbSet({ show: true, name: "Quote" });
      break;
    case "gallery":
      store.breadcrumbSet({ show: true, name: "Gallery" });
      break;
    default:
      break;
  }
};

const playerOption = ref({
  autoplay: false,
  controls: true,
  techOrder: ["youtube"],
  sources: [
    {
      src: "https://www.youtube.com/watch?v=QCGq1epI9pQ",
      type: "video/youtube",
    },
  ],
  youtube: { iv_load_policy: 1 },
});
const gallery = ref([
  {
    img: generateImgPath("/assets/images/blog/blog1.webp"),
    class: "mb-4",
  },
  {
    img: generateImgPath("/assets/images/blog/blog2.webp"),
    class: "mb-4",
  },
  {
    img: generateImgPath("/assets/images/blog/blog3.webp"),
    class: "mb-4",
  },
  {
    img: generateImgPath("/assets/images/blog/blog4.webp"),
    class: "mb-4 mb-md-0",
  },
  {
    img: generateImgPath("/assets/images/blog/blog5.webp"),
    class: "mb-4 mb-md-0",
  },
  {
    img: generateImgPath("/assets/images/blog/Fantacy.webp"),
    class: "",
  },
]);

watch(
  type,
  () => {
    checkType();
  },
  { deep: true }
);

//breadcrumb
const store = useStremit();

onMounted(() => {
  checkType();
});
onUnmounted(() => {
  store.breadcrumbSet({ show: false, name: "" });
});
</script>
