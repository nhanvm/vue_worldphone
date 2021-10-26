<template>
  <div class="cpnListProducts">
    <filterProducts @listFilterProductVal="listHandleFilterProductVal" />
    <div class='row'>
      <itemProduct v-for="itemProduct in getListProduct"
          v-bind:listProducts="listProducts"
          v-bind:listCarts="listCarts"
          v-bind:key="itemProduct.id"
          @getListCarts="getListCarts"
          v-bind:itemProduct="itemProduct"
          v-on:listToggleLike="listHandleToggleLike">
      </itemProduct>
    </div>
  </div>
</template>

<script>
import itemProduct from './itemProduct'
import filterProducts from './actions/filterProducts'
import Product from './../apis/Product'
import Cart from './../apis/Cart'
// import allx from './../apis/Product'
// import axios from 'axios'

export default {
  name: 'listProducts',
  data () {
    return {
      listProducts: [],
      listCarts: [],
      list: [],
      cartCount: 0
    }
  },
  mounted () {
    this.getListProducts()
    this.getListCarts()
  },
  props: {
    title: String,
    url: String
  },
  components: {
    itemProduct,
    filterProducts
  },
  methods: {
    async getListProducts () {
      let responseProducts = await Product.all()
      this.listProducts = responseProducts.data
    },
    async getListCarts () {
      let responseCarts = await Cart.all()
      this.listCarts = responseCarts.data
      this.cartCount = responseCarts.data.length
      this.$store.dispatch('actGetCartCount', this.cartCount)
    },
    toggleLikeList (data, id) {
      this.$emit('toggleLikeApp', data, id)
    },
    listHandleToggleLike (data, id) {
      this.$emit('homeToggleLike', data, id)
    },
    listHandleFilterProductVal (data) {
      this.$emit('homeFilterProductVal', data)
    },
    findIndex (id) {
      let listProducts = this.listProducts
      let valIndex
      listProducts.forEach(function (item, index) {
        if (item.id === id) {
          valIndex = index
        }
      })
      return valIndex
    }
  },
  computed: {
    getListProduct () {
      return this.listProducts
    }
  }
}
</script>

<style>
h1 {
  padding: 30px 0
}
</style>
