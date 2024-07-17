import { createSlice } from "@reduxjs/toolkit";
import { initialState, defaultState } from "./state";
import {
  updateHtmlAttr,
  updateStorage,
  updateDomValueBySetting,
  getStorage,
} from "../../utilities/setting";
import _ from "lodash";
const DefaultSetting = defaultState.setting;

const createSettingObj = (state) => {
  return {
    saveLocal: state.saveLocal,
    storeKey: state.storeKey,
    setting: _.cloneDeep(state.setting),
  };
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSetting: (state, action) => {
      const json = getStorage(state.storeKey);
      if (json === "none") state.saveLocal = "none";
      if (json !== null && json !== "none") {
        state.saveLocal = json.saveLocal;
        state.setting = json.setting;
      }
      updateDomValueBySetting(state.setting);
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
    reset_state: (state, action) => {
      state.setting = defaultState.setting;
      updateDomValueBySetting(state.setting);
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
    saveLocal: (state, action) => {
      if (typeof action.payload !== typeof undefined) {
        state.saveLocal = action.payload;
      }
      const settingObj = {
        saveLocal: state.saveLocal,
        storeKey: state.storeKey,
        setting: _.cloneDeep(state.setting),
      };
      updateStorage(state.saveLocal, state.storeKey, settingObj);
    },
    theme_scheme_direction: (state, action) => {
      if (typeof action.payload !== typeof undefined) {
        state.setting.theme_scheme_direction.value = action.payload;
      }
      updateHtmlAttr({
        prop: "dir",
        value: state.setting.theme_scheme_direction.value,
      });
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
    theme_color: (state, action) => {
      if (typeof action.payload !== typeof undefined) {
        state.setting.theme_color.value = action.payload;
      }
      updateHtmlAttr({
        prop: "data-bs-theme",
        value: state.setting.theme_color.value,
      });
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
  },
});

export default settingSlice.reducer;
