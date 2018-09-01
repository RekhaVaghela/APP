<template>

  <div class="hello">

  {{response}}
  
      <div v-bind:class = "{activecss: isActive === 1}"
    @click="isActive = 1">Create Account</div>
    <div v-bind:class = "{activecss: isActive === 2}"
    @click="isActive = 2">Edit Account Name</div>
    <div v-bind:class = "{activecss: isActive === 3}"
    @click="isActive = 3">Delete Account</div>
    <input v-model="firstName"> <br>
    <input v-model="lastName"> <br>
    <input v-model="accountNumber"> <br>
    <p> {{text.toUpperCase()}} </p>
    <button @click="callAPI" >OKAY</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      response: [],
      firstName: 'Rekha',
      lastName: 'Vaghela',
      accountNumber: '1245',
      msg: 'Wee.js App',
      seen: true,
      text: 'testing if this is capital',
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
    axios.post("/", {
      firstName: that.firstName,
      lastName: that.lastName,
      accountNumber: parseInt(that.accountNumber)
    }).then((r) => {}).catch((e) => {});
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
