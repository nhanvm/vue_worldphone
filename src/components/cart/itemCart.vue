<template>
  <div class="row mb-4">
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
              >
                -
              </button>
              <input class="quantity" min="0" name="quantity" value="1" type="number" />
              <button
                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
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
              href="#!"
              type="button"
              class="card-link-secondary small text-uppercase mr-3"
              ><font-awesome-icon class="mr-1" :icon="['fas', 'trash-alt']" /> Remove item
            </a>
            <a href="#!" type="button" class="card-link-secondary small text-uppercase"
              ><font-awesome-icon class="mr-1" :icon="['fas', 'heart']" /> Move to wish
              list
            </a>
          </div>
          <p class="mb-0">
            <span><strong id="summary">${{ cart.price }}</strong></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'itemCart',
  props: {
    cart: {
      type: Object
    }
  },
  data () {
    return {}
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
