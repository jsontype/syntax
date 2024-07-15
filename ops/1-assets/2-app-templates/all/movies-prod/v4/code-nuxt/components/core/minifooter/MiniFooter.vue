<template>
  <!-- Footer -->
  <footer class="iq-footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <ul class="list-inline mb-0">
            <slot name="left" />
          </ul>
        </div>
        <div class="col-lg-6 text-right">
          <slot name="right" />
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
