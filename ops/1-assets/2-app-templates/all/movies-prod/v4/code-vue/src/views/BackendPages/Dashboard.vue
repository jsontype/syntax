<template>
  <b-container fluid>
    <b-row class="row">
        <b-col lg="8">
          <b-row class="row">
            <b-col sm="6" lg="6" xl="3">
              <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div class="iq-card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="iq-cart-text text-capitalize">
                          <p class="mb-0">
                              view
                          </p>
                        </div>
                        <div class="icon iq-icon-box-top rounded-circle bg-primary">
                          <i class="las la-eye"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mt-3">
                        <h4 class=" mb-0">+24K</h4>
                        <p class="mb-0 text-primary"><span><i class="fa fa-caret-down mr-2"></i></span>35%</p>
                    </div>
                  </div>
              </div>
            </b-col>
            <b-col sm="6" lg="6" xl="3">
              <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div class="iq-card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="iq-cart-text text-capitalize">
                          <p class="mb-0 font-size-14">
                              Rated This App
                          </p>
                        </div>
                        <div class="icon iq-icon-box-top rounded-circle bg-warning">
                          <i class="lar la-star"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mt-3">
                        <h4 class=" mb-0">+55K</h4>
                        <p class="mb-0 text-warning"><span><i class="fa fa-caret-up mr-2"></i></span>50%</p>
                    </div>
                  </div>
              </div>
            </b-col>
            <b-col sm="6" lg="6" xl="3">
              <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div class="iq-card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="iq-cart-text text-capitalize">
                          <p class="mb-0 font-size-14">
                              Downloaded
                          </p>
                        </div>
                        <div class="icon iq-icon-box-top rounded-circle bg-info">
                          <i class="las la-download"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mt-3">
                        <h4 class=" mb-0">+1M</h4>
                        <p class="mb-0 text-info"><span><i class="fa fa-caret-up mr-2"></i></span>80%</p>
                    </div>
                  </div>
              </div>
            </b-col>
            <b-col sm="6" lg="6" xl="3">
              <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div class="iq-card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="iq-cart-text text-uppercase">
                          <p class="mb-0 font-size-14">
                              Visitors
                          </p>
                        </div>
                        <div class="icon iq-icon-box-top rounded-circle bg-success">
                          <i class="lar la-user"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mt-3">
                        <h4 class=" mb-0">+2M</h4>
                        <p class="mb-0 text-success"><span><i class="fa fa-caret-up mr-2"></i></span>80%</p>
                    </div>
                  </div>
              </div>
            </b-col>
          </b-row>
          <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between align-items-center">
              <div class="iq-header-title">
                  <h4 class="card-title">Top Rated Item </h4>
              </div>
              <div id="top-rated-item-slick-arrow"  class="slick-aerrow-block iq-rtl-direction">
                <button class="slick-prev slick-arrow" @click="prev()" id="slick-prev " aria-label="Previous" type="button" style="display: block;">Previous</button>
                <button class="slick-next slick-arrow" @click="next()" id="slick-next" aria-label="Next" type="button" style="display: block;">Next</button>
              </div>
            </div>
            <div class="iq-card-body">
              <Slick class="list-unstyled row top-rated-item mb-0 iq-rtl-direction" ref="dSlick" :option="option1">
                  <li v-for="(data,index) in topRated" :key="index" class="col-12 iq-rated-box">
                    <div class="iq-card mb-0">
                        <div class="iq-card-body p-0">
                          <div class="iq-thumb">
                              <a href="javascript:void(0)">
                                <img :src="data.thumbnail" class="img-fluid w-100 img-border-radius" alt="">
                              </a>
                          </div>
                          <div class="iq-feature-list">
                              <h6 class="font-weight-600 mb-0">{{data.title}}</h6>
                              <p class="mb-0 mt-2">{{data.type}}</p>
                              <div class="d-flex align-items-center my-2 iq-ltr-direction">
                                <p class="mb-0 mr-2"><i class="lar la-eye mr-1"></i>{{data.seenCount}}</p>
                                <p class="mb-0 "><i class="las la-download ml-2"></i>{{data.downloadCounts}}</p>
                              </div>
                          </div>
                        </div>
                    </div>
                  </li>
              </Slick>
            </div>
          </div>
        </b-col>
        <b-col lg="4">
          <div class="iq-card iq-card iq-card-block iq-card-stretch iq-card-height">
              <div class="iq-card-header">
                <div class="iq-header-title">
                    <h4 class="card-title text-center">User's Of Product</h4>
                </div>
              </div>
              <div class="iq-card-body pb-0">
                <ApexChart element="view-chart-01" :chartOption="chartOne"  />
                <div class="row mt-1">
                    <div class="col-sm-6 col-md-3 col-lg-6 iq-user-list">
                      <div class="iq-card">
                          <div class="iq-card-body">
                            <div class="media align-items-center">
                                <div class="iq-user-box bg-primary"></div>
                                <div class="media-body text-white">
                                  <p class="mb-0 font-size-14 line-height">New <br>
                                      Customer
                                  </p>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-6 iq-user-list">
                      <div class="iq-card">
                          <div class="iq-card-body">
                            <div class="media align-items-center">
                                <div class="iq-user-box bg-warning"></div>
                                <div class="media-body text-white">
                                  <p class="mb-0 font-size-14 line-height">Exsisting <br>
                                      Subscriber's
                                  </p>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-6 iq-user-list">
                      <div class="iq-card">
                          <div class="iq-card-body">
                            <div class="media align-items-center">
                                <div class="iq-user-box bg-info"></div>
                                <div class="media-body text-white">
                                  <p class="mb-0 font-size-14 line-height">Daily<br>
                                      Visitor's
                                  </p>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-6 iq-user-list">
                      <div class="iq-card">
                          <div class="iq-card-body">
                            <div class="media align-items-center">
                                <div class="iq-user-box bg-danger"></div>
                                <div class="media-body text-white">
                                  <p class="mb-0 font-size-14 line-height">Extented <br>
                                      Subscriber's
                                  </p>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </b-col>
    </b-row>
    <b-row>
        <b-col sm="12" lg="4">
          <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
              <div class="iq-card-header d-flex align-items-center justify-content-between">
                <div class="iq-header-title">
                    <h4 class="card-title">Categories</h4>
                </div>
              </div>
              <div class="iq-card-body p-0">
                 <ApexChart element="view-chart-03" :chartOption="categoryChart"  />
              </div>
          </div>
        </b-col>
        <b-col lg="8">
            <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
              <div class="iq-card-header d-flex align-items-center justify-content-between">
                <div class="iq-header-title">
                    <h4 class="card-title">Top Category</h4>
                </div>
                <div class="iq-card-header-toolbar d-flex align-items-center seasons">
                    <div class="iq-custom-select d-inline-block sea-epi s-margin">
                      <V-select :options="sessonOption" class="v-select" v-model="selected"></V-select>
                    </div>
                </div>
              </div>
              <div class="iq-card-body row align-items-center">
                <div class="col-lg-7">
                    <div class="row list-unstyled mb-0 pb-0">
                      <b-col class="col-sm-6 col-md-4 col-lg-6 mb-3">
                         <Progressbar :value="40" :verticle="true" color="primary" />
                          <div class="media align-items-center">
                            <div class="iq-icon-box-view rounded mr-3 iq-bg-primary"><i class="las la-film font-size-32"></i></div>
                            <div class="media-body text-white">
                                <h6 class="mb-0 font-size-14 line-height">Actions</h6>
                                <small class="text-primary mb-0">+34%</small>
                            </div>
                          </div>
                      </b-col>
                      <b-col sm="6" md="4" lg="6" class="mb-3">
                          <Progressbar :value="70" :verticle="true" color="secondary" />
                          <div class="media align-items-center">
                            <div class="iq-icon-box-view rounded mr-3 iq-bg-secondary"><i class="las la-laugh-squint font-size-32"></i></div>
                            <div class="media-body text-white">
                                <p class="mb-0 font-size-14 line-height">Comedy</p>
                                <small class="text-secondary mb-0">+44%</small>
                            </div>
                          </div>
                      </b-col>
                      <b-col  sm="6" md="4" lg="6" class="mb-3">
                          <Progressbar :value="40" :verticle="true" color="info" />
                          <div class="media align-items-center">
                            <div class="iq-icon-box-view rounded mr-3 iq-bg-info"><i class="las la-skull-crossbones font-size-32"></i></div>
                            <div class="media-body text-white">
                                <p class="mb-0 font-size-14 line-height">Horror</p>
                                <small class="text-info mb-0">+56%</small>
                            </div>
                          </div>
                      </b-col>
                      <b-col  sm="6" md="4" lg="6" class="mb-3">
                          <Progressbar :value="40" :verticle="true" color="warning" />
                          <div class="media align-items-center">
                            <div class="iq-icon-box-view rounded mr-3 iq-bg-warning"><i class="las la-theater-masks font-size-32"></i></div>
                            <div class="media-body text-white">
                                <p class="mb-0 font-size-14 line-height">Drama</p>
                                <small class="text-warning mb-0">+65%</small>
                            </div>
                          </div>
                      </b-col>
                      <b-col  sm="6" md="4" lg="6" class="mb-lg-0 mb-3">
                          <Progressbar :value="70" :verticle="true" color="success" />
                          <div class="media align-items-center mb-lg-0 mb-3">
                            <div class="iq-icon-box-view rounded mr-3 iq-bg-success"><i class="las la-child font-size-32"></i></div>
                            <div class="media-body text-white">
                                <p class="mb-0 font-size-14 line-height">Kids</p>
                                <small class="text-success mb-0">+74%</small>
                            </div>
                          </div>
                      </b-col>
                      <b-col  sm="6" md="4" lg="6" class="col-sm-6 col-md-4 col-lg-6  mb-lg-0 mb-3">
                          <Progressbar :value="80" :verticle="true" color="danger" />
                          <div class="media align-items-center">
                            <div class="iq-icon-box-view rounded mr-3 iq-bg-danger"><i class="las la-grin-beam font-size-32"></i></div>
                            <div class="media-body text-white">
                                <p class="mb-0 font-size-14 line-height">Thrilled</p>
                                <small class="text-danger mb-0">+40%</small>
                            </div>
                          </div>
                      </b-col>
                    </div>
                </div>
                <div class="col-lg-5">
                   <ApexChart  class="view-cahrt-02" element="view-chart-02" :chartOption="categoryChart2"   />
                </div>
              </div>
            </div>
        </b-col>
        <b-col sm="12">
          <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                  <h4 class="card-title">Recently Viewed Items</h4>
              </div>
              <div class="iq-card-header-toolbar d-flex align-items-center seasons">
                  <div class="iq-custom-select d-inline-block sea-epi s-margin">
                         <V-select :options="likeSection" v-model="likeSelected"></V-select>
                  </div>
              </div>
            </div>
            <div class="iq-card-body">
              <div class="table-responsive">
                  <table class="data-tables table movie_table" style="width:100%">
                    <thead>
                        <tr>
                          <th style="width:20%;">Movie</th>
                          <th style="width:10%;">Rating</th>
                          <th style="width:20%;">Category</th>
                          <th style="width:10%;">Download/Views</th>
                          <th style="width:10%;">User</th>
                          <th style="width:20%;">Date</th>
                          <th style="width:10%;"><i class="lar la-heart"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>
                              <div class="media align-items-center">
                                <div class="iq-movie">
                                    <a href="javascript:void(0);"><img src="../../assets/images/movie-thumb/01.jpg" class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                </div>
                                <div class="media-body text-white text-left ml-3">
                                    <p class="mb-0">Champions</p>
                                    <small>1h 40m</small>
                                </div>
                              </div>
                          </td>
                          <td><i class="lar la-star mr-2"></i> 9.2</td>
                          <td>Horror</td>
                          <td>
                              <i class="lar la-eye "></i>
                          </td>
                          <td>Unsubcriber</td>
                          <td>21 July,2020</td>
                          <td><i class="las la-heart text-primary"></i></td>
                        </tr>
                        <tr>
                          <td >
                              <div class="media align-items-center">
                                <div class="iq-movie">
                                    <a href="javascript:void(0);"><img src="../../assets/images/show-thumb/05.jpg" class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                </div>
                                <div class="media-body text-white text-left ml-3">
                                    <p class="mb-0">Last Race</p>
                                </div>
                              </div>
                          </td>
                          <td><i class="lar la-star mr-2"></i> 7.2</td>
                          <td>Horror</td>
                          <td>
                              <i class="lar la-eye "></i>
                          </td>
                          <td>subcriber</td>
                          <td>22 July,2020</td>
                          <td><i class="las la-heart text-primary"></i></td>
                        </tr>
                        <tr>
                          <td>
                              <div class="media align-items-center">
                                <div class="iq-movie">
                                    <a href="javascript:void(0);"><img src="../../assets/images/show-thumb/07.jpg" class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                </div>
                                <div class="media-body text-white text-left ml-3">
                                    <p class="mb-0">Boop Bitty</p>
                                </div>
                              </div>
                          </td>
                          <td><i class="lar la-star mr-2"></i> 8.2</td>
                          <td>Thriller</td>
                          <td>
                              <i class="lar la-eye "></i>
                          </td>
                          <td>Unsubcriber</td>
                          <td>23 July,2020</td>
                          <td><i class="las la-heart text-primary"></i></td>
                        </tr>
                        <tr>
                          <td>
                              <div class="media align-items-center">
                                <div class="iq-movie">
                                    <a href="javascript:void(0);"><img src="../../assets/images/show-thumb/10.jpg" class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                </div>
                                <div class="media-body text-white text-left ml-3">
                                    <p class="mb-0">Dino Land</p>
                                </div>
                              </div>
                          </td>
                          <td><i class="lar la-star mr-2"></i> 8.5</td>
                          <td>Action</td>
                          <td>
                              <i class="lar la-eye "></i>
                          </td>
                          <td>Unsubcriber</td>
                          <td>24 July,2020</td>
                          <td><i class="las la-heart text-primary"></i></td>
                        </tr>
                        <tr>
                          <td>
                              <div class="media align-items-center">
                                <div class="iq-movie">
                                    <a href="javascript:void(0);"><img src="../../assets/images/show-thumb/04.jpg" class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                </div>
                                <div class="media-body text-white text-left ml-3">
                                    <p class="mb-0">The Last Breath</p>
                                </div>
                              </div>
                          </td>
                          <td><i class="lar la-star mr-2"></i> 8.9</td>
                          <td>Horror</td>
                          <td>
                              <i class="lar la-eye "></i>
                          </td>
                          <td>subcriber</td>
                          <td>25 July,2020</td>
                          <td><i class="las la-heart text-primary"></i></td>
                        </tr>
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
        </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import ApexChart from '../../components/core/charts/ApexChart'
export default {
  name: 'Dashboard',
  mounted () {
    core.index()
    core.initDataTable()
  },
  components: {
    ApexChart
  },
  data () {
    return {
      selected: 1,
      likeSelected: 1,
      sessonOption: [
        { id: 1, value: 'today', text: 'Today' },
        { id: 2, value: 'week', text: 'This Week' },
        { id: 3, value: 'month', text: 'This Month' }
      ],
      likeSection: [
        { id: 1, value: 'like', text: 'Most Likely' },
        { id: 2, value: 'unlike', text: 'Unlikely' }
      ],
      option1: {
        slidesToShow: 4,
        speed: 300,
        slidesToScroll: 1,
        focusOnSelect: true,
        appendArrows: document.getElementById('top-rated-item-slick-arrow'),
        responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 798,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            arrows: true,
            autoplay: true,
            slidesToShow: 1
          }
        }]
      },
      topRated: [
        {
          thumbnail: require('../../assets/images/dashboard/04.jpg'),
          title: 'Last Race',
          type: 'Tv show',
          downloadCounts: '30k',
          seenCount: '120'
        },
        {
          thumbnail: require('../../assets/images/dashboard/05.jpg'),
          title: 'The Last Breath',
          type: 'Tv show',
          downloadCounts: '10k',
          seenCount: '135'
        },
        {
          thumbnail: require('../../assets/images/dashboard/06.jpg'),
          title: 'Last Night',
          type: 'Tv show',
          downloadCounts: '5k',
          seenCount: '100'
        },
        {
          thumbnail: require('../../assets/images/dashboard/01.jpg'),
          title: 'Jeon Woochie',
          type: 'Tv show',
          downloadCounts: '2k',
          seenCount: '500'
        },
        {
          thumbnail: require('../../assets/images/dashboard/04.jpg'),
          title: 'Last Race',
          type: 'Tv show',
          downloadCounts: '30k',
          seenCount: '120'
        },
        {
          thumbnail: require('../../assets/images/dashboard/05.jpg'),
          title: 'The Last Breath',
          type: 'Tv show',
          downloadCounts: '10k',
          seenCount: '135'
        },
        {
          thumbnail: require('../../assets/images/dashboard/06.jpg'),
          title: 'Last Night',
          type: 'Tv show',
          downloadCounts: '5k',
          seenCount: '100'
        },
        {
          thumbnail: require('../../assets/images/dashboard/01.jpg'),
          title: 'Jeon Woochie',
          type: 'Tv show',
          downloadCounts: '2k',
          seenCount: '500'
        }
      ],
      chartOne: {
        series: [44, 55, 30, 30],
        chart: {
          width: 250,
          type: 'donut'
        },
        colors: ['#e20e02', '#f68a04', '#007aff', '#545e75'],
        labels: ['New Customer', "Exsisting Subscriber's", "Daily Visitor's", "Extented Subscriber's"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false,
          width: 0
        },
        legend: {
          show: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      categoryChart: {
        series: [{
          name: 'This Month',
          data: [44, 55, 30, 60]
        }, {
          name: 'Last Month',
          data: [35, 41, 20, 40]
        }],
        colors: ['#e20e02', '#007aff'],
        chart: {
          type: 'bar',
          height: 230,
          foreColor: '#D1D0CF'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['a', 'b', 'c', 'd']
        },
        yaxis: {
          title: {
            text: ''
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          enabled: false,
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      },
      categoryChart2: {

        series: [44, 30, 20, 43, 22, 20],
        chart: {
          width: 250,
          type: 'donut'
        },
        colors: ['#e20e02', '#83878a', '#007aff', '#f68a04', '#14e788', '#545e75'],
        labels: ['Actions', 'Comedy', 'Harror', 'Drama', 'Kids', 'Thrilled'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false,
          width: 0
        },
        legend: {
          show: false,
          formatter: function (val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex]
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    }
  },
  methods: {
    next () {
      this.$refs.dSlick.next()
    },
    prev () {
      this.$refs.dSlick.prev()
    }

  }
}
</script>
