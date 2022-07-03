<template>
  <div class="home1">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <main id="main">

      <Header1/>
      <Word1/>
      <Footer1/>
    
    </main>
  </div>  
</template>

<script>
// @ is an alias to /src
import Header1 from '@/components/contents/Header1.vue'
import Word1 from '@/components/contents/Words1.vue'
import Footer1 from '@/components/contents/Footer1.vue'

export default {
  name: 'Home1',
  components: {
    Header1,
    Word1,
    Footer1
  }
}
</script>
