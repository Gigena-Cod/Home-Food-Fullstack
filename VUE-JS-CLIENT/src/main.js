import Vue from 'vue'
import App from './App.vue'
import router from './router'


import axios from "axios";
import store from './store'
axios.defaults.baseURL='https://backend-homefood.herokuapp.com/'

// FILTERS 
Vue.filter('formatoPrecio',(precio) =>{
  return `$${precio.toFixed(2)}` 
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
