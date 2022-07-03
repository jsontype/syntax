<template>
  <div id="app">
    <ToolBar></Toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue"
export default {
  components: {
    ToolBar,
  }
}
</script>