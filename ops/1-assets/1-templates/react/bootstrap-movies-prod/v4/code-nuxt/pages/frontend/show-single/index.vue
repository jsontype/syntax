<template>
<div>
    <Banner/>
     <div class="main-content">
            <Detail />
            <Sesson/>
     </div>
  </div>
</template>
<script>
import Banner from '../../../components/frontend/show-single/Banner'
import Detail from '../../../components/frontend/show-single/Detail'
import Sesson from '../../../components/frontend/show-single/Sesson'
export default {
  layout: 'FrontendLayout',
  name: 'SinglePage',
  components: {
    Banner,
    Detail,
    Sesson
  },
  mounted () {
  }
}
</script>
