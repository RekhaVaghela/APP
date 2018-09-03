<template>
  <div class="getAllAccount">
    <div v-bind:class = "{activecss: isActive === 1}">
       <b-table striped hover :items="items" style="background-color: white">
         <template slot = "actions" slot-scope = "data">
            <div class = "action-buttons">
             <button class = "btn btn-info" @click="rowNo = data.index; setModalValues()"><font-awesome-icon icon="edit" /> </button>
             <button class = "btn btn-danger" @click="deleteAPI(data.item.id)"><font-awesome-icon icon="trash" /> </button>
            </div>
            
          </template>                 
        </b-table>
        
        <template>
          <b-modal v-model="modalShow" @ok="updateAPI(items[rowNo].id)">
            <div class="form-group row">
              <label for="inputFirstName" class="col-sm-2 col-form-label">First Name</label>
              <div class="col-sm-10">
                <input type="text" v-model="firstName" class="form-control" id="firstName" placeholder="First Name">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputLastName"  class="col-sm-2 col-form-label">Last Name</label>
              <div class="col-sm-10">
                <input type="text" v-model="lastName" class="form-control" id="lastName" placeholder="Last Name">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputAccountNumber" class="col-sm-2 col-form-label">Account Number</label>
              <div class="col-sm-10">
                <input type="text" v-model="accountNumber" class="form-control" id="accountNumber" placeholder="Account Number">
              </div>
            </div>
          </b-modal>
        </template> 
   </div>
  </div>
</template>

<script>
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'getAllAccount',
    data () {
      return {
        fields: ['Id',  'accountNumber',  'firstName',   'lastName', 'actions'],
        items: [],
        text: 'all accounts',
        isActive: 1,
        modalShow: false,
        rowNo: -1,
        firstName: '',
        lastName: '',
        accountNumber: ''
      }
    },
    methods: {

      getAPI: function() {
        axios.get("/getAll").then(response => {
          let accounts = response.data;
          accounts.forEach(account => {
            account.actions = ''
          });
        this.items = accounts
        }).catch(e =>  1)
      },

      deleteAPI: function(id) {
        axios.delete("/delete/" + id ).then(response => {
          alert("Account Deleted")
        }).catch( e => 1);
      },

      updateAPI: function(id) {
        console.log(id);
        const that = this;
        axios.put("/update/" + id, {
          firstName: that.firstName,
          lastName: that.lastName,
          accountNumber: parseInt(that.accountNumber),
          }).then((r) => {alert("Account Updated")}).catch((e) => {});
      },
      
      setModalValues: function() {
        this.modalShow = !this.modalShow;
        this.firstName = this.items[this.rowNo].firstName;
        this.lastName = this.items[this.rowNo].lastName;
        this.accountNumber = this.items[this.rowNo].accountNumber;
      }
    },

    mounted: function(){
      this.getAPI()   
    } 
}
</script>

