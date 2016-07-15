import Vue from 'vue'
import App from './App.vue'
import VueForm from '../../../src/';

Vue.use(VueForm)

new Vue({
  el: '#app',
  render: h => h(App)
})
