<template>
  <div id="app">
    <h1>My General Purpose App</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/users">Users</router-link> |
    <router-link to="/ns">Namespaces</router-link>
    <div class="content">
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
