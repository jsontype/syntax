<template>
  <div>
    <h2 class="title">상품목록</h2>
    <div>
      <div v-for="item in items" :key="item.id">
        {{ item.name }} ${{ item.price }}
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  { id: 1, name: "토마토", price: 5 },
  { id: 2, name: "파스타", price: 30 },
  { id: 3, name: "코코넛", price: 7 }
]
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: bold;
}
</style>

<style>
.title {
  color: gray;
}

.item {
  color: gray;
  font-size: 14px;
}

.item:hover {
  color: pink;
}
</style>
