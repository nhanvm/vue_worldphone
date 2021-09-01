<template>
  <div class="col-md-3">
    <div class="card pt-5 pb-4 font-weight-bold rounded-5">
      <img :src="require(`@/assets/${itemProduct.img}`)" />
      <h5 class="card-title mt-5 font-weight-bold">
        <span @click="toDetail">{{ itemProduct.name }}</span>
      </h5>
      <p class="card-text text-info">{{ itemProduct.style }}</p>
      <p>Price: <span class="text-danger">{{ itemProduct.price }} $</span></p>
      <span class="like">
        <font-awesome-icon @click="toggleLikeItem" v-if='itemProduct.like === false' :icon="['fas', 'heart-broken']" />
        <font-awesome-icon @click="toggleLikeItem" v-else :icon="['fas', 'heart']" />
      </span>
      <button type="button" class="close" aria-label="Close" v-on:click="deleteItem">
        <span aria-hidden="true">&times;</span>
      </button>
      <button @click="addToCard(itemProduct.id)" type="button" class="btn btn-success mx-auto">Add To Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'itemProduct',
  props: {
    itemProduct: {
      type: Object,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    deleteItem () {
      let data = this.itemProduct.id
      this.$emit('deleteItemParent', data)
    },
    toggleLikeItem () {
      let id = this.itemProduct.id
      let sttLike = this.itemProduct.like
      sttLike = !this.itemProduct.like
      this.$emit('listToggleLike', sttLike, id)
    },
    addToCard (idItem) {
      this.$emit('listAddToCard', idItem)
    },
    toDetail () {
      this.$router.push('/detailProduct/' + this.itemProduct.id)
    }
  }
}
</script>

<style scoped>
    .like {
      position: absolute;
      z-index: 1;
      top: 5px;
      left: 10px;
      font-size: 25px;
      color: #ffc107;
      cursor: pointer;
    }
    .card img {
      max-width: 100%;
      max-height: 190px;
      object-fit: contain;
    }
    .btn {
      width: 200px;
    }
    h5 {
      cursor: pointer;
    }
    .close {
      position: absolute;
      z-index: 1;
      top: 2px;
      right: 5px;
      font-size: 35px;
      color: #F70707;
      opacity: 1;
      cursor: pointer;
    }
</style>
