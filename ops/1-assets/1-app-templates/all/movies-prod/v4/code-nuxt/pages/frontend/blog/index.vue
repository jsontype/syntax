<template>
  <div>
    <breadcrumb name="Blog" />
    <div class="main-content">
      <main id="main" class="site-main">
        <div class="container">
          <div class="row">
            <BlogSidebar />
            <BlogRightSidebar />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import breadcrumb from '../../../components/frontend/breadcrumb/breadcrumb.vue'
import BlogSidebar from '../../../components/frontend/blog-pages/BlogSidebar'
import BlogRightSidebar from '../../../components/frontend/blog-pages/BlogRightSidebar'
export default {
  name: 'Blog',
  layout: 'FrontendLayout',
  components: {
    BlogSidebar,
    BlogRightSidebar,
    breadcrumb
  }
}
</script>
