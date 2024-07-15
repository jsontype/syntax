<template>
  <div class="iq-breadcrumb-one  iq-bg-over iq-over-dark-50" :style="`background-image: url(${require('@/assets/images/frontend/about-us/01.jpg')});`">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-sm-12">
          <nav aria-label="breadcrumb" class="text-center iq-breadcrumb-two">
            <h2 class="title">
              {{ name }}
            </h2>
            <ol class="breadcrumb main-bg">
              <li class="breadcrumb-item">
                <a href="">Home</a>
              </li>
              <li v-if="subtitle" class="breadcrumb-item">
                <a href="">Dramas</a>
              </li>
              <li class="breadcrumb-item active">
                {{ name }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Breadcrumb',
  props: {
    name: { type: String, default: '' },
    subtitle: { type: Boolean, default: false }
  }
}
</script>
