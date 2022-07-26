import "./assets/main.scss"
// import "../lib/index.css"
import Vue from 'vue'
import App from './App.vue'

import vpa from "../lib/index";
Vue.use(vpa)

new Vue({
  el: '#app',
  render: h => h(App)
})
