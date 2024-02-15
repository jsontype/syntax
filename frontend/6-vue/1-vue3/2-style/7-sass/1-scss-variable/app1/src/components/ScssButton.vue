<template>
  <div>
    <button class="Button">버튼</button>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '@/styles/resources.scss';

.Button {
  background: $blue;
  &:hover {
    background: lighten($blue, 10%);
  }
  &:active {
    background: darken($blue, 10%);
  }
}
</style>
