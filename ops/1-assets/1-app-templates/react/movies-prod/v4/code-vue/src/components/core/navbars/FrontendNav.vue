<template>
  <!-- TOP Nav Bar -->
<header id="main-header">
   <div class="main-header">
      <b-container fluid>
         <b-row >
            <b-col sm="12">
               <nav class="navbar navbar-expand-lg navbar-light p-0">
                  <a href="javascript:void(0)" class="navbar-toggler c-toggler collapsed" @click="openSidebar">
                  <div class="navbar-toggler-icon" data-toggle="collapse">
                    <span class="navbar-menu-icon navbar-menu-icon--top"></span>
                    <span class="navbar-menu-icon navbar-menu-icon--middle"></span>
                    <span class="navbar-menu-icon navbar-menu-icon--bottom"></span>
                  </div>
                 </a>
                  <router-link class="navbar-brand" :to="homeURL"> <img class="img-fluid logo" :src="logo" alt="streamit" /></router-link>
                  <div class="mobile-more-menu">
                     <b-navbar-toggle target="dropdownMenuButton" class="more-toggle">
                        <i class="ri-more-line"></i>
                     </b-navbar-toggle>
                     <b-collapse id="dropdownMenuButton" class="more-menu">
                        <div class="navbar-right position-relative">
                             <slot name="responsiveRight"/>
                        </div>
                     </b-collapse>
                  </div>
                  <b-collapse id="navbarSupportedContent" is-nav :visible="sidebar">
                     <div class="menu-main-menu-container">
                        <ul id="top-menu" class="navbar-nav ml-auto">
                           <li v-for="(item,index) in items" :key="index" class="menu-item">
                              <router-link :to="item.link">{{item.title}}</router-link>
                              <ul class="sub-menu" v-if="item.child">
                                 <li class="menu-item" v-for="(childitem,childindex) in item.children" :key="childindex">
                                    <router-link :to="childitem.link">{{childitem.title}}</router-link>
                                    <ul class="sub-menu" v-if="childitem.grandchild">
                                       <li class="menu-item" v-for="(grandchilditem,grandchildindex) in childitem.children" :key="grandchildindex">
                                          <router-link :to="grandchilditem.link">{{grandchilditem.title}}</router-link>
                                       </li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </div>
                  </b-collapse>
                  <div class="navbar-right menu-right">
                     <slot name="responsiveRight"/>
                  </div>
               </nav>
            </b-col>
         </b-row>
      </b-container>
   </div>
</header>
  <!-- TOP Nav Bar END -->
</template>
<script>
import { core, APPLOGONAME } from '../../../config/pluginInit'
export default {
  name: 'FrontendNav',
  props: {
    homeURL: { type: Object, default: () => ({ name: 'dashboard.home-1' }) },
    logo: { type: String, default: require('../../../assets/images/logo.png') },
    items: { type: Array },
    userprofile: { type: String }
  },
  data () {
    return {
      appName: APPLOGONAME,
      sidebar: false
    }
  },
  mounted () {
    core.index()
  },
  methods: {
    openSidebar () {
      if (this.sidebar === false) {
        document.getElementsByTagName('body')[0].classList.add('nav-open')
        this.sidebar = true
      } else {
        document.getElementsByTagName('body')[0].classList.remove('nav-open')
        this.sidebar = false
      }
    }
  }
}
</script>
