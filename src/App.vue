<template>
  <div id="app">
    <h1>My General Purpose App</h1>
    <div class="routes">
      <router-link to="/quizzle_parse/">Home</router-link> |
      <router-link to="/quizzle_parse/users">Users</router-link> |
      <router-link to="/quizzle_parse/ns">Namespaces</router-link> |
      <router-link to="/quizzle_parse/h/Boludo">Other</router-link>
    </div>
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
html {
  color: #bb86fc;
  background-color: #000000;
}

.content {
  background-color: #121212;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  display: inline-block;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

/* unvisited link */
a {
  color: #03dac6;
}

</style>
