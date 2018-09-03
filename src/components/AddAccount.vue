<template>

    <form>
      <div class="form-group row">
        <label for="inputFirstName" class="col-sm-2 col-form-label">First Name</label>
        <div class="col-sm-5">
          <input type="text" v-model="firstName" class="form-control" id="firstName" placeholder="First Name">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputLastName"  class="col-sm-2 col-form-label">Last Name</label>
        <div class="col-sm-5">
          <input type="text" v-model="lastName" class="form-control" id="lastName" placeholder="Last Name">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputAccountNumber" class="col-sm-2 col-form-label">Account Number</label>
        <div class="col-sm-5">
          <input type="text" v-model="accountNumber" class="form-control" id="accountNumber" placeholder="Account Number">
        </div>
      </div>
            <div class="form-group row">
        <div class="col-sm-7">
          <button type="submit" @click="postAPI" class="btn btn-success">Submit</button>
        </div>
      </div>
    </form>
      
</template>

<script>
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'HelloWorld',
  data () {
    return {
      firstName: '',
      lastName: '',
      accountNumber: '',
      
    }
  },
  methods: {
    
    postAPI: function() {
      const that = this;
      axios.post("/create", {
      firstName: that.firstName,
      lastName: that.lastName,
      accountNumber: parseInt(that.accountNumber)
      }).then((r) => {alert("Account Created")}).catch((e) => {});
      location.reload();
    }
  }
}
</script>

