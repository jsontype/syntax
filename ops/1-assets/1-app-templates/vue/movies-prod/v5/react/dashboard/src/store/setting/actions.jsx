import { settingSlice } from "./reducers";

export const {
  reset_state,
  app_name,
  theme_scheme_direction,
  theme_scheme,
  theme_color,
  theme_font_size,
  page_layout,
  sidebar_color,
  sidebar_type,
  sidebar_menu_style,
  setSetting,
} = settingSlice.actions;
export default settingSlice.actions;
