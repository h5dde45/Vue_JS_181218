import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  actions: {
    loadProducts(context, payload){
      context.commit('loadProducts', payload)
    }
  },
  mutations: {
    loadProducts(state, payload){
      state.products = payload
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    }
  }
})
