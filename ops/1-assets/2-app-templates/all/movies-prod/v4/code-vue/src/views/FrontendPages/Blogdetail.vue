<template>
    <div>
        <main id="main" class="site-main">
            <div class="container">
                <div class="row">
                    <BlogdetailSidebar/>
                    <BlogRightSidebar/>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import BlogdetailSidebar from '@/views/FrontendPages/BlogPages/BlogdetailSidebar'
import BlogRightSidebar from '@/views/FrontendPages/BlogPages/BlogRightSidebar'
export default {
  name: 'Blogdetail',
  components: {
    BlogdetailSidebar,
    BlogRightSidebar
  }
}
</script>
