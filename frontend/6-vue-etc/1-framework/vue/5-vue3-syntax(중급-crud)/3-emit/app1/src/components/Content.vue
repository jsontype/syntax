<!-- 자식 컴포넌트 -->
<template>
  <div>
    <!-- props1 -->
    <h1>{{ title }}</h1>

    <p>{{ name }}</p>
    <br />
    <button @click="updateName">update</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      // props1
      type: String, // 문자열만 받게 돼요. number타입을 보내면 에러가 뜨게 돼요.
      //   required: true, // 필수값이 되어서, 없으면 에러가 뜨게 돼요.
      //   required: false,

      // props2
      default: "default title",
    },
    // props3
    name: {
      type: String,
      default: "default name",
    },
  },
  data() {
    return {
      // props3 : 아래 주석화
      //   name: "Data",
    };
  },
  methods: {
    // prop3를 진행하게 되어도 아래의 코드는 실행된다.
    // 그러나, 자식콤포넌트의 name을 변경할 때 부모도 바뀌게 되는 상황이 되면,
    // 뷰가 헷갈려해서 콘솔에 warning이 뜬다.
    // 부모에게 event를 보내서 바꿔달라고 요청하는게 좋다. 이제 emit이 필요한 때이다.
    updateName() {
      this.name = "Data Updated";
    },
  },
};
</script>
