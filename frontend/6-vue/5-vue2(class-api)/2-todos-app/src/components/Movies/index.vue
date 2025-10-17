<template>
  <div class="hello">
    <h1 @click="handleClick()">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Movies extends Vue {
  @Prop() private title!: string;

  private handleClick() {
    this.$emit("click");
  }
}
</script>

<style scoped>
h1 {
  cursor: pointer;
  color: #42b983;
  transition: all 0.3s ease;
  margin: 40px 0;
  padding: 20px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: linear-gradient(45deg, #f8f9fa, #e9ecef);
}

h1:hover {
  color: #2c3e50;
  background: linear-gradient(45deg, #42b983, #369870);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.3);
}

h1:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(66, 185, 131, 0.5);
}

.hello {
  padding: 20px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
