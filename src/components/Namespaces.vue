<template>
  <div class="hello">
    <h3>List of Active Namespaces</h3>
    <div v-for="namespace in namespaces" :key="namespace.name">
      {{ namespace.name }}  Age: {{ namespace.age.days }} days and {{ namespace.age.hours }} hours
    </div>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return { namespaces: [] }
  },
  created() {
    this.$http
        .get('http://home.coopstools.com/namespace/')
        .then(r => (this.namespaces = r.data))
  }
}
</script>

<style scoped>

</style>