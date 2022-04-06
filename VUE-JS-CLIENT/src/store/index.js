import Vue from 'vue'
import Vuex from 'vuex'

import Auth from'@/modules/Auth'
import Bag from'@/modules/Bag'
import Product from'@/modules/Product'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    mainCollapsed:true
  },
  getters: {
    
    getMainCollapsed(state){
      return state.mainCollapsed
    },
  },
  mutations: {
    changeMainCollapsed(state){
      state.mainCollapsed=!state.mainCollapsed
    },
    
  },
   actions: {
    
   
   
  },
  modules: {
    Auth,
    Bag,
    Product
  }
})
