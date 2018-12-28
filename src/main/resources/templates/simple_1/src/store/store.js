import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    getProducts: state => state.products
  },
  actions: {
    loadProducts(contex, products){
      contex.commit('loadProducts', products)
    }
  },
  mutations: {
    loadProducts(state, payload){
      state.products = payload
    }
  },
  modules:{

  }
})
