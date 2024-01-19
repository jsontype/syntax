<template>
  <div>
    <h1>로컬스토리지 설정</h1>
    <button @click="saveData">데이터 저장하기</button>
    <button @click="deleteData">데이터 삭제하기</button>
    <button @click="clearData">데이터 전체 삭제하기</button>
    <button @click="loadData">데이터 호출!</button>
    <p>결과: {{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: ''
    };
  },
  methods: {
    saveData() {
      localStorage.setItem('myKey', 'myValue');
      this.result = '데이터 저장됨 (myKey안에 myValue 문자열 저장)';
    },
    loadData() {
      this.result = localStorage.getItem('myKey') || '저장된 데이터 없음';
    },
    deleteData() {
      localStorage.removeItem('myKey');
      this.result = '데이터 삭제됨 (myKey안에 있는 데이터를 삭제)';
    },
    clearData() {
      localStorage.clear();
      this.result = '데이터 삭제됨 (모든 localStorage 데이터 삭제)';
    }
  }
};
</script>

<style scoped>
button {
  display: block;
}
</style>
