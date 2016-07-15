import FormComponent from './Form'
import FormRegistry from './Registry'


function plugin (Vue, options = {}) {
  // util.Vue = Vue
  Vue.component ('vue-form', FormComponent(Vue))
}

plugin.version = '0.0.1'

export default plugin
exports.FormRegistry = FormRegistry;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
