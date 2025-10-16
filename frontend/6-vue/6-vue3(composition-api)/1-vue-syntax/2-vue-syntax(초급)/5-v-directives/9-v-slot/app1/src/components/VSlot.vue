<template>
  <div>
    <!-- Title Slot -->
    <div class="slotTitle">
      <slot name="title"></slot>
    </div>

    <!-- 
      Default Slot : 
        slot name="default"는 아래와 같이 생략 가능하다. 
        또, 클래스가 굳이 필요없다면 slot을 div로 감싸지 않아도 된다.
    -->
    <slot></slot>

    <!-- Added Slot -->
    <div class="slotAdded">
      <slot name="added"></slot>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slotTitle {
  font-size: 24px;
  font-weight: bold;
}
.slotDefault {
  font-size: 16px;
  color: black;
}
.slotAdded {
  font-size: 12px;
  color: gray;
}
</style>
