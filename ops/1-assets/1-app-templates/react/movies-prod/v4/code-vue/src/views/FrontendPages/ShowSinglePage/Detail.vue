<template>
    <section class="movie-detail container-fluid">
         <b-row>
            <b-col lg="12">
               <div class="trending-info g-border">
                  <h1 class="trending-text big-title text-uppercase mt-0">The Hero Camp</h1>
                  <ul class="p-0 list-inline d-flex align-items-center movie-content">
                     <li class="text-white">Action</li>
                     <li class="text-white">Drama</li>
                  </ul>
                  <div class="d-flex align-items-center text-white text-detail">
                     <span class="badge badge-secondary p-3">18+</span>
                     <span class="ml-3">3 Seasons</span>
                     <span class="trending-year">2020</span>
                  </div>
                  <div class="d-flex align-items-center series mb-4">
                     <a href="javascript:void();"><img src="../../../assets/images/frontend/trending/trending-label.png" class="img-fluid"
                           alt=""></a>
                     <span class="text-gold ml-3">#2 in Series Today</span>
                  </div>
                  <p class="trending-dec w-100 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting
                     industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                     unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                     survived not only five centuries.</p>
               </div>
            </b-col>
         </b-row>
      </section>
</template>
<script>
export default {
  name: 'Detail',
  components: {
  },
  mounted () {
  },
  data () {
    return {
    }
  }
}
</script>
