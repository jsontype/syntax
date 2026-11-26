<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>Vue2 + Vuetify2 App</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/">
        <v-icon left>mdi-home</v-icon>
        Home
      </v-btn>

      <v-btn text to="/about">
        <v-icon left>mdi-information</v-icon>
        About
      </v-btn>

      <v-btn text to="/movies">
        <v-icon left>mdi-movie</v-icon>
        Movies
      </v-btn>

      <v-btn text to="/todos">
        <v-icon left>mdi-check-circle</v-icon>
        Todos
      </v-btn>

      <v-btn text to="/shop">
        <v-icon left>mdi-shopping</v-icon>
        Shop
      </v-btn>

      <v-btn text to="/cart">
        <v-icon left>mdi-cart</v-icon>
        Cart
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app color="primary" dark>
      <v-spacer></v-spacer>
      <div>
        &copy; 2025 양동화 프로젝트. Made with ❤️ using Vue.js + Vuetify
      </div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator"

export default Vue.extend({
  name: "App",
})
</script>

<style>
/* Vuetify provides all necessary styles */
</style>
