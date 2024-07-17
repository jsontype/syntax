<template>
  <div>
    <breadcrumb name="The Most Anticipated Movies" :subtitle="true" />
    <div class="main-content">
      <main id="main" class="site-main">
        <div class="container">
          <div class="row">
            <BlogdetailSidebar />
            <BlogRightSidebar />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import breadcrumb from '../../../components/frontend/breadcrumb/breadcrumb.vue'
import BlogdetailSidebar from '../../../components/frontend/blog-pages/BlogdetailSidebar'
import BlogRightSidebar from '../../../components/frontend/blog-pages/BlogRightSidebar'
export default {
  name: 'BlogDetails',
  layout: 'FrontendLayout',
  components: {
    BlogdetailSidebar,
    BlogRightSidebar,
    breadcrumb
  }
}
</script>
