<template>
  <div>
    <listProducts
    @homeFilterProductVal="homeHandleFilterProductVal"
    @homeToggleLike="homeHandleToggleLike"
    />
    <pagination />
  </div>
</template>

<script>
import listProducts from './../listProducts'
import pagination from './../products/pagination.vue'
export default {
  name: 'cpnHome',
  components: {
    listProducts,
    pagination
  },
  props: {
    listProducts: {
      type: Array
    }
  },
  methods: {
    // homeHandleDeleteItem (data) {
    //   this.$emit('appdeleteItemParent', data)
    // },
    // homeHandleAddToCard (idItem) {
    //   this.$emit('appAddToCart', idItem)
    // },
    homeHandleToggleLike (data, id) {
      this.$emit('appToggleLike', data, id)
    },
    homeHandleFilterProductVal (data) {
      this.$emit('appFilterProductVal', data)
    }
  }
}
</script>
