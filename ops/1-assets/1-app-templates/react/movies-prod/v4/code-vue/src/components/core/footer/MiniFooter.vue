<template>
  <!-- Footer -->
  <footer class="iq-footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <ul class="list-inline mb-0">
            <slot name="left"></slot>
          </ul>
        </div>
        <div class="col-lg-6 text-right">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer END -->
</template>
<script>
export default {
  name: 'MiniFooter'
}
</script>
