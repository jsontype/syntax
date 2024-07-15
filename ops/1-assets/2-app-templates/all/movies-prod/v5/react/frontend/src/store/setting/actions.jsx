import { settingSlice } from "./reducers";

export const { reset_state, theme_scheme_direction, theme_color, setSetting } =
  settingSlice.actions;
export default settingSlice.actions;
