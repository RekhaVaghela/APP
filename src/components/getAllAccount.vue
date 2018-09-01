<template>
  <div class="getAllAccount">

    <div v-bind:class = "{activecss: isActive === 1}">
       <b-table striped bordered :items="items"></b-table>
             
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'


export default {
  name: 'getAllAccount',
    data () {
      return {
        fields: ['Id',  'accountNumber',  'firstName',   'lastName'],
        items: [],
        text: 'all accounts',
        isActive: 1 
      }
    },
    methods: {

      getAPI: function() {
        axios.get("/getAll").then(response => {
        this.items = response.data;
        }).catch(e =>  1)
      },
      deleteAPI: function() {
        axios.post("/delete?id=" + 7 ).then(response => {
          alert("Account Deleted")
        }).catch( e => 1);
      },
      updateAPI: function() {
        axios.post("/update?id=" + 7 ).then(response => {
          alert("Account Updated")
        }).catch( e => 1);
      },
    },

    mounted: function(){
      this.getAPI()   
    } 
}
</script>

