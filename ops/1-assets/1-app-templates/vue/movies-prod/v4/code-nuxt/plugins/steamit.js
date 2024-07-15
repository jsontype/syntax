import Vue from 'vue'
import _ from 'lodash'
import retina from 'retinajs'
import VueRetina from 'vue-retina'
// eslint-disable-next-line import/no-named-as-default
import BootstrapVue from 'bootstrap-vue'
import VueFlatPicker from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import './vue-select'
import './flatpicker'
import './global'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
// eslint-disable-next-line import/no-named-as-default,no-unused-vars
let skrollrJs
if (typeof window !== 'undefined') {
  require('bootstrap')
  skrollrJs = require('skrollr')
  require('magnific-popup/dist/jquery.magnific-popup.min')
  require('jquery.appear')
}
Vue.use(BootstrapVue)
Vue.use(VueFlatPicker)
Vue.use(VueRetina, { retina })

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

const components = require.context('@/components/core')
_.forEach(components.keys(), (fileName) => {
  const componentConfig = components(fileName)
  const componentName = fileName.split('/').pop().split('.')[0]
  Vue.component(componentName, componentConfig.default || componentConfig)
})
