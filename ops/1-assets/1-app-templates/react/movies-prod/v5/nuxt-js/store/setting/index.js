import { defineStore } from 'pinia';
import { updateDomValueBySetting, updateHtmlAttr, updateStorage } from '../../utilities/setting';
import { initialState as state, defaultState } from './state';
import _ from 'lodash';

const DefaultSetting = defaultState.setting;

const Choices = {
  StyleAppearanceChoice: DefaultSetting.theme_style_appearance.choices,
};
const createSettingObj = (state) => {
  return {
    saveLocal: state.saveLocal,
    storeKey: state.storeKey,
    setting: _.cloneDeep(state.setting),
  };
};

export const useSetting = defineStore('setting', {
  state: () => ({ ...state }),
  getters: {
    theme_scheme_direction_value: (state) => state.setting.theme_scheme_direction.value,
    theme_style_appearance_value: (state) => state.setting.theme_style_appearance.value,
  },
  actions: {
    reset_state() {
      this.setting = defaultState.setting;
      updateDomValueBySetting(this.setting, Choices);
      updateStorage(this.saveLocal, this.storeKey, createSettingObj(state));
    },
    save_local(payload) {
      if (typeof payload !== typeof undefined) {
        this.saveLocal = payload;
      }
      const settingObj = {
        saveLocal: this.saveLocal,
        storeKey: this.storeKey,
        setting: _.cloneDeep(this.setting),
      };
      updateStorage(this.saveLocal, this.storeKey, settingObj);
    },
    theme_style_appearance(payload) {
      if (typeof payload !== typeof undefined) {
        this.setting.theme_style_appearance.value = payload;
      }
      updateHtmlAttr({ prop: 'data-bs-theme', value: this.setting.theme_style_appearance.value });
      updateStorage(this.saveLocal, this.storeKey, createSettingObj(state));
    },
    theme_scheme_direction(payload) {
      if (typeof payload !== typeof undefined) {
        this.setting.theme_scheme_direction.value = payload;
      }
      updateHtmlAttr({ prop: 'dir', value: this.setting.theme_scheme_direction.value });
      updateStorage(this.saveLocal, this.storeKey, createSettingObj(state));
    },
  },
});
window.pinia = useSetting;
