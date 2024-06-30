import { SettingState, SettingDefaultState } from './interface'

// Initial Setting State
export const initialState: SettingState = {
  "saveLocal": "sessionStorage",
  "storeKey": "streamit-react-frontend",
  "setting": {
    "theme_scheme_direction": {
      "value": "ltr"
    },
    "theme_color": {
      "value": "dark"
    },
  }
};

// Default Setting State
export const defaultState: SettingDefaultState = {
  "saveLocal": "sessionStorage",
  "storeKey": "streamit-react-frontend",
  "setting": {
    theme_scheme_direction: {
      target: "html",
      choices: ["ltr", "rtl"],
      type: "layout_design",
      value: "ltr",
    },
    theme_color: {
      target: "body",
      choices: [
        "dark",
        "hotstar",
        "amezonprime",
        "hulu",
      ],
      type: "layout_design",
      value: "theme-color-default",
    },
  },
}
