<template>
  <div>
    <label for="">Name</label>
    <input
      type="text"
      :value="name"
      style="padding: 30px; border: 2px solid green"
      @input="updateName"      
    />
      <!-- 메소드를 쓰지 않고 아래처럼 해도 돼요.
      1. 위 부분을 @input="$emit('update-name', e.target.value)" 로 변경
      1. Home.vue의 updateName () 삭제하고, 
      1. Home.vue의 <template></template>안 @update-name="name = $event.target.value" 으로 수정 -->

  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateName(e) {
      console.log(e.target.value) // 칠때마다 콘솔로그에 값이 출력이 됩니다.
      this.$emit('update-name', e.target.value) // 부모 컴포넌트로 원하는 값을 ''내의 함수를 통해 템플릿에 올려보냅니다.
      // update-name 이라는 함수명은 Home.vue에 넣어줍니다.
      // * 왜 뷰JS상의 메소드명과 다르게 update-name으로 하냐고요?
        // 템플릿(html)안에서는 옵션을 넣을 때 소문자로만 넣기 때문이에요!
    }
  }
};
</script>
