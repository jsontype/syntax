<template>
<div>
    <main id="main" class="site-main">
      <div class="container">
        <div class="row">
          <BlogSidebar/>
          <BlogRightSidebar/>
        </div>
      </div>
    </main>
</div>
</template>
<script>
import BlogSidebar from '@/views/FrontendPages/BlogPages/BlogSidebar'
import BlogRightSidebar from '@/views/FrontendPages/BlogPages/BlogRightSidebar'
export default {
  name: 'Blog',
  components: {
    BlogSidebar,
    BlogRightSidebar
  }
}
</script>
