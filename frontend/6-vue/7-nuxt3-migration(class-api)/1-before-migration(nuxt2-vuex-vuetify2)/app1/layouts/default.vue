<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
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
import { Component, Vue } from "vue-property-decorator";
import { mapActions } from "vuex";

@Component({
  name: "DefaultLayout",
  methods: {
    ...mapActions(["loadTodosFromStorage", "loadCartFromStorage"]),
  },
})
export default class DefaultLayout extends Vue {
  // Vuex actions
  loadTodosFromStorage!: () => void;
  loadCartFromStorage!: () => void;

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
    // Load data from localStorage on app start
    await this.loadTodosFromStorage();
    await this.loadCartFromStorage();
  }
}
</script>
