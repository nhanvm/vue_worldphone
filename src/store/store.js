import Vue from 'vue'
import Vuex from 'vuex'
import uuidv1 from 'uuid'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    getId: '',
    title: 'iPhone Store',
    listProducts: [
      {
        id: uuidv1(),
        name: 'Iphone 8',
        img: 'iphone8.jpg',
        style: 'Black',
        price: 450,
        like: true
      },
      {
        id: uuidv1(),
        name: 'Iphone XS',
        img: 'iphoneXS-gold.jpg',
        style: 'Gold',
        price: 650,
        like: false
      },
      {
        id: uuidv1(),
        name: 'Iphone 11',
        img: 'iphone11.png',
        style: 'Black',
        price: 450,
        like: true
      },
      {
        id: uuidv1(),
        name: 'Iphone 12',
        img: 'iphone12.jpg',
        style: 'Blue',
        price: 1500,
        like: true
      }
    ],
    listCarts: [
      {
        id: uuidv1(),
        name: 'Iphone 12',
        img: 'iphone12.jpg',
        style: 'Blue',
        price: 1500,
        like: true,
        quantity: 2
      }
    ]
  },
  getters: {
    changeTitle: state => {
      return state.title
    }
  },
  mutations: {
    changeTitleGlobal (state, val) {
      state.title = 'val'
    },
    getId (state, id) {
      state.getId = id
    },
    // add Cart
    addToCarts (state, data) {
      const bool = state.listCarts.some(i => i.id === data.id)
      if (bool) {
        let valIndex = 0
        state.listCarts.forEach(function (item, index) {
          if (item.id === data.id) {
            valIndex = index
            state.listCarts[valIndex].quantity += 1
          }
        })
      } else {
        state.listCarts.push(data)
      }
    },
    handleDeleteItemCart (state, data) {
      state.listCarts.splice(data, 1)
    },
    incrementCart (state, payload) {
      let {indexCart} = payload
      state.listCarts[indexCart].quantity += payload.number
      // state.listCarts[indexCart].price += state.listCarts[indexCart].quantity
    },
    decrementCart (state, payload) {
      let {indexCart} = payload
      state.listCarts[indexCart].quantity -= payload.number
      // state.listCarts[indexCart].price *= state.listCarts[indexCart].quantity
      if (state.listCarts[indexCart].quantity === 0) {
        state.listCarts.splice(indexCart, 1)
      }
    }
  },
  actions: {
    addToCarts (context, data) {
      context.commit('addToCarts', data)
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
