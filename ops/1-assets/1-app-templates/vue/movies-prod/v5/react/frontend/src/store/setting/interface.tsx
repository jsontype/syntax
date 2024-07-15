interface ObjectMap {
  [key: string]: string,
}

interface SettingValueMap {
  value: String | null | ''
}
interface SettingArrValueMap {
  value: Array<String>,
}
interface DefaultMap {
  target: String | Element,
  choices: Array<String>,
  type: String,
}

interface DefaultVStringMap extends DefaultMap, SettingValueMap { }
interface DefaultVArrayMap extends DefaultMap, SettingArrValueMap { }


export interface SettingState {
  saveLocal: String,
  storeKey: String,
  setting: {
    theme_scheme_direction: SettingValueMap,
    theme_color: SettingValueMap,
  }
}

export interface SettingDefaultState {
  saveLocal: String,
  storeKey: String,
  setting: {
    theme_scheme_direction: DefaultVStringMap,
    theme_color: DefaultVStringMap
  }
}
