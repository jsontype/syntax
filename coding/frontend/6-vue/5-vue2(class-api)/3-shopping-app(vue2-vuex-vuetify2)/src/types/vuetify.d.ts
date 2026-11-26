declare module "vuetify/lib" {
  import { VueConstructor } from "vue"

  export interface VuetifyPreset {
    theme?: any
    icons?: any
    breakpoint?: any
    [key: string]: any
  }

  class Vuetify {
    constructor(preset?: VuetifyPreset)
    framework: any
  }

  export default Vuetify
  export function install(Vue: VueConstructor): void
}
