<template>
  <div>
    <MiniFooter>
      <template v-slot:left>
        <li class="list-inline-item">
          <a href="#">Privacy Policy</a>
        </li>
        <li class="list-inline-item">
          <a href="#">Terms of Use</a>
        </li>
      </template>
      <template v-slot:right>
        Copyright 2020 <a href="#">{{ appName }}</a> All Rights Reserved.
      </template>
    </MiniFooter>
  </div>
</template>
<script>
import MiniFooter from '../../components/core/minifooter/MiniFooter'
export default {
  name: 'LayoutFooter',
  components: {
    MiniFooter
  },
  data () {
    return {
      appName: 'Streamit'
    }
  },
  mounted () {
  }
}
</script>
