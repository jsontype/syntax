<template>
  <div>
    <button class="Button1">버튼</button>
    <button class="Button2">버튼</button>
    <button class="Button3">버튼</button>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '@/styles/resources.scss';

.Button1 {
  @include button-color($blue);
}

.Button2 {
  @include button-color($red);
}

.Button3 {
  @include button-color($gray);
}
</style>
