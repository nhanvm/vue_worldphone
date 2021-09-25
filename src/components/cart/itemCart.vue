<template>
  <div class="row mb-4" v-if='cart.quantity > 0'>
    <div class="col-md-5 col-lg-3 col-xl-3">
      <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
        <img
          class="img-fluid w-100"
          :src="require(`@/assets/${ cart.img }`)"
          alt="Sample"
        />
      </div>
    </div>
    <div class="col-md-7 col-lg-9 col-xl-9">
      <div>
        <div class="d-flex justify-content-between">
          <div>
            <h5>{{ cart.name }}</h5>
            <p class="mb-3 text-muted text-uppercase small">Shirt - blue</p>
            <p class="mb-4 text-muted text-uppercase small">Color: blue</p>
          </div>
          <div>
            <div class="def-number-input number-input safari_only mb-0 w-100">
              <button
                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                class="minus decrease btnQuantity"
                 @click="decrementCart(cart.id)"
              >
                -
              </button>
              <input class="quantity" min="0" name="quantity" :value="cart.quantity" type="number" />
              <button
                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                @click="incrementCart(cart.id)"
                class="plus increase btnQuantity"
              >
                +
              </button>
            </div>
            <small id="passwordHelpBlock" class="form-text text-muted text-center">
              (Note, 1 piece)
            </small>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <a
              @click="deleteCart(cart.id)"
              type="button"
              class="card-link-secondary small text-uppercase mr-3"
              ><font-awesome-icon class="mr-1" :icon="['fas', 'trash-alt']" /> Remove in cart
            </a>
            <a href="#!" type="button" class="card-link-secondary small text-uppercase"
              ><font-awesome-icon class="mr-1" :icon="['fas', 'heart']" /> Move to wish
              list
            </a>
          </div>
          <p class="mb-0">
            <span><strong id="summary">{{ priceFormat }}</strong></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'itemCart',
  props: {
    cart: {
      type: Object
    },
    cartId: String,
    idCartDelete: 0
  },
  data () {
    return {
      totalPrice: 0,
      listCarts: this.$store.state.listCarts
    }
  },
  methods: {
    findIndex (id) {
      let {listCarts} = this
      let valIndex
      listCarts.forEach(function (item, index) {
        if (item.id === id) {
          valIndex = index
        }
      })
      return valIndex
    },
    deleteCart (id) {
      this.idCartDelete = id
      // let indexCart = this.findIndex(id)
      // this.$store.commit('handleDeleteItemCart', indexCart)
    },
    incrementCart (id) {
      let indexCart = this.findIndex(id)
      this.$store.dispatch('incrementCart', {
        number: 1,
        indexCart
      })
    },
    decrementCart (id) {
      let indexCart = this.findIndex(id)
      this.$store.dispatch('decrementCart', {
        number: 1,
        indexCart
      })
    }
  },
  computed: {
    priceFormat () {
      let priceFormat = this.cart.price * this.cart.quantity
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(priceFormat)
    }
  }
}
</script>

<style scoped>
  .card-link-secondary {
    color: #6c757d;
  }
  .btnQuantity {
    background-color: transparent;
    border: 1px solid #6c757d;
    width: 35px;
    height: 30px;
  }
  .quantity{
    border: 1px solid #6c757d;
  }
</style>
