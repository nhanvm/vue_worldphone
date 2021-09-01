<template>
    <div id="app">
      <div v-if="isNoticeAddCart=== true" class="alert alert-success notice"
          :class="{ noticeAddcart : isNoticeAddCart }" role="alert">
          Successfully added to cart
        </div>
      <div class="container">
        <cpnHeader :cartCount="cartCount" />
        <router-view
          @appFilterProductVal="appHandleFilterProductVal"
          @appAddToCart="appHandleAddToCart"
          @AppChangleTitle="changeTitle"
          @appdeleteItemParent="appHandleDeleteItem"
          @appToggleLike="appHandleToggleLike"
          :listProducts="filteredBlogs"
          :listCarts="listCarts"
          :title="title" />
      </div>
    </div>
</template>

<script>
import cpnHeader from './components/include/cpnHeader'
import listProducts from './components/listProducts'
import detailProduct from './components/detailProduct/detailProduct'
export default {
  name: 'App',
  data () {
    return {
      isNoticeAddCart: false,
      listProducts: [
        {
          id: 1,
          name: 'Iphone 8',
          img: 'iphone8.jpg',
          style: 'Black',
          price: 450,
          like: true
        },
        {
          id: 2,
          name: 'Iphone XS',
          img: 'iphoneXS-gold.jpg',
          style: 'Gold',
          price: 650,
          like: false
        },
        {
          id: 3,
          name: 'Iphone 11',
          img: 'iphone11.png',
          style: 'Black',
          price: 450,
          like: true
        },
        {
          id: 4,
          name: 'Iphone 12',
          img: 'iphone12.jpg',
          style: 'Blue',
          price: 1500,
          like: true
        }
      ],
      listCarts: [],
      cartCount: 0,
      title: 'Chuyên mua bán điện thoại chính hãng',
      search: ''
    }
  },
  components: {
    cpnHeader,
    listProducts,
    detailProduct
  },
  methods: {
    appHandleFilterProductVal (data) {
      this.search = data
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
    },
    changeTitle () {
      this.title = 'Chuyên mua bán điện thoại Fake'
    },
    appHandleDeleteItem (data) {
      let listProducts = this.listProducts
      let valIndex = this.findIndex(data)
      listProducts.splice(valIndex, 1)
    },
    appHandleToggleLike (data, id) {
      let listProducts = this.listProducts
      listProducts.forEach(function (item, index) {
        if (item.id === id) {
          item.like = data
        }
      })
    },
    // add to cart //
    appHandleAddToCart (idItem) {
      let {listProducts, listCarts} = this
      let valIndex = this.findIndex(idItem)
      let itemCart = listProducts[valIndex]
      listCarts.push(itemCart)
      this.cartCount++
      this.isNoticeAddCart = !this.isNoticeAddCart
      setTimeout(function () {
        this.isNoticeAddCart = false
      }.bind(this), 3000)
    }
  },
  computed: {
    filteredBlogs () {
      if (this.search !== '') {
        return this.listProducts.filter((item) => {
          return item.name.toLowerCase().match(this.search)
        })
      }
      return this.listProducts
    }
  }
}

</script>

<style>
#app {
  font-family: "Arizonia", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px 30px;
  position: relative;
}
.container {
  max-width: 1260px;
  margin: 0 auto;
}
.notice.alert {
  position: absolute;
  right: 0;
  top: 0;
  max-width: 320px;
}
.noticeAddcart {
  animation: opacityBasic 3s;
}
@keyframes opacityBasic {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 0; }
}

</style>
