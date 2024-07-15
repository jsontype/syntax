<template>
  <div class="section-padding">
    <b-container>
      <b-row>
        <b-col lg="8" sm="12">
          <div class="blog-box">
            <img :src="generateImgPath('/assets/images/blog/blog2.webp')" class="img-fluid mb-4 pb-3 rounded" />
            <div class="d-flex align-items-center justify-content-between mb-3">
              <ul class="iq-blog-category-2 m-0 p-0 list-unstyled">
                <li>
                  <router-link :to="{ name: 'landing-page.blogs.template' }" class="fw-500">{{ $t(blog.categories) }}</router-link>
                </li>
              </ul>
              <div class="d-flex align-items-center gap-2">
                <span class="font-size-12">5 {{ $t('blogs.min_read') }}</span>
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2428 12.2419C10.4091 14.0758 7.69386 14.472 5.47185 13.4444C5.14382 13.3123 4.87489 13.2056 4.61922 13.2056C3.90709 13.2098 3.0207 13.9003 2.56002 13.4402C2.09933 12.9795 2.79036 12.0924 2.79036 11.3759C2.79036 11.1202 2.68785 10.8561 2.55579 10.5274C1.5277 8.30577 1.92447 5.58961 3.75816 3.75632C6.09896 1.41466 9.90201 1.41466 12.2428 3.75572C14.5878 6.101 14.5836 9.90086 12.2428 12.2419Z" stroke="#E50914" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M10.3637 8.24775H10.3691" stroke="#E50914" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M7.95843 8.24775H7.96383" stroke="#E50914" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.55316 8.24775H5.55856" stroke="#E50914" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  {{ '' }}
                  <span class="font-size-12">{{ $t('blogs.comments') }}</span>
                </div>
              </div>
            </div>
            <h3 class="fw-500">{{ $t(blog.title) }}</h3>
            <div class="iq-author-details d-flex align-items-center justify-content-between gap-2">
              <div class="iq-author-image d-flex align-items-center gap-2">
                <img :src="blog.userImage" alt="user" class="img-fluid avatar-40 rounded-circle" />
                <div class="gap-1 d-flex align-items-center font-size-14">
                  By
                  <span
                    ><router-link to="" class="fw-500 text-capitalize">{{ blog.username }}</router-link></span
                  >
                </div>
              </div>
              <div class="iq-published-date">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.19336 5.59936H11.8109" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                  <path d="M9.39685 7.70678H9.40185" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                  <path d="M7.00232 7.70678H7.00732" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                  <path d="M4.60291 7.70678H4.6079" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                  <path d="M9.39685 9.80371H9.40185" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                  <path d="M7.00232 9.80371H7.00732" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                  <path d="M4.60291 9.80371H4.6079" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                  <path d="M9.18255 1.60425V3.37991" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                  <path d="M4.82318 1.60425V3.37991" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8571 2.4563H2.14453V12.3959H11.8571V2.4563Z" stroke="#E50914" stroke-width="1.5" stroke-linecap="square"></path>
                </svg>
                {{ '' }}
                <span class="font-size-14 text-uppercase">
                  <router-link to="#">{{ blog.blogDate }}</router-link>
                </span>
              </div>
            </div>
          </div>
          <div v-html="blog.longDescription"></div>

          <div class="iq-blog-tag">
            <ul class="p-0 m-0 list-unstyled gap-2 widget_tags">
              <li>
                <i class="fas fa-tags text-primary" aria-hidden="true"></i>
                <span class="font-size-12 fw-semibold">TAGS:</span>
              </li>
              <li v-for="data in blog.tags" :key="data">
                <router-link to="" class="text-capitalize">{{ $t(data) }}</router-link>
              </li>
            </ul>
          </div>
          <div class="widget my-5 my-md-0">
            <div class="iq-author-meta-details d-flex align-items-start align-items-md-center gap-4 flex-b-column flex-md-row">
              <div class="iq-author-image">
                <img :src="blog.userImage" alt="user" class="img-fluid rounded" />
              </div>
              <div>
                <h5>{{ blog.username }}</h5>
                <ul class="p-0 m-0 list-unstyled widget_social_media mt-4">
                  <li>
                    <router-link to=""><i class="fab fa-facebook"></i></router-link>
                  </li>
                  {{
                    ''
                  }}
                  <li>
                    <router-link to=""><i class="fab fa-instagram"></i></router-link>
                  </li>
                  {{
                    ''
                  }}
                  <li>
                    <router-link to=""><i class="fab fa-twitter"></i></router-link>
                  </li>
                  {{
                    ''
                  }}
                  <li>
                    <router-link to=""><i class="fab fa-dribbble"></i></router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <form-widget></form-widget>
        </b-col>
        <b-col lg="4" md="12" sm="12">
          <DetailMetaList />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script setup>
import { blogs } from '../../StaticData/blogs';
import DetailMetaList from '../../components/blog/DetailMetaList.vue';
import FormWidget from '../../components/blog/comments/FormWidget.vue';
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const blog = blogs.find((item) => item.slug === 'everything-you-need-to-know-about');
</script>
