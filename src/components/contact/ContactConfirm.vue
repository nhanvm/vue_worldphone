<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-9">
        <form action="">
          <input type="hidden" name="" v-model="contact.id" />
          <table class="table">
            <tbody>
              <tr>
                <th class="border-0">Full name</th>
                <td class="border-0">{{ contact.fullname }}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{{ contact.address }}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{{ contact.gender }}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{{ contact.email }}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{{ contact.phone }}</td>
              </tr>
              <tr>
                <th>Type request</th>
                <td>{{ contact.typeRequest }}</td>
              </tr>
              <tr>
                <th>Content</th>
                <td>{{ contact.content }}</td>
              </tr>
            </tbody>
          </table>
          <div class="row justify-content-center">
            <button
              type="submit"
              class="btn btn-danger mt-3 mr-4"
              @click.prevent="backContactDaff"
            >
              Back Contact
            </button>
            <button
              type="submit"
              class="btn btn-success mt-3 ml-4"
              @click.prevent="sendContact"
            >
              Send Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ContactConfirm',
  props: {
    contact: Object
  },
  methods: {
    sendContact () {
      axios.post('https://614959d5035b3600175ba256.mockapi.io/contact', {
        id: this.contact.id,
        fullname: this.contact.fullname,
        address: this.contact.address,
        gender: this.contact.gender,
        email: this.contact.email,
        typeRequest: this.contact.typeRequest,
        phone: this.contact.phone,
        content: this.contact.content
      }).then((response) => {
        console.log(response)
      }, (error) => {
        console.log(error)
      })
      this.$emit('propsIsSubmitConfirm')
    }
  }
}
</script>
