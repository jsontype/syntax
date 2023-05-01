<!-- HTML 코드가 들어가는 부분 -->
<template>
  <div>
    <h1>This is home.</h1>

    <form action="">
      <InputField :name="name" @update-name="updateName"/>
      <br><button>Submit</button>
    </form>
    {{ name }}
  </div>
</template>

<!-- Vue JS 코드가 들어가는 부분 -->
<script>
import InputField from "@/components/InputField.vue";

export default {
  components: {
    InputField,
  },
  data() {
    return {
      name: 'D.Yang',
    };
  },

  // <!-- App6 생명주기 START -->
  beforeCreate() { 
    console.log('beforeCreate', this.name) // 아직 data()에 접근 불가해요.
  },

  created() {
    console.log('create', this.name) // ★가장 자주 사용해요! 이제 data()에 접근 가능해져요.
  },

  beforeMount() {
    alert('beforeMount') // DOM 마운트 전에 얼럿이 떠서, div id=app은 아직 뜨지 않아요.
  },

  mounted() {
    alert('mounted') // DOM 마운트 후에 얼럿이 떠서, 여기서부터 DOM에 접근이 가능해지므로, DOM을 컨트롤 하고싶으면 여기서 하면된다. 쉽게말해, 여기 ok를 누르는 순간 <div id=app></div> 부분이 뜨게 돼요.
                    // DOM이란? : 문서의 개체모델(HTML 내에 들어있는 요소를 div를 이용해 구조화 객체 모델로 표현하는 양식)
                    // Virtual DOM이란? : vue나 react에서 화면을 그리는 비용(렌더링계산)을 줄이기 위해 복사본을 메모리 내에 저장해서(* 그래서, npm run serve를 끄더라도 브라우저상에 데이타가 남아있는거에요) 사용하는 방식의 가상 돔을 의미해요. 기존 돔보다 빨라요.
  },

  beforeUpdated() {
    alert('beforeUpdated') // Submit을 눌렀을 때 데이터가 바뀌는데, 바뀌기전에 이 훅이 실행돼요.
  },

  updated() {
    alert('updated') // 데이터가 바뀐 후에 이 훅이 실행됨, ok를 누르면 this.name이 바뀔 거에요.
  },

  beforeDestroy () {
    alert('beforeDestroy') // Home.vue 컴포넌트에서 About.vue로 컴포넌트로 넘어가게 되면, 
                        // 지금 페이지가 없어지고 About 페이지가 들어오게 될 건데, 이 때 Home을 끄기 전에 실행됩니다.
  },

  destroyed () {
    alert('destroyed') // Home을 끈 뒤 실행됩니다. 이벤트리스너(클릭내용, 카피페 클립보드 등)를 삭제해준다던지, 데이터를 초기화해준다던지 등을 처리해주면 될 것 같아요.
  },

  methods: {
    updateName(name) {
      this.name = name
    }
  }

};
</script>

<!-- CSS코드가 들어가는 부분 -->
<style scoped>
h1 {
  color: red;
}
</style>
