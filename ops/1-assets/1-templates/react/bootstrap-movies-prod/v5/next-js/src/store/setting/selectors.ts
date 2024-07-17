// Selectors
export const saveLocal = (state: { setting: { saveLocal: String; }; }): String => state.setting.saveLocal;
export const app_name = (state: { setting: { setting: { app_name: { value: String; }; }; }; }): String => state.setting.setting.app_name.value;
export const theme_scheme = (state: { setting: { setting: { theme_scheme: { value: String; }; }; }; }): String => state.setting.setting.theme_scheme.value;
export const theme_scheme_direction = (state: { setting: { setting: { theme_scheme_direction: { value: String; }; }; }; }): String => state.setting.setting.theme_scheme_direction.value;
export const theme_style_appearance = (state: { setting: { setting: { theme_style_appearance: { value: String[]; }; }; }; }): String[] => state.setting.setting.theme_style_appearance.value;
export const theme_color = (state: { setting: { setting: { theme_color: String; }; }; }): String => state.setting.setting.theme_color;
export const theme_transition = (state: { setting: { setting: { theme_transition: { value: String; }; }; }; }): String => state.setting.setting.theme_transition.value;
export const theme_font_size = (state: { setting: { setting: { theme_font_size: { value: String; }; }; }; }): String => state.setting.setting.theme_font_size.value;
export const page_layout = (state: { setting: { setting: { page_layout: { value: String; }; }; }; }): String => state.setting.setting.page_layout.value;
export const header_navbar = (state: { setting: { setting: { header_navbar: { value: String; }; }; }; }): String => state.setting.setting.header_navbar.value;
export const card_style = (state: { setting: { setting: { card_style: { value: String; }; }; }; }): String => state.setting.setting.card_style.value;
export const header_banner = (state: { setting: { setting: { header_banner: { value: String; }; }; }; }): String => state.setting.setting.header_banner.value;
export const sidebar_color = (state: { setting: { setting: { sidebar_color: { value: String; }; }; }; }): String => state.setting.setting.sidebar_color.value;
export const sidebar_type = (state: { setting: { setting: { sidebar_type: { value: String[]; }; }; }; }): String[] => state.setting.setting.sidebar_type.value;
export const sidebar_show = (state: { setting: { setting: { sidebar_show: { value: String; }; }; }; }): String => state.setting.setting.sidebar_show.value;
export const navbar_show = (state: { setting: { setting: { navbar_show: { value: String; }; }; }; }): String => state.setting.setting.navbar_show.value;
export const sidebar_menu_style = (state: { setting: { setting: { sidebar_menu_style: { value: String; }; }; }; }): String  => state.setting.setting.sidebar_menu_style.value;
export const footer = (state: { setting: { setting: { footer: { value: String; }; }; }; }): String => state.setting.setting.footer.value;
export const body_font_family = (state: { setting: { setting: { body_font_family: { value: String; }; }; }; }): String => state.setting.setting.body_font_family.value;
export const heading_font_family = (state: { setting: { setting: { heading_font_family: { value: String; }; }; }; }): String => state.setting.setting.heading_font_family.value;

export const settingObj = (state: { setting: String; }): String => state.setting;
