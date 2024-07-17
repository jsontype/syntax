<template>
  <!-- <b-container fluid> -->
  <b-row class="row">
    <b-col lg="8">
      <b-row class="row">
        <b-col sm="6" lg="6" xl="3">
          <b-card class="card-block card-stretch card-height">
            <div class="d-flex align-items-center justify-content-between">
              <div class="iq-cart-text text-capitalize">
                <p class="mb-0">{{ $t('dashboard.view') }}</p>
              </div>
              <div class="icon iq-icon-box-top rounded-circle bg-primary">
                <svg class="text-white" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 19.355C15.806 19.355 19.289 16.617 21.25 12.053C19.289 7.48898 15.806 4.75098 11.998 4.75098H12.002C8.194 4.75098 4.711 7.48898 2.75 12.053C4.711 16.617 8.194 19.355 12.002 19.355H11.998Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-3">
              <h4 class="mb-0">+24K</h4>
              <p class="mb-0 text-primary">
                <span><i class="fa fa-caret-down me-2"></i></span>35%
              </p>
            </div>
          </b-card>
        </b-col>
        <b-col sm="6" lg="6" xl="3">
          <b-card class="card-block card-stretch card-height">
            <div class="iq-card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div class="iq-cart-text text-capitalize">
                  <p class="mb-0 font-size-14">{{ $t('dashboard.app') }}</p>
                </div>
                <div class="icon iq-icon-box-top rounded-circle bg-warning">
                  <svg class="text-white" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-3">
                <h4 class="mb-0">+55K</h4>
                <p class="mb-0 text-warning">
                  <span><i class="fa fa-caret-up me-2"></i></span>50%
                </p>
              </div>
            </div>
          </b-card>
        </b-col>
        <b-col sm="6" lg="6" xl="3">
          <b-card class="card-block card-stretch card-height">
            <div class="iq-card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div class="iq-cart-text text-capitalize">
                  <p class="mb-0 font-size-14">{{ $t('dashboard.download') }}</p>
                </div>
                <div class="icon iq-icon-box-top rounded-circle bg-info">
                  <svg class="text-white" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 17.108 6.891 21.25 12 21.25C17.108 21.25 21.25 17.108 21.25 12C21.25 6.892 17.108 2.75 12 2.75C6.891 2.75 2.75 6.892 2.75 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M8.52832 10.5576L11.9993 14.0436L15.4703 10.5576" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-3">
                <h4 class="mb-0">+1M</h4>
                <p class="mb-0 text-info">
                  <span><i class="fa fa-caret-up me-2"></i></span>80%
                </p>
              </div>
            </div>
          </b-card>
        </b-col>
        <b-col sm="6" lg="6" xl="3">
          <b-card class="card-block card-stretch card-height">
            <div class="iq-card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div class="iq-cart-text text-capitalize">
                  <p class="mb-0 font-size-14">{{ $t('dashboard.visitors') }}</p>
                </div>
                <div class="icon iq-icon-box-top rounded-circle bg-success">
                  <svg class="text-white" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z" stroke="currentColor" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-3">
                <h4 class="mb-0">+2M</h4>
                <p class="mb-0 text-success">
                  <span><i class="fa fa-caret-up me-2"></i></span>80%
                </p>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <b-card class="">
        <template #header>
          <b-card-title class="iq-header-title">
            <h4 class="card-title">{{ $t('dashboard.top-item') }}</h4>
          </b-card-title>
        </template>
        <swiper
          :loop="true"
          :navigation="{
            nextEl: '#swiper-button-next',
            prevEl: '#swiper-button-prev',
          }"
          :breakpoints="{
            '0': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '576': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '1025': {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            '1500': {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }"
          :modules="modules"
          class="swiper pt-2 pt-md-4 pt-lg-4 overflow-hidden swiper-wrapper list-inline p-0 m-0">
          <swiper-slide as="li" class="iq-rated-box swiper-slide">
            <top-rated-item id="01" :topimg="generateImgPath('/assets/images/dashboard/01.jpg')" :toptitle="$t('dashboard.The_Last_Breath')" :toptext="$t('dashboard.Tv_Show')" topview="134" topdownload="30k"> </top-rated-item>
          </swiper-slide>
          <SwiperSlide as="li" class="iq-rated-box swiper-slide">
            <top-rated-item id="02" :topimg="generateImgPath('/assets/images/dashboard/02.jpg')" :toptitle="$t('dashboard.Last_Night')" :toptext="$t('dashboard.movie')" topview="133" topdownload="20k"> </top-rated-item>
          </SwiperSlide>
          <SwiperSlide as="li" class="iq-rated-box swiper-slide">
            <top-rated-item id="03" :topimg="generateImgPath('/assets/images/dashboard/03.jpg')" :toptitle="$t('dashboard.Jeon_Woochie')" :toptext="$t('dashboard.movie')" topview="222" topdownload="40k"> </top-rated-item>
          </SwiperSlide>
          <SwiperSlide as="li" class="iq-rated-box swiper-slide">
            <top-rated-item id="04" :topimg="generateImgPath('/assets/images/dashboard/04.jpg')" :toptitle="$t('dashboard.Dino_Land')" :toptext="$t('dashboard.Tv_Show')" topview="122" topdownload="25k"> </top-rated-item>
          </SwiperSlide>
          <SwiperSlide as="li" class="iq-rated-box swiper-slide">
            <top-rated-item id="05" :topimg="generateImgPath('/assets/images/dashboard/05.jpg')" :toptitle="$t('dashboard.Last_Race')" :toptext="$t('dashboard.Tv_Show')" topview="144" topdownload="35k"> </top-rated-item>
          </SwiperSlide>
          <SwiperSlide as="li" class="iq-rated-box swiper-slide">
            <top-rated-item id="06" :topimg="generateImgPath('/assets/images/dashboard/06.jpg')" :toptitle="$t('dashboard.Open_Dead_Shot')" :toptext="$t('dashboard.Tv_Show')" topview="134" topdownload="30k"> </top-rated-item>
          </SwiperSlide>
        </swiper>
        <div class="top-swiper-arrow d-flex align-items-center">
          <div id="swiper-button-prev" class="swiper-button-prev me-2"></div>
          <div id="swiper-button-next" class="swiper-button-next"></div>
        </div>
      </b-card>
    </b-col>
    <b-col lg="4">
      <b-card class="card-block card-stretch card-height" body-class="pb-0">
        <template #header>
          <b-card-title class="iq-header-title">
            <h4 class="card-title text-center">{{ $t('dashboard.product') }}</h4>
          </b-card-title>
        </template>
        <ApexChart element="view-chart-01" :chart-option="chartOne" class="" />
        <div class="row mt-1">
          <div class="col-sm-6 col-md-3 col-lg-6 iq-user-list">
            <b-card class="border-0" body-class="bg-body p-3">
              <div class="d-flex align-items-center">
                <div class="iq-user-box bg-primary"></div>
                <div class="media-body">
                  <p class="mb-0 font-size-14 line-height">
                    {{ $t('dashboard.new') }} <br />
                    {{ $t('dashboard.customer') }}
                  </p>
                </div>
              </div>
            </b-card>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-6 iq-user-list">
            <b-card class="border-0" body-class="bg-body p-3">
              <div class="iq-card-body">
                <div class="d-flex align-items-center">
                  <div class="iq-user-box bg-warning"></div>
                  <div class="media-body">
                    <p class="mb-0 font-size-14 line-height">
                      {{ $t('dashboard.exsisting') }} <br />
                      {{ $t('dashboard.subscribers') }}
                    </p>
                  </div>
                </div>
              </div>
            </b-card>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-6 iq-user-list">
            <b-card class="border-0" body-class="bg-body p-3">
              <div class="iq-card-body">
                <div class="d-flex align-items-center">
                  <div class="iq-user-box bg-warning"></div>
                  <div class="media-body">
                    <p class="mb-0 font-size-14 line-height">
                      {{ $t('dashboard.daily') }} <br />
                      {{ $t('dashboard.visitor') }}
                    </p>
                  </div>
                </div>
              </div>
            </b-card>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-6 iq-user-list">
            <b-card class="border-0" body-class="bg-body p-3">
              <div class="iq-card-body">
                <div class="d-flex align-items-center">
                  <div class="iq-user-box bg-warning"></div>
                  <div class="media-body">
                    <p class="mb-0 font-size-14 line-height">
                      {{ $t('dashboard.extend') }}<br />
                      {{ $t('dashboard.subs') }}
                    </p>
                  </div>
                </div>
              </div>
            </b-card>
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col sm="12" lg="4">
      <b-card body-class="p-0">
        <template #header>
          <b-card-title>
            <h4 class="card-title">{{ $t('dashboard.categories') }}</h4>
          </b-card-title>
        </template>
        <ApexChart element="view-chart-03" :chart-option="categoryChart" />
      </b-card>
    </b-col>
    <b-col lg="8">
      <b-card no-body class="card-block card-stretch card-height">
        <div class="card-header d-flex align-items-center justify-content-between">
          <div class="iq-header-title">
            <h4 class="card-title">{{ $t('dashboard.Top_Category') }}</h4>
          </div>
          <div class="card-header-toolbar d-flex align-items-center seasons">
            <div class="iq-custom-select d-inline-block sea-epi s-margin">
              <select name="cars" class="form-control season-select">
                <option value="season1">{{ $t('dashboard.today') }}</option>
                <option value="season2">{{ $t('dashboard.This_Week') }}</option>
                <option value="season2">{{ $t('dashboard.This_Month') }}</option>
              </select>
            </div>
          </div>
        </div>
        <b-card-body class="row align-items-center">
          <div class="col-lg-7">
            <div class="row list-unstyled mb-0 pb-0">
              <div class="col-sm-6 col-md-4 col-lg-6 mb-3">
                <div class="iq-progress-bar progress-bar-vertical iq-bg-primary">
                  <span class="bg-primary" data-percent="100" style="transition: height 2s ease 0s; width: 100%; height: 40%"></span>
                </div>
                <div class="d-flex align-items-center">
                  <div class="iq-icon-box-view rounded me-3 iq-bg-primary"><i class="fa-solid fa-film font-size-32"></i></div>
                  <div class="">
                    <h6 class="mb-0 font-size-14 line-height">{{ $t('dashboard.actions') }}</h6>
                    <small class="text-primary mb-0">+34%</small>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-6 mb-3">
                <div class="iq-progress-bar progress-bar-vertical iq-bg-secondary">
                  <span class="bg-secondary" data-percent="100" style="transition: height 2s ease 0s; width: 100%; height: 70%"></span>
                </div>
                <div class="d-flex align-items-center">
                  <div class="iq-icon-box-view rounded me-3 text-secondary"><i class="fa-solid fa-masks-theater font-size-32"></i></div>
                  <div class="">
                    <p class="mb-0 font-size-14 line-height">{{ $t('dashboard.comedy') }}</p>
                    <small class="text-secondary mb-0">+44%</small>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-6 mb-3">
                <div class="iq-progress-bar progress-bar-vertical iq-bg-info">
                  <span class="bg-info" data-percent="100" style="transition: height 2s ease 0s; width: 100%; height: 40%"></span>
                </div>
                <div class="d-flex align-items-center">
                  <div class="iq-icon-box-view rounded me-3 text-info"><i class="fa-solid fa-skull-crossbones font-size-32"></i></div>
                  <div class="">
                    <p class="mb-0 font-size-14 line-height">{{ $t('dashboard.horror') }}</p>
                    <small class="text-info mb-0">+56%</small>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-6 mb-3">
                <div class="iq-progress-bar progress-bar-vertical iq-bg-warning">
                  <span class="bg-warning" data-percent="100" style="transition: height 2s ease 0s; width: 100%; height: 40%"></span>
                </div>
                <div class="d-flex align-items-center">
                  <div class="iq-icon-box-view rounded me-3 text-warning"><i class="fa-solid fa-masks-theater font-size-32"></i></div>
                  <div class="">
                    <p class="mb-0 font-size-14 line-height">{{ $t('dashboard.drama') }}</p>
                    <small class="text-warning mb-0">+65%</small>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-6 mb-lg-0 mb-0">
                <div class="iq-progress-bar progress-bar-vertical iq-bg-success">
                  <span class="bg-success" data-percent="100" style="transition: height 2s ease 0s; width: 100%; height: 60%"></span>
                </div>
                <div class="d-flex align-items-center mb-lg-0 mb-3">
                  <div class="iq-icon-box-view rounded me-3 text-success"><i class="fa-solid fa-child font-size-32"></i></div>
                  <div class="">
                    <p class="mb-0 font-size-14 line-height">{{ $t('dashboard.kids') }}</p>
                    <small class="text-success mb-0">+74%</small>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-6 mb-lg-0 mb-3">
                <div class="iq-progress-bar progress-bar-vertical iq-bg-danger">
                  <span class="bg-danger" data-percent="100" style="transition: height 2s ease 0s; width: 100%; height: 80%"></span>
                </div>
                <div class="d-flex align-items-center">
                  <div class="iq-icon-box-view rounded me-3 text-danger"><i class="fa-solid fa-face-grin-beam-sweat font-size-32"></i></div>
                  <div class="">
                    <p class="mb-0 font-size-14 line-height">{{ $t('dashboard.thrilled') }}</p>
                    <small class="text-danger mb-0">+40%</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <ApexChart class="view-cahrt-02" element="view-chart-02" :chart-option="categoryChart2" />
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12">
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center gap-2">
          <b-card-title tag="div">
            <h4 class="mb-0">{{ $t('dashboard.Viewed_Items') }}</h4>
          </b-card-title>
          <div class="card-header-toolbar d-flex align-items-center seasons">
            <div class="iq-custom-select d-inline-block sea-epi s-margin">
              <select name="cars" class="form-control season-select px-3">
                <option value="season1">{{ $t('dashboard.most_likely') }}</option>
                <option value="season2">{{ $t('dashboard.unlikely') }}</option>
              </select>
            </div>
          </div>
        </div>
        <b-card-body>
          <div class="table-responsive table-view table-space mb-0">
            <table id="datatable" ref="tableRef" class="data-tables table custom-table movie_table" data-toggle="data-table"></table>
          </div>
        </b-card-body>
      </div>
    </b-col>
  </b-row>
  <!-- </b-container> -->
</template>

<script setup>
import { ref } from 'vue';
import useDataTable from '../hooks/useDatatable';
import ApexChart from '../components/core/charts/ApexChart.vue';
import TopRatedItem from '../components/partials/TopRatedItem.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';

const tableData = ref([
  { movie: '/assets/images/movie-thumb/07.jpg', name: 'Boop Bitty', time: '', rating: '8.2', category: 'Thriller', user: 'Unsubcriber', date: '23 July,2020' },
  { movie: '/assets/images/movie-thumb/01.jpg', name: 'Champions', time: '1h 40min', rating: '9.2', category: 'Horror', user: 'Unsubcriber', date: '21 July,2020' },
  { movie: '/assets/images/movie-thumb/01.jpg', name: 'Dino Land', time: '', rating: '8.5', category: 'Action', user: 'Unsubcriber', date: '24 July,2020' },
  { movie: '/assets/images/movie-thumb/05.jpg', name: 'Last Race', time: '', rating: '7.2', category: 'Horror', user: 'Subcriber', date: '22 July,2020' },
  { movie: '/assets/images/movie-thumb/04.jpg', name: 'The Last Breath', time: '', rating: '8.9', category: 'Horror', user: 'Subcriber', date: '25 July,2020' },
]);
const columns = ref([
  {
    data: null,
    title: 'Movie',
    render: function (row) {
      return `
      <div class="d-flex align-items-center">
         <div class="iq-movie">
         <a href="javascript:void(0);"><img src="${generateImgPath(row.movie)}" class="img-border-radius avatar-40 img-fluid" alt="recentlyImg-01"></a>
         </div>
         <div class="text-start ms-3">
         <p class="mb-0">${row.name}</p>
         <small>${row.time}</small>
         </div>
     </div>
          
        `;
    },
  },
  { data: 'rating', title: 'Rating' },
  { data: 'category', title: 'Category' },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Download/Views',
    render: function () {
      return `
      <i class="fa-regular fa-eye"></i>
        `;
    },
  },
  { data: 'user', title: 'User' },
  { data: 'date', title: 'Date' },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: '<i class="fa-solid fa-heart"></i>',
    render: function () {
      return `
     <i class="fa-solid fa-heart text-primary"></i>
        `;
    },
  },
]);

const tableRef = ref(null);
useDataTable({
  tableRef: tableRef,
  columns: columns.value,
  data: tableData.value,
});
const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
const modules = [Navigation];

// const likeSelected = ref('like');
// const likeSection = ref([
//   {
//     id: 1,
//     value: 'like',
//     text: 'Most Likely',
//   },
//   {
//     id: 2,
//     value: 'unlike',
//     text: 'Unlikely',
//   },
// ]);
const chartOne = ref({
  series: [44, 55, 30, 30],
  chart: {
    width: 250,
    type: 'donut',
  },
  colors: ['#e20e02', '#f68a04', '#007aff', '#545e75'],
  labels: ['New Customer', "Exsisting Subscriber's", "Daily Visitor's", "Extented Subscriber's"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
});
const categoryChart = ref({
  series: [
    {
      name: 'This Month',
      data: [44, 55, 30, 60],
    },
    {
      name: 'Last Month',
      data: [35, 41, 20, 40],
    },
  ],
  colors: ['#e20e02', '#007aff'],
  chart: {
    type: 'bar',
    height: 230,
    foreColor: '#D1D0CF',
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['a', 'b', 'c', 'd'],
  },
  yaxis: {
    title: {
      text: '',
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    enabled: false,
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands';
      },
    },
  },
});
const categoryChart2 = ref({
  series: [44, 30, 20, 43, 22, 20],
  chart: {
    width: 250,
    type: 'donut',
  },
  colors: ['#e20e02', '#83878a', '#007aff', '#f68a04', '#14e788', '#545e75'],
  labels: ['Actions', 'Comedy', 'Harror', 'Drama', 'Kids', 'Thrilled'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
    formatter: function (val, opts) {
      return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
});
</script>
