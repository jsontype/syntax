<template>
  <div>
    <h1>No Reactive</h1>
    <p>{{ obj }}</p>
    <p>{{ arr }}</p>
    <button @click="changeObj">Change Obj?</button>
    <button @click="changeArr">Change Arr?</button>
  </div>
</template>

<script setup>
// 아래처럼 객체나 배열을 정의하고, 이를 DOM에 바인딩하면 
// "변화를 인식하고 이에 반응해서" DOM을 변경할 수 없다.
const obj = {
  foo: 'foo',
  bar: 'bar',
}
const arr = [1, 2, 3]

const changeObj = () => {
  obj.foo = 'FOO'
  obj.bar = 'BAR'
}

const changeArr = () => {
  arr.push(4)
}
</script>

<style lang="scss" scoped>
</style>
