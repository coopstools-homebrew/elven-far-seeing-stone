<template>
  <div class="hello">
    <h3>List of users</h3>
    <div v-for="user in users" :key="user.id">
      {{ user.name }}, {{ user.age }}, really, really likes {{ user.favorite }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return { users: [] }
  },
  created() {
    this.$http
        .get('http://home.coopstools.com/api/person')
        .then(r => (this.users = r.data))
  }
}
</script>

<style scoped>

</style>