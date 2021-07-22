<template>
  <div class="hello">
    <h3>List of Active Namespaces</h3>
    <table>
      <tr class="namespace" v-for="namespace in namespaces" :key="namespace.name">
        <td class="ns_name">{{ namespace.name }}</td>
        <td>{{ namespace.age.days }} days and {{ namespace.age.hours }} hours</td>
      </tr>
    </table>

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
        .get('http://home.coopstools.com/quizzle_parse/namespace/')
        .then(r => (this.namespaces = r.data))
  }
}
</script>

<style scoped>
.ns_name {
  text-align: left;
  border-right: 100px;
}
.namespace {
  margin: 10px
}
</style>