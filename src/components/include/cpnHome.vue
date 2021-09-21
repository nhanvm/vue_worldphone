<template>
  <div>
    <listProducts
    @homeFilterProductVal="homeHandleFilterProductVal"
    @homeToggleLike="homeHandleToggleLike"
    />
  </div>
</template>

<script>
import listProducts from './../listProducts'
export default {
  name: 'cpnHome',
  components: {
    listProducts
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
