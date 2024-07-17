<template>
<div>
  <Detail />
  <Sesson/>
  </div>
</template>
<script>
import Detail from './ShowSinglePage/Detail'
import Sesson from './ShowSinglePage/Sesson'
export default {
  name: 'SinglePage',
  components: {
    Detail,
    Sesson
  },
  mounted () {
  }
}
</script>
