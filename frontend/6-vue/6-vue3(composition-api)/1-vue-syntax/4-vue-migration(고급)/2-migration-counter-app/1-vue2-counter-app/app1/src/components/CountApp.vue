<script>
export default {
  // data() で返すプロパティはリアクティブな状態になり、
  // `this` 経由でアクセスすることができます。
  data() {
    return {
      count: 0
    }
  },

  // メソッドの中身は、状態を変化させ、更新をトリガーさせる関数です。
  // 各メソッドは、テンプレート内のイベントハンドラーにバインドすることができます。
  methods: {
    increase() {
      this.count++
    },
    decrease() {
      this.count--
    }
  },

  // Life Cycle Hookは、コンポーネントのライフサイクルの
  // 特定のステージで呼び出されます。
  // 以下の関数は、コンポーネントが「マウント」されたときに呼び出されます。
  created() {
    console.log(`生まれた！`)  
  },
  mounted() {
    console.log(`更新された！`)
  },
  updated() {
    console.log(`成長した！: ${this.count}`)
  },
  destroyed() {
    console.log(`死んだ！`)
  },
}
</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>
