import { defineStore } from 'pinia'
import { updateTitle, updateDomValueBySetting, updateHtmlClass, updateHtmlAttr, updateStorage, getStorage, updateColorRootVar } from '../../utilities/setting'
import { initialState as state, defaultState } from './state'
import _ from 'lodash'

const DefaultSetting = defaultState.setting

const Choices = {
  SidebarMenuStyle: DefaultSetting.sidebar_menu_style.choices,
  SidebarType: DefaultSetting.sidebar_type.choices,
  MenuColor: DefaultSetting.sidebar_color.choices,
  pagestyle: DefaultSetting.page_layout.choices,
  ColorChoice: DefaultSetting.theme_color.choices,
  FSChoice: DefaultSetting.theme_font_size.choices,
}
const createSettingObj = (state) => {
  return {
    saveLocal: state.saveLocal,
    storeKey: state.storeKey,
    setting: _.cloneDeep(state.setting)
  }
}

export const useSetting = defineStore('setting', {
  state: () => ({ ...state }),
  getters: {
    app_name_value: (state) => state.setting.app_name.value,
    theme_scheme_value: (state) => state.setting.theme_scheme.value,
    theme_scheme_direction_value: (state) => state.setting.theme_scheme_direction.value,
    sidebar_color_value: (state) => state.setting.sidebar_color.value,
    sidebar_menu_style_value: (state) => state.setting.sidebar_menu_style.value,
    theme_font_size_value: (state) => state.setting.theme_font_size.value,
    default_saveLocal: (state) => state.saveLocal,
    page_layout_value: (state) => state.setting.page_layout.value,
    default_theme_scheme: (state) => state.setting.theme_scheme.value,
    theme_color_custom: (state) => state.setting.theme_color,
    theme_scheme_direction_custom: (state) => state.setting.theme_scheme_direction.value,
    sidebar_type_value: (state) => state.setting.sidebar_type.value
  },
  actions: {
    setSetting() {
      const json = getStorage(this.storeKey)
      if (json === 'none') this.saveLocal = 'none'
      if (json !== null && json !== 'none') {
        this.saveLocal = json.saveLocal
        this.setting = json.setting
      }
      updateDomValueBySetting(_.cloneDeep(this.setting), Choices)
      updateStorage(this.saveLocal, this.storeKey, createSettingObj(this))
    },
    reset_state() {
      this.setting = defaultState.setting
      updateDomValueBySetting(this.setting, Choices)
      updateStorage(this.saveLocal, this.storeKey, createSettingObj(this))
    },
    save_local(payload) {
      if (typeof payload !== typeof undefined) {
        this.saveLocal = payload
      }
      const settingObj = {
        saveLocal: this.saveLocal,
        storeKey: this.storeKey,
        setting: _.cloneDeep(this.setting)
      }
      updateStorage(this.saveLocal, this.storeKey, settingObj)
    },
    app_name(payload) {
      if (typeof payload !== typeof undefined) {
        this.setting.app_name.value = payload
      }
      updateTitle(this.setting.app_name.value)
      updateStorage(this.saveLocal, this.storeKey, createSettingObj(this))
    },
    page_layout(payload) {
      this.setting.page_layout.value = payload
    },
    theme_scheme_direction(payload) {
      if (typeof payload !== typeof undefined) {
        this.setting.theme_scheme_direction.value = payload
      }
      updateHtmlAttr({ prop: 'dir', value: this.setting.theme_scheme_direction.value })
      updateStorage(this.saveLocal, this.storeKey, createSettingObj(this))
    },
    theme_scheme(payload) {
      if (typeof payload !== typeof undefined) {
        this.setting.theme_scheme.value = payload
      }
      updateHtmlAttr({ prop: 'data-bs-theme', value: this.setting.theme_scheme.value })
      updateStorage(this.saveLocal, this.storeKey, createSettingObj(this))
    },
    theme_color(payload) {
      if (typeof payload !== typeof undefined) {
        _.forEach(payload.colors, (value, key) => {
          this.setting.theme_color.colors[key] = value
        })
        this.setting.theme_color.value = payload.value
      }
      updateHtmlAttr({ prop: 'data-bs-theme-color', value: this.setting.theme_color.value })
      updateColorRootVar(this.setting.theme_color.value, this.setting.theme_color, Choices.ColorChoice)
      updateStorage(this.saveLocal, this.storeKey, createSettingObj(this))
    },
    theme_font_size(payload) {
      if (typeof payload !== typeof undefined) {
        this.setting.theme_font_size.value = payload
      }
      updateHtmlClass(Choices.FSChoice, this.setting.theme_font_size.value)
      updateStorage(this.saveLocal, this.storeKey, createSettingObj(this))
    },
    sidebar_type(payload) {
      let value = []
      if (typeof payload !== 'string') {
        value = payload
        this.setting.sidebar_type.value = value
        updateStorage(this.saveLocal, this.storeKey, createSettingObj(this))
      }
    },
    sidebar_color(payload) {
      this.setting.sidebar_color.value = payload
      updateStorage(this.saveLocal, this.storeKey, createSettingObj(this))
    },
    sidebar_menu_style(payload) {
      this.setting.sidebar_menu_style.value = payload
      updateStorage(this.saveLocal, this.storeKey, createSettingObj(this))
    },
  }
})
window.pinia = useSetting
