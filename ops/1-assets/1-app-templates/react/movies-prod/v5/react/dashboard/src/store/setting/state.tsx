import { SettingState, SettingDefaultState } from './interface'

// Initial Setting State
export const initialState: SettingState = {
  "saveLocal": "sessionStorage",
  "storeKey": "streamit-react-dashboard",
  "setting": {
    "app_name": {
      "value": "Streamit"
    },
    "theme_scheme_direction": {
      "value": "ltr"
    },
    "theme_scheme": {
      "value": "dark"
    },
    "theme_color": {
      "colors": {},
      "value": "default"
    },
    "theme_font_size": {
      "value": "theme-fs-sm"
    },
    "page_layout": {
      "value": "container-fluid"
    },
    "sidebar_color": {
      "value": "sidebar-white"
    },
    "sidebar_type": {
      "value": []
    },
    "sidebar_menu_style": {
      "value": "sidebar-default navs-rounded-all"
    },
  }
};

// Default Setting State
export const defaultState: SettingDefaultState = {
  "saveLocal": "sessionStorage",
  "storeKey": "streamit-react-dashboard",
  "setting": {
    app_name: {
      target: '[data-setting="app_name"]',
      choices: [],
      type: "text",
      value: "Streamit",
    },
    theme_scheme_direction: {
      target: "html",
      choices: ["ltr", "rtl"],
      type: "layout_design",
      value: "ltr",
    },
    theme_scheme: {
      target: "html",
      choices: ["light", "dark", "auto"],
      type: "layout_design",
      value: "dark",
    },
    theme_color: {
      target: "body",
      choices: [
        "color-1",
        "color-2",
        "color-3",
        "default",
      ],
      type: "default",
      colors: {},
      value: "default",
    },
    theme_font_size: {
      target: "html",
      choices: ["theme-fs-sm", "theme-fs-md", "theme-fs-lg"],
      type: "layout_design",
      value: "theme-fs-sm",
    },
    page_layout: {
      target: "#page_layout",
      choices: ["container", "container-fluid"],
      type: "layout_design",
      value: "container-fluid",
    },
    sidebar_color: {
      target: '[data-toggle="main-sidebar"]',
      choices: [
        "sidebar-white",
        "sidebar-dark",
        "sidebar-color"
      ],
      type: "layout_design",
      value: "sidebar-white",
    },
    sidebar_type: {
      target: '[data-toggle="main-sidebar"]',
      choices: ["sidebar-hover", "sidebar-mini", "sidebar-soft"],
      type: "layout_design",
      value: [],
    },
    sidebar_menu_style: {
      target: '[data-toggle="main-sidebar"]',
      choices: [
        "sidebar-default navs-rounded",
        "sidebar-default navs-rounded-all",
        "sidebar-default navs-pill",
        "sidebar-default navs-pill-all"
      ],
      type: "layout_design",
      value: "sidebar-default navs-rounded-all",
    },
  },
}
