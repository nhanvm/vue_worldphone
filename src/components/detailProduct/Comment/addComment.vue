<template>
  <div>
    <form class="form-inline" role="form" id="formAddComment">
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
    <p v-bind:class="this.noticeError.success ? 'text-success animatedFade' : 'text-danger'" class="pl-3 mt-3">{{ noticeError.text }}</p>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid'
import axios from 'axios'
export default {
  name: 'AddComment',
  data () {
    return {
      noticeError: {
        text: '',
        success: false
      },
      comment: {
        id: uuid.v1(),
        avt: 'xxx.jpg',
        name: 'Nhatttt',
        time: new Date().toDateString(),
        content: '',
        status: true
      }
    }
  },
  methods: {
    addComment () {
      if (this.comment.content) {
        axios.post('https://614959d5035b3600175ba256.mockapi.io/comment', {
          id: this.comment.id,
          avt: this.comment.avt,
          name: this.comment.name,
          time: this.comment.time,
          content: this.comment.content,
          status: this.comment.status
        }).then((response) => {
          console.log(response)
          this.$emit('getListCommentProps')
          this.comment.content = ''
          this.noticeError.text = 'Thanks you, your comment send success'
          this.noticeError.success = true
        }, (error) => {
          console.log(error)
        })
      } else {
        this.noticeError.text = 'Please input content'
        this.noticeError.success = false
      }
    }
  }
}
</script>

<style scoped>
  @keyframes animatedFade {
    0% { opacity: 1; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
  .animatedFade {
    animation: animatedFade 5s;
  }
</style>
