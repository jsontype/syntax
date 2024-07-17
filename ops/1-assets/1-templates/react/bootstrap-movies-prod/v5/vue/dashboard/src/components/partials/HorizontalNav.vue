<template>
  <ul class="iq-nav-menu list-unstyled">
    <li v-for="(mainMenu, mainKey) in menuOptions" :key="mainKey" :class="`nav-item ${mainMenu.active ? 'active' : ''}`">
      <template v-if="mainMenu.children && mainMenu.children.length > 0">
        <a :class="`nav-link menu-arrow justify-content-start ${mainMenu.active || route.path === '/show-list' || route.path === '/seasons' || route.path === '/episodes' ? 'active' : ''}`" :aria-expanded="activeMenu === mainMenu.name" role="button" @click="toggleCollapse(mainMenu.name)">
          {{ $t(mainMenu.name) }}
          <i class="right-icon">
            <svg class="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </i>
        </a>
        <ul v-if="mainMenu.children && mainMenu.children.length > 0" :id="$t(mainMenu.name)" :class="{ 'iq-header-sub-menu': true, 'list-unstyled': true, collapse: activeMenu !== mainMenu.name, show: activeMenu === mainMenu.name }">
          <li v-for="(first, firstKey) in mainMenu.children" :key="firstKey" class="nav-item">
            <template v-if="!checkArrLength(first.children)">
              <router-link class="nav-link" :to="first.route">{{ $t(first.name) }}</router-link>
            </template>
            <template v-else>
              <a class="nav-link menu-arrow" :aria-expanded="activeSubMenu === first.name" role="button" @click="toggleCollapse(first.name)">
                {{ first.name }}
                <i class="right-icon">
                  <i class="fa-solid fa-chevron-right"></i>
                </i>
              </a>
              <ul :id="first.name" :class="{ 'iq-header-sub-menu': true, 'list-unstyled': true, collapse: activeSubMenu !== first.name, show: activeSubMenu === first.name }">
                <li v-for="(second, secondKey) in first.children" :key="secondKey" class="nav-item">
                  <template v-if="!checkArrLength(second.children)">
                    <router-link class="nav-link" :to="second.route">{{ second.name }}</router-link>
                  </template>
                  <template v-else>
                    <a class="nav-link menu-arrow" :aria-expanded="activeSubSubMenu === second.name" role="button" @click="toggleCollapse(second.name)">
                      {{ second.name }}
                    </a>
                    <ul :id="second.name" :class="{ 'iq-header-sub-menu': true, 'list-unstyled': true, collapse: activeSubSubMenu !== second.name, show: activeSubSubMenu === second.name }">
                      <li v-for="(three, threeKey) in second.children" :key="threeKey" class="nav-item">
                        <template v-if="!checkArrLength(three.children)">
                          <template v-if="three.type && three.type == 'modal'">
                            <a class="nav-link" @click="showPopup(three.route)">{{ three.name }}</a>
                          </template>
                          <template v-else>
                            <router-link class="nav-link" :to="three.route">{{ three.name }}</router-link>
                          </template>
                        </template>
                      </li>
                    </ul>
                  </template>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </template>
      <router-link v-else :class="`nav-link menu-arrow justify-content-start ${mainMenu.active ? 'active' : ''}`" :to="mainMenu.route">
        <span class="nav-text">{{ $t(mainMenu.name) }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import _ from 'lodash';
import { useRoute } from 'vue-router';

const route = useRoute();

const menuOptions = ref([
  {
    name: 'header.home',
    route: { name: 'dashboard.home' },
  },
  {
    name: 'header.movie_list',
    route: { name: 'dashboard.movie-list' },
  },
  {
    name: 'header.tv_shows',
    children: [
      { name: 'header.show_list', route: { name: 'tv-shows.show-list' } },
      { name: 'header.seasons', route: { name: 'show-list.seasons' } },
      { name: 'header.episodes', route: { name: 'show-list.episodes' } },
    ],
  },
]);

let activeMenu = ref(null);
let activeSubMenu = ref(null);
let activeSubSubMenu = ref(null);

const checkArrLength = (arr) => {
  if (_.isArray(arr)) {
    return true;
  }
  return false;
};

function toggleCollapse(name) {
  if (activeMenu.value === name) {
    activeMenu.value = null;
  } else {
    activeMenu.value = name;
  }
}
</script>

<style lang="scss" scoped></style>
