<template>
  <b-offcanvas
id="share-btn" :class="`offcanvas-bottom share-offcanvas ${showoffcanvas ? 'show' : ''}`" tabindex="-1"
    placement="bottom" aria-labelledby="shareBottomLabel" title="Share">
    <div class="d-flex flex-wrap align-items-center">
      <div class="text-center me-3 mb-3">
        <img src="/assets/client-images/brands/08.png" class="img-fluid rounded mb-2" alt="" loading="lazy" />
        <h6>Facebook</h6>
      </div>
      <div class="text-center me-3 mb-3">
        <img src="/assets/client-images/brands/09.png" class="img-fluid rounded mb-2" alt="" loading="lazy" />
        <h6>Twitter</h6>
      </div>
      <div class="text-center me-3 mb-3">
        <img src="/assets/client-images/brands/10.png" class="img-fluid rounded mb-2" alt="" loading="lazy" />
        <h6>Instagram</h6>
      </div>
      <div class="text-center me-3 mb-3">
        <img src="/assets/client-images/brands/11.png" class="img-fluid rounded mb-2" alt="" loading="lazy" />
        <h6>Google Plus</h6>
      </div>
      <div class="text-center me-3 mb-3">
        <img src="/assets/client-images/brands/13.png" class="img-fluid rounded mb-2" alt="" loading="lazy" />
        <h6>In</h6>
      </div>
      <div class="text-center me-3 mb-3">
        <img src="/assets/client-images/brands/12.png" class="img-fluid rounded mb-2" alt="" loading="lazy" />
        <h6>YouTube</h6>
      </div>
    </div>
  </b-offcanvas>
</template>
<script>
export default {
  name: 'ShareOffcanvas',
  props: {
    showoffcanvas: { type: Boolean, default: false }
  },
  methods: {
    closeoffcanvas() {
      this.$emit('closeoffcanvas', !this.showoffcanvas)
    },
    checkActive(route) {
      if (this.$route.name === route) {
        return true
      }
    }
  }
}
</script>