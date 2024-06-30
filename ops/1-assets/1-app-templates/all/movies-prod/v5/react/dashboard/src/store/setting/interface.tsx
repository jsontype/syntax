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
        app_name: SettingValueMap,
        theme_scheme: SettingValueMap,
        theme_scheme_direction: SettingValueMap,
        theme_color: {
            colors: ObjectMap,
            value: String,
        },
        theme_font_size: SettingValueMap,
        page_layout: SettingValueMap,
        sidebar_color: SettingValueMap,
        sidebar_type: SettingArrValueMap,
        sidebar_menu_style: SettingValueMap,
    }
}

export interface SettingDefaultState {
    saveLocal: String,
    storeKey: String,
    setting: {
        app_name: DefaultVStringMap,
        theme_scheme: DefaultVStringMap,
        theme_scheme_direction: DefaultVStringMap,
        theme_color: {
            target: String | Element,
            choices: Array<String>,
            type: String,
            colors: ObjectMap,
            value: String,
        },
        theme_font_size: DefaultVStringMap,
        page_layout: DefaultVStringMap,
        sidebar_color: DefaultVStringMap,
        sidebar_type: DefaultVArrayMap,
        sidebar_menu_style: DefaultVStringMap,
    }
}
