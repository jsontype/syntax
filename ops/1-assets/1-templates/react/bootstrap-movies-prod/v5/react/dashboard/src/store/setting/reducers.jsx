import { createSlice } from "@reduxjs/toolkit";
import { initialState, defaultState } from "./state";
import {
  updateThemeScheme,
  updateBodyClass,
  updateHtmlClass,
  updateHtmlAttr,
  updateTitle,
  updateStorage,
  updateDomValueBySetting,
  getStorage,
  updateColorRootVar,
} from "../../utilities/setting";
import _ from "lodash";
const DefaultSetting = defaultState.setting;

const Choices = {
  SchemeChoice: DefaultSetting.theme_scheme.choices,
  ColorChoice: DefaultSetting.theme_color.choices,
  FSChoice: DefaultSetting.theme_font_size.choices,
};

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
      updateDomValueBySetting(state.setting, Choices);
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
    reset_state: (state, action) => {
      state.setting = defaultState.setting;
      updateDomValueBySetting(state.setting, Choices);
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
    app_name: (state, action) => {
      if (typeof action.payload !== typeof undefined) {
        state.setting.app_name.value = action.payload;
      }
      updateTitle(state.setting.app_name.value);
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
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
    theme_scheme: (state, action) => {
      if (typeof action.payload !== typeof undefined) {
        state.setting.theme_scheme.value = action.payload;
      }
      updateHtmlAttr({
        prop: "data-bs-theme",
        value: state.setting.theme_scheme.value,
      });
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
    theme_color: (state, action) => {
      if (typeof action.payload !== typeof undefined) {
        _.forEach(action.payload.colors, (value, key) => {
          state.setting.theme_color.colors[key] = value;
        });
        state.setting.theme_color.value = action.payload.value;
      }
      updateHtmlAttr({
        prop: "data-bs-theme-color",
        value: state.setting.theme_color.value,
      });
      updateColorRootVar(
        state.setting.theme_scheme.value,
        state.setting.theme_color,
        Choices.ColorChoice
      );
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
    theme_font_size: (state, action) => {
      if (typeof action.payload !== typeof undefined) {
        state.setting.theme_font_size.value = action.payload;
      }
      updateHtmlClass(Choices.FSChoice, state.setting.theme_font_size.value);
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
    page_layout: (state, action) => {
      state.setting.page_layout.value = action.payload;
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
    sidebar_color: (state, action) => {
      state.setting.sidebar_color.value = action.payload;
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
    sidebar_type: (state, action) => {
      state.setting.sidebar_type.value = action.payload;
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
    sidebar_menu_style: (state, action) => {
      state.setting.sidebar_menu_style.value = action.payload;
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
  },
});

export default settingSlice.reducer;
