<template>
<div class="iq-breadcrumb-one  iq-bg-over iq-over-dark-50" :style="`background-image: url(${require('@/assets/images/frontend/about-us/01.jpg')});`">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-sm-12">
                    <nav aria-label="breadcrumb" class="text-center iq-breadcrumb-two">
                        <h2 class="title">{{this.$route.meta.name}}</h2>
                        <ol class="breadcrumb main-bg">
                            <li class="breadcrumb-item"><a href="">Home</a></li>
                            <li class="breadcrumb-item" v-if= "this.$route.name == 'landing-page.blogdetail'"><a href="">Dramas</a></li>
                            <li class="breadcrumb-item active">{{this.$route.meta.name}}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
</div>
</template>
<script>
export default {
  name: 'Breadcrumb'
}
</script>
