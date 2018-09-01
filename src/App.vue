<template>
  <div id="app">
  <h1> Welcome To AccountApp </h1>
  <hr>
  <router-link to ="/">Home</router-link>
  <router-link to ="/add">Add New Account</router-link>
  <router-link to ="/getAllAccount">All Accounts</router-link>
  <router-link to ="/tester">tester</router-link>
  <hr>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  color: blue;
}
</style>
