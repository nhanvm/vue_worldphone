import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    getId: '',
    title: 'iPhone Store',
    totalProducts: [],
    listCarts: [],
    cartCount: 0,
    perPage: 8,
    pageNumberProducts: 1
  },
  getters: {
    changeTitle: state => {
      return state.title
    },
    getterCartCount: state => {
      return state.cartCount
    }
  },
  mutations: {
    GET_NUMBER_PAGE_PRODUCTS (state, data) {
      state.pageNumberProducts = data
    },
    GET_ALL_PRODUCTS (state, data) {
      state.totalProducts = data
    },
    getAllCarts (state, data) {
      state.listCarts = data
    },
    CHANGE_TITLE_GLOBAL (state, val) {
      state.title = val
    },
    getId (state, id) {
      state.getId = id
    },
    getCartCount (state, number) {
      state.cartCount = number
    },
    incrementCart (state, payload) {
      let { indexCart } = payload
      state.listCarts[indexCart].quantity += payload.number
      // state.listCarts[indexCart].price += state.listCarts[indexCart].quantity
    },
    decrementCart (state, payload) {
      let { indexCart } = payload
      state.listCarts[indexCart].quantity -= payload.number
      // state.listCarts[indexCart].price *= state.listCarts[indexCart].quantity
      if (state.listCarts[indexCart].quantity === 0) {
        state.listCarts.splice(indexCart, 1)
      }
    }
  },
  actions: {
    actGetPageProduct (context, page) {
      context.commit('GET_NUMBER_PAGE_PRODUCTS', page)
    },
    actGetAllProducts (context, number) {
      context.commit('GET_ALL_PRODUCTS', number)
    },
    changeTitleGlobal (context) {
      context.commit('CHANGE_TITLE_GLOBAL', 'xxx')
    },
    actGetCartCount (context, number) {
      context.commit('getCartCount', number)
    },
    incrementCart ({ commit }, payload) {
      commit('incrementCart', {
        number: payload.number,
        indexCart: payload.indexCart
      })
    },
    decrementCart ({ commit }, payload) {
      commit('decrementCart', {
        number: payload.number,
        indexCart: payload.indexCart
      })
    }
  }
})
