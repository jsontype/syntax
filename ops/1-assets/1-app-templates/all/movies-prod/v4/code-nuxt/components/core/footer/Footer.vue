<template>
  <footer class="footer-one iq-bg-dark">
    <div class="footer-top">
      <div class="container-fluid">
        <div class="row footer-standard">
          <div class="col-lg-7">
            <slot name="column1" />
          </div>
          <div class="col-lg-2 col-md-6 mt-4 mt-lg-0">
            <slot name="column2" />
          </div>
          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <slot name="column3" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>

export default {
  name: 'Footer'
}
</script>
