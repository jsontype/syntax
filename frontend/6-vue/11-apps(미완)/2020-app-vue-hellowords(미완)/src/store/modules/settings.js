// *** TODO: 현재 settings는 모델을 안쓰고 있음. 추후 사용하도록 연결할 것(?)

// states
const state = {
  settingsList: {
    settingsDelay: { name: "3초마다 변경(자동)", value: 3 },
    settingsTheme: { name: "도시 배경", value: "hero3" },
    settingsFontSize: { name: "100px", value: "100px" },
    settingsFont: { name: "폰트셋1", value: "font1" },
    settingsFontAColor: { name: "A: 하얀 텍스트", value: "white" },
    settingsFontBColor: { name: "B: 노란 텍스트", value: "yellow" },
    settingsDelimiter: { name: '";"로 구분', value: ";" },
    settingsAVoice: { name: "A: 일본어 음성", value: "ja-JP" },
    settingsBVoice: { name: "B: 한국어 음성", value: "ko-KR" },
    settingsVoiceSpeed: { name: "중간 속도", value: 1.0 },
    settingsVoiceTone: { name: "중간 톤", value: 1 },
    settingsAuto: { name: "수동", value: false },
  },
};

// mutations
const mutations = {
  /**
   * 단어리스트를 설정
   * @param {Array<Object>} settingsDelay 출력할 단어 리스트
   */
  setSettingsDelay(state, value) {
    state.settingsList.settingsDelay = value;
  },
  setSettingsTheme(state, value) {
    state.settingsList.settingsTheme = value;
  },
  setSettingsFontSize(state, value) {
    state.settingsList.settingsFontSize = value;
  },
  setSettingsFont(state, value) {
    state.settingsList.settingsFont = value;
  },
  setSettingsFontAColor(state, value) {
    state.settingsList.settingsFontAColor = value;
  },
  setSettingsFontBColor(state, value) {
    state.settingsList.settingsFontBColor = value;
  },
  setSettingsDelimiter(state, value) {
    state.settingsList.settingsDelimiter = value;
  },
  setSettingsAVoice(state, value) {
    state.settingsList.settingsAVoice = value;
  },
  setSettingsBVoice(state, value) {
    state.settingsList.settingsBVoice = value;
  },
  setSettingsVoiceSpeed(state, value) {
    state.settingsList.settingsVoiceSpeed = value;
  },
  setSettingsVoiceTone(state, value) {
    state.settingsList.settingsVoiceTone = value;
  },
  setSettingsAuto(state, value) {
    state.settingsList.settingsAuto = value;
  },
};

// getters
const getters = {
  getSettingsList: (state) => {
    return state.settingsList;
  },
  getSettingsListItem: (state) => (key) => {
    return state.settingsList[key];
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
