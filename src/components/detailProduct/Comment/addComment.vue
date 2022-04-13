<template>
  <div>
    <form class="form-inline" role="form">
      <div class="form-group col-md-10">
        <input type="hidden" name="" v-model="comment.id" />
        <input type="hidden" name="" v-model="comment.avt" />
        <input type="hidden" name="" v-model="comment.name" />
        <input type="hidden" name="" v-model="comment.time" />
        <input type="hidden" name="" v-model="comment.status" />
        <input class="form-control w-100" type="text" placeholder="Your comments" v-model="comment.content" />
      </div>
      <div class="form-group">
        <button type="submit" @click.prevent="addComment" class="btn btn-success">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid'
import axios from 'axios'
export default {
  name: 'AddComment',
  data () {
    return {
      comment: {
        id: uuid.v1(),
        avt: 'xxx.jpg',
        name: 'Nhatttt',
        time: new Date(),
        content: '',
        status: true
      }
    }
  },
  methods: {
    addComment () {
      axios.post('https://614959d5035b3600175ba256.mockapi.io/comment', {
        id: this.comment.id,
        avt: this.comment.avt,
        name: this.comment.name,
        time: this.comment.time,
        content: this.comment.content,
        status: this.comment.status
      }).then((response) => {
        console.log(response)
      }, (error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>
