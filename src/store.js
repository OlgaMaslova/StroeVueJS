import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  products: [],
  currentCurrency: '€', 
  cart: []
}
const getters = {
  getProducts: state => state.products,
  exchange: state => {
    switch(state.currentCurrency) {
      case '€' :
        return 1.0;
      case '$' : 
        return 1.23;
      case '£' : 
       return 0.89;
    }
  } 
}
const mutations = {
  addProducts(state, products) {
    for(let p of products) 
      state.products.push(p)
  },
  changeCurrency(state, currency) {
    state.currentCurrency = currency;
  },
  addProductCart(state, product) {
    state.cart.push(product)
  },
  removeFromCart(state, index) {
    state.cart.splice(index, 1)
  }
}
const actions = {
  addProducts(context, theProducts) {
    context.commit('addProducts',theProducts);
  },
  changeCurrency(context, theCurrency) {
    context.commit('changeCurrency', theCurrency)
  },
  addProductCart(context, theProduct) {
    context.commit('addProductCart', theProduct)  
  },
  removeFromCart(context, theIndex) {
    context.commit('removeFromCart', theIndex)
  }

}


export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})