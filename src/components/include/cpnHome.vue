<template>
  <div>
    <SliderHome />
    <listProducts @acthLoadingAnimation="handleLoadingAnimation" />
    <pagination v-if="handleLoadingAnimation" />
  </div>
</template>

<script>
import SliderHome from './SliderHome'
import listProducts from './../listProducts'
import pagination from './../products/pagination.vue'
export default {
  name: 'cpnHome',
  components: {
    listProducts,
    pagination,
    SliderHome
  },
  props: {
    listProducts: {
      type: Array
    }
  },
  computed: {
    handleLoadingAnimation () {
      return val => {
        return val
      }
    }
  }
}
</script>
