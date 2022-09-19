// states
const state = {
  // *** TODO: 디비로부터 불러오기 처리, 나중에 전체 wordsList 추가해서 헤더.vue의 데이터 드롭다운 메뉴에서 추가하기 눌렀을때 생성및 커런트도 변경처리!!
  wordsList: [],
  currentWordsList: {},
};

// mutations
const mutations = {
  addWordsList(state, item) {
    state.wordsList.push({
      ...item,
    });
  },
  setWordsList(state, item) {
    state.wordsList = item;
  },
  setCurrentWordsList(state, item) {
    state.currentWordsList = item;
  },
};

// getters
const getters = {
  // 단어장리스트 데이터
  getWordsList: (state) => {
    return state.wordsList;
  },
  getWordsListItem: (state) => (key) => {
    return state.wordsList[key];
  },
  // 현재 적용된 단어리스트
  getCurrentWordsList: (state) => {
    return state.currentWordsList;
  },
  getCurrentWordsListItem: (state) => (key) => {
    return state.currentWordsList[key];
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
