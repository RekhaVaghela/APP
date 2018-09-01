<template>

  <div class="hello">

  {{response}}
  
      <div v-bind:class = "{activecss: isActive === 1}"
      <p> {{text.toUpperCase()}} </p>
      <label> First Name </label>
      <input v-model="firstName"> <br>
      <label> Last Name </label>
      <input v-model="lastName"> <br>
      <label> Account Number </label>
      <input v-model="accountNumber"> <br>
      <p> </p>
      <button @click="postAPI" >Submit</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      firstName: '',
      lastName: '',
      accountNumber: '',
      msg: 'Wee.js App',
      seen: true,
      text: 'Creating Account',
      isActive: 1
    }
  },
  methods: {
    callAPI: function() {
      axios.get("/getAll").then(response => {
        this.response = response.data;
      }).catch(e =>  1)
    },

    deleteAPI: function() {
      axios.post("/delete?id=" + 7 ).then(response => {
        alert("done")
      }).catch( e => 1);
    },

    postAPI: function() {
        const that = this;
        axios.post("/create", {
        firstName: that.firstName,
        lastName: that.lastName,
        accountNumber: parseInt(that.accountNumber)
        }).then((r) => {alert("Account Created")}).catch((e) => {});
    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: blue;  
}
.activecss {
  color: red;
}


</style>
