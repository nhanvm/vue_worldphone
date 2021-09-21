<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-9 text-left">
        <div class="cpnContact">
          <h2 class="text-center">Contact</h2>
          <div class="alert alert-danger" role="alert" v-if="noticeErorr">
            {{ noticeErorr }}
          </div>
          <form method="get" action="contact_confirm.vue">
            <div class="form-row mt-5">
              <div class="form-group col-md-6">
                <label for="inputFullname">Full name</label>
                <span class="text-danger">*</span>
                <input
                  type="fullname"
                  class="form-control"
                  id="inputFullname"
                  placeholder="Fullname"
                  v-model.lazy="contact.fullname"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputAddress">Address</label>
                <span class="text-danger">*</span>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  v-model.lazy="contact.address"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="form-inline">
                <div class="form-group mr-4">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gender" id="male" value="male" v-model.lazy="contact.gender" checked>
                    <label class="form-check-label" for="male">
                      Male
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gender" id="female" value="female" v-model.lazy="contact.gender">
                    <label class="form-check-label" for="female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="form-row">
                <div class="col-6">
                  <label for="inputEmail4">Email</label>
                  <span class="text-danger">*</span>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model.lazy="contact.email" />
                </div>
                <div class="col-6">
                  <label for="inputPhone">Phone</label>
                  <span class="text-danger">*</span>
                  <input
                    type="number"
                    class="form-control"
                    id="inputPhone"
                    placeholder="000xxxxx"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="form-row">
                <div class="col-md-6">
                  <label for="inputPhone">Type request</label>
                  <span class="text-danger">*</span>
                  <select id="typlerequest" name="typeRequest" class="form-control" v-model="contact.typeRequest">
                    <option selected>Choose...</option>
                    <option v-for="(item, index) in typeRequest" :key="index">{{ item }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-12">
                <label for="inputPhone">Content</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" style="resize: none;" v-model="contact.content"></textarea>
              </div>
            </div>
            <!-- <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck"> Check me out </label>
              </div>
            </div> -->
            <button type="submit" class="btn btn-primary mt-3" @click.prevent="submited">Send Contact</button>
          </form>
        </div>
      </div>
    </div>
    <div class="row mt-5" v-if="isSubmit">
      <div class="col-md-9">
        <p>{{ contact.fullname }}</p>
        <p>{{ contact.address }}</p>
        <p>{{ contact.gender }}</p>
        <p>{{ contact.email }}</p>
        <p>{{ contact.typeRequest }}</p>
        <p>{{ contact.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import uuidv1 from 'uuid'
export default {
  name: 'contact',
  data () {
    return {
      contact: {
        id: uuidv1(),
        fullname: '',
        address: '',
        gender: 'male',
        typeRequest: '',
        content: ''
      },
      noticeErorr: '',
      typeRequest: ['Cart', 'Bonus', 'Sale'],
      isSubmit: false
    }
  },
  methods: {
    submited (e) {
      if (this.contact.fullname && this.contact.address && this.contact.typeRequest) {
        this.isSubmit = true
        this.$router.push('/contact_confirm/' + this.contact.id)
      } else {
        this.noticeErorr = 'Please enter all values marked with *'
        e.preventDefault()
      }
    }
  }
}
</script>

<style></style>
