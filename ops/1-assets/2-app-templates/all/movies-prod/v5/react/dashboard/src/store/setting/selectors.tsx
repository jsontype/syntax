// Selectors
export const saveLocal = (state): String => state.setting.saveLocal;
export const app_name = (state): String => state.setting.setting.app_name.value;
export const theme_scheme = (state): String => state.setting.setting.theme_scheme.value;
export const theme_scheme_direction = (state): String => state.setting.setting.theme_scheme_direction.value;
export const theme_color = (state): String => state.setting.setting.theme_color;
export const theme_font_size = (state): String => state.setting.setting.theme_font_size.value;
export const page_layout = (state): String => state.setting.setting.page_layout.value;
export const sidebar_color = (state): String => state.setting.setting.sidebar_color.value;
export const sidebar_type = (state): String[] => state.setting.setting.sidebar_type.value;
export const sidebar_menu_style = (state): String => state.setting.setting.sidebar_menu_style.value;

export const settingObj = (state): String => state.setting;
