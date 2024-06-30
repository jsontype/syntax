// Initial Setting State
export const initialState = {
  saveLocal: 'sessionStorage',
  storeKey: 'streamit-vue',
  setting: {
    theme_scheme_direction: {
      value: 'ltr',
    },
    theme_style_appearance: {
      value: 'dark',
    },
  },
};

// Default Setting State
export const defaultState = {
  saveLocal: 'sessionStorage',
  storeKey: 'streamit-vue',
  setting: {
    theme_scheme_direction: {
      target: 'html',
      choices: ['ltr', 'rtl'],
      type: 'layout_design',
      value: 'ltr',
    },
    theme_style_appearance: {
      target: 'html',
      choices: ['dark', 'hotstar', 'amazonprime', 'hulu'],
      type: 'layout_design',
      value: 'dark',
    },
  },
};
