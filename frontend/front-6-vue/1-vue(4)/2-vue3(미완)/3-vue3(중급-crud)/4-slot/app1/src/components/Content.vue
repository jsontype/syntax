<template>
  <div>
    <h1>Header : {{ title }}</h1>

    <!-- 1. 원하는 HTML코드를 불러와서 넣고 싶을 때 Slot을 사용합니다. views/About에서 불러옵니다. -->
    <slot></slot>

    <p>Body : {{ name }}</p>

    <!-- 1. slot안에 name과 부모의 v-slot을 연동해주면 두군데에 slot을 설치하는 것도 가능해요 -->
    <slot name="body"></slot>

    <p>Footer</p>
    <br />
    <button @click="updateName">update</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "default title",
    },
    name: {
      type: String,
      default: "default name",
    },
  },
  data() {
    return {
    };
  },
  methods: {
    updateName() {
      this.name = "Data Updated";
    },
  },
};
</script>
