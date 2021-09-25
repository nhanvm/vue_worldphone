<template>
  <div class="cpnListProducts">
    <filterProducts @listFilterProductVal="listHandleFilterProductVal" />
    <div class='row'>
      <itemProduct v-for="itemProduct in getListProduct"
          v-bind:key="itemProduct.id"
          v-bind:itemProduct="itemProduct"
          v-on:listToggleLike="listHandleToggleLike">
      </itemProduct>
    </div>
  </div>
</template>

<script>
import itemProduct from './itemProduct'
import filterProducts from './actions/filterProducts'
import axios from 'axios'

export default {
  name: 'listProducts',
  data () {
    return {
      listProducts: [],
      list: []
    }
  },
  mounted () {
    axios
      .get('https://614959d5035b3600175ba256.mockapi.io/listProducts')
      .then(response =>
        (this.listProducts = response.data))
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
    // handleDeleteItem (data) {
    //   this.$emit('homeDeleteItem', data)
    // },
    toggleLikeList (data, id) {
      this.$emit('toggleLikeApp', data, id)
    },
    // listHandleAddToCard (idItem) {
    //   this.$emit('homeAddToCard', idItem)
    // },
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
      let listProducts = this.listProducts
      let valueId = this.$store.state.getId
      var indexId = this.findIndex(valueId)
      if (valueId !== '') {
        listProducts.splice(indexId, 1)
      }
      return this.listProducts
    }
  }
}
</script>

<style>
h1 {
  padding: 30px 0
}
.cpnListProducts {
  margin-top: 50px;
}
</style>
