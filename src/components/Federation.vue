<template>
  <div class="hello">
    <h3>List of Active Namespaces</h3>
    <table>
      <tr>
        <th>Node Name</th>
        <th>Milli-CPUs Used</th>
        <th>CPU % Used</th>
        <th>Memory (MB) Used</th>
        <th>% Total Memory Used</th>
      </tr>
      <tr class="namespace" v-for="(node_stat, node_name) in nodes_stats" :key="node_name">
        <td class="ns_name">{{ node_name }}</td>
        <td>{{ node_stat[node_stat.length - 1].Cpu }}</td>
        <td>{{ node_stat[node_stat.length - 1].CpuPer }}</td>
        <td>{{ node_stat[node_stat.length - 1].Mem / 1000 }}</td>
        <td>{{ node_stat[node_stat.length - 1].MemPer }}</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  name: "Federation_call",
  data() {
    return { nodes_stats: [] }
  },
  created() {
    this.$http
        .get('http://home.coopstools.com/quizzle_parse/federation/')
        .then(r => (this.nodes_stats = r.data))
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
th {
  padding: 12pt;
}
</style>
