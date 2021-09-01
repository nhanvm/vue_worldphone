<template>
  <div class="detailProduct">
    <section class="mb-5">
      <div class="row">
        <div class="col-md-6 mb-4 mb-md-0">
          <div id="mdb-lightbox-ui"></div>
          <div class="mdb-lightbox">
            <div class="row product-gallery mx-1">
              <div class="col-12 mb-0">
                <figure class="view overlay rounded z-depth-1 main-img">
                  <a href="#"
                    data-size="710x823">
                    <img :src="require(`@/assets/${detailProduct.img[selectedColor]}`)"
                      class="img-fluid z-depth-1">
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h1>Iphone Xs</h1>
          <p class="mb-2 text-muted text-uppercase small">Shirts</p>
          <starLike />
          <p><span class="mr-1"><strong>${{detailProduct.price}}</strong></span></p>
          <descriptionDetail />
          <hr>
          <div class="table-responsive mb-5">
            <table class="table table-sm table-borderless">
              <tbody>
                <tr>
                  <td class="pl-0 pb-0 w-25">Quantity</td>
                  <td class="pb-0">Select Color</td>
                </tr>
                <tr>
                  <td class="pl-0">
                    <div class="def-number-input number-input safari_only mb-0 d-flex">
                      <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        class="quantityonClick minus btn btn-primary">-</button>
                      <input class="quantity" min="0" name="quantity" value="1" type="number">
                      <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        class="quantityonClick plus btn btn-primary">+</button>
                    </div>
                  </td>
                  <selectColor @selectedColorDetail="handleSelectedColor" :detailProductColor="detailProduct.colors" />
                </tr>
              </tbody>
            </table>
          </div>
          <actionDetail />
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import selectColor from './selectColor'
import starLike from './starLike'
import descriptionDetail from './descriptionDetail'
import actionDetail from './actionDetail'
export default {
  name: 'detailProduct',
  data () {
    return {
      id: this.$route.params.id,
      detailProduct: {
        id: this.id,
        name: 'Iphone XS',
        colors: [
          'gold',
          'red',
          'white'
        ],
        img: [
          'iphoneXS-gold.jpg',
          'iphoneXS-white.jpg',
          'iphoneXS-red.jpg'
        ],
        price: 650,
        like: false
      },
      selectedColor: 0
    }
  },
  props: {
    title: String
  },
  methods: {
    handleTest () {
      this.$emit('AppChangleTitle')
    },
    handleSelectedColor (data) {
      this.selectedColor = data
    }
  },
  components: {
    selectColor,
    starLike,
    descriptionDetail,
    actionDetail
  }
}
</script>

<style>
.detailProduct {
  padding-top: 90px;
  text-align: left
}
.quantity {
  max-width: 100px;
  margin: 0px 10px;
}
.quantityonClick {
  width: 40px;
}
.add-to-cart {
  background-color: #f2f2f2;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
}
</style>
