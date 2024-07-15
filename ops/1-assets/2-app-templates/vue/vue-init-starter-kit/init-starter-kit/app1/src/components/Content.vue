<template>
  <div>
    <p>Hello {{ name }}</p><br>
    <button @click="updateName">Button</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Vue3',
    }
  },
  methods: {
    updateName() {
      this.name = 'Button Clicked'
    }
  }
}
</script>
