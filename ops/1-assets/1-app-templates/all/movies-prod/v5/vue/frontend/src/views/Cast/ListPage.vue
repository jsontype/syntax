<template>
  <section class="section-padding">
    <div class="container-fluid">
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6">
        <b-col v-for="data in cast.slice(0, 12)" :key="data">
          <card-cast-grid :title="data.title" :designation="data.designation" :image="data.profile_image"></card-cast-grid>
        </b-col>
      </b-row>
      <div class="text-center">
        <div class="iq-button">
          <a href="javascript:void(0)" class="btn text-uppercase position-relative">
            <span class="button-text">{{ $t('ott_home.load_more') }}</span>
            {{ ' ' }}
            <i class="fa-solid fa-play"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import CardCastGrid from '../../components/cards/CardCastGrid.vue';
import { cast } from '../../StaticData/data';
</script>
