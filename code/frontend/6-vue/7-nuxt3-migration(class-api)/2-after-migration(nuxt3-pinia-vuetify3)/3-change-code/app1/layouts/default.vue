<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :rail="miniVariant"
      :clipped="clipped"
      permanent
      app
    >
      <v-list density="compact" nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          :value="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon="mdi-chevron-left" @click.stop="miniVariant = !miniVariant" />
      <v-btn icon="mdi-application" @click.stop="clipped = !clipped" />
      <v-btn icon="mdi-minus" @click.stop="fixed = !fixed" />
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <v-spacer />
      <v-btn icon="mdi-menu" @click.stop="rightDrawer = !rightDrawer" />
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <v-navigation-drawer v-model="rightDrawer" location="right" temporary>
      <v-list>
        <v-list-item @click="right = !right">
          <template #prepend>
            <v-icon>mdi-repeat</v-icon>
          </template>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

@Component({
  name: "DefaultLayout",
})
export default class DefaultLayout extends Vue {
  // Data properties
  private clipped = false;
  private drawer = false;
  private fixed = false;
  private miniVariant = false;
  private right = true;
  private rightDrawer = false;
  private title = "Todo & Movie & Shopping App";

  private items = [
    {
      icon: "mdi-home",
      title: "홈",
      to: "/",
    },
    {
      icon: "mdi-information",
      title: "어바웃",
      to: "/about",
    },
    {
      icon: "mdi-movie",
      title: "무비",
      to: "/movie",
    },
    {
      icon: "mdi-check-circle",
      title: "투두",
      to: "/todo",
    },
    {
      icon: "mdi-shopping",
      title: "쇼핑",
      to: "/shopping",
    },
    {
      icon: "mdi-cart",
      title: "카트",
      to: "/cart",
    },
  ];

  // Lifecycle hooks
  async mounted() {
    // Load data from localStorage on app start - Nuxt3에서는 이 방법으로 접근
    // await $store.dispatch("loadTodosFromStorage");
    // await $store.dispatch("loadCartFromStorage");

    // 임시로 주석 처리 - store 연결 후 활성화
    console.log("Layout mounted - store actions will be implemented");
  }
}
</script>
