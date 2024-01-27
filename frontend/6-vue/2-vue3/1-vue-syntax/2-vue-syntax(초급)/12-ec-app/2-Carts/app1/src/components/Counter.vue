<template>
  <div>
    <div class="countBtns">
      <button class="counterBtn" @click="add(props.price)">+</button>
      <button class="counterBtn" @click="minus(props.price)">-</button>
    </div>
    <div>수량: {{ count }}</div>
    <div>예상 가격: $ {{ predictedPrice }}</div>
  </div>

</template>

<script setup>
import { ref, defineEmits } from 'vue'

const count = ref(0)
const predictedPrice = ref(0)

const emit = defineEmits(['changeCount'])

const props = defineProps({
  price: Number
})

function add (price) {
  count.value++
  predictedPrice.value = props.price * count.value
  emit("changeCount", "+")
}

function minus (price) {
  count.value > 0 && count.value--
  predictedPrice.value = props.price * count.value
  emit("changeCount", "-")
}
</script>

<style scoped>
.countBtns {
  margin-bottom: 10px
}

.counterBtn {
  width: 30px;
}
</style>
