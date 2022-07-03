<template>
  <div class="about">
    <h1>This is an about page</h1>

    <!-- props1 -->
    <!-- <Content title="about title" /> -->

    <!-- props2 -->
    <!-- 타이틀 지정안한 경우 default 가 뜨게함 -->
    <Content />
  </div>
</template>

<script>
import Content from "@/components/Content.vue";
export default {
  components: {
    Content,
  },
};
</script>
