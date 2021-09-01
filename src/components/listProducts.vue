<template>
  <div class="cpnListProducts">
    <filterProducts @listFilterProductVal="listHandleFilterProductVal" />
    <div class='row'>
      <itemProduct v-for="itemProduct in listProducts"
          v-bind:key="itemProduct.id"
          v-bind:itemProduct="itemProduct"
          v-on:listToggleLike="listHandleToggleLike"
          v-on:listAddToCard="listHandleAddToCard"
          v-on:deleteItemParent="handleDeleteItem">
      </itemProduct>
    </div>
  </div>
</template>

<script>
import itemProduct from './itemProduct'
import filterProducts from './actions/filterProducts'
export default {
  name: 'listProducts',
  props: {
    listProducts: {
      type: Array,
      default () {
        return []
      }
    },
    title: String,
    url: String
  },
  components: {
    itemProduct,
    filterProducts
  },
  methods: {
    handleDeleteItem (data) {
      this.$emit('homeDeleteItem', data)
    },
    toggleLikeList (data, id) {
      this.$emit('toggleLikeApp', data, id)
    },
    listHandleAddToCard (idItem) {
      this.$emit('homeAddToCard', idItem)
    },
    listHandleToggleLike (data, id) {
      this.$emit('homeToggleLike', data, id)
    },
    listHandleFilterProductVal (data) {
      this.$emit('homeFilterProductVal', data)
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
