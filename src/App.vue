<template>
  <div id="app">
  <h1> Welcome To AccountApp </h1>
  <hr>
  <div>
    <router-link style="position:relative; left:-10%" to ="/">Home</router-link>
    <router-link to ="/add">Add New Account</router-link>
    <router-link style="position:relative; right: -10%" to ="/getAllAccount">All Accounts</router-link>
  </div>
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
  color: black;
}
hr{
  color: black;
}
</style>
