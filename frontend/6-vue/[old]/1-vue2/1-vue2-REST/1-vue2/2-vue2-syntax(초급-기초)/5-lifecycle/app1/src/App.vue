<template>
  <div>
    <h1>This is home.</h1>
    <form action="">
      <InputField :name="name" @update-name="updateName" />
      <button>Submit</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
import InputField from "@/components/InputField.vue"

export default {
  name: "App",
  components: {
    InputField,
  },
  data() {
    return {
      name: 'D.Yang',
    }
  },

  // <!-- 생명주기 START -->
  beforeCreate() {
    console.log('beforeCreate', this.name) // inital mount 전 : 아직 data()에 접근 불가
  },
  created() {
    console.log('create', this.name) // inital mount 후 : 이제 data()에 접근 가능해짐
  },

  beforeMount() {
    alert('beforeMount') // DOM 마운트 전에 얼럿이 뜸
  },
  mounted() {
    alert('mounted') // DOM 마운트 후에 얼럿이 뜸
  },

  beforeUpdated() {
    alert('beforeUpdated') // Submit을 눌렀을 때 데이터가 바뀌는데, 바뀌기전에 이 훅이 실행됨
  },
  updated() {
    alert('updated') // 데이터가 바뀐 후에 이 훅이 실행됨, ok를 누르면 this.name이 바뀜
  },

  beforeDestroy() {
    alert('beforeDestroy') // 타 vue 컴포넌트로 넘어가게 되면 실행
  },
  destroyed() {
    alert('destroyed') // Home을 끈 뒤 실행. 이벤트리스너(클릭내용, 카피페 클립보드 등)를 삭제해준다던지, 데이터를 초기화해준다던지 등을 처리할 때 사용
  },

  methods: {
    updateName(name) {
      this.name = name
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
