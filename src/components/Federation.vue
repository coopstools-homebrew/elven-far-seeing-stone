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
    <GChart
        type="LineChart"
        :data="memory_by_node"
        :options="{...chart_options, title: 'Percent Memory Usage'}"
    />
    <GChart
        type="LineChart"
        :data="cpu_by_node"
        :options="{...chart_options, title: 'Percent Cpu Usage'}"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: "Federation_call",
  components: {
    GChart
  },
  data() {
    let txt_color = '#bb86fc'
    let chart_colors = { textStyle: { color: txt_color, bold: true }, titleTextStyle: { color: txt_color, bold: true }, gridlines: {color: '#1E4D6B', count: 4}, minorGridlines: { count: 0 } }
    return {
      nodes_stats: [],
      memory_by_node: [["time", "nodeA", "nodeB", "nodeC", "nodeD"]],
      cpu_by_node: [["time", "nodeA", "nodeB", "nodeC", "nodeD"]],
      chart_options: {
        backgroundColor: { fillOpacity: 0.0 },
        colors: ['#0000FF', '#03DAC6', '#B00266', '#3740B3'],
        hAxis: { ...chart_colors, viewWindow: { max:60, min:0 }, logScale: false },
        vAxis: { ...chart_colors, viewWindow: { max:100, min:1 }, logScale: true },
        legend: chart_colors,
        titleTextStyle: { color: txt_color },
        axisTitlesPosition: "out"
      }
    }
  },
  created() {
    this.$http
        .get('http://home.coopstools.com/quizzle_parse/federation/')
        .then(r => {
          this.nodes_stats = r.data
          let nodes = Object.keys(this.nodes_stats)
          let headers = ["Minutes Ago", ...nodes, "dummy_node"]
          let indexes = Array.apply(null, Array(120)).map((v, i) => i)
          let cpu_percentage = [...nodes.map(name => this.nodes_stats[name].map(v => v.CpuPer).reverse()), [3, 4, 10, 10, 11, 5, 6, 4, 3, 2, 8]]
          let mem_percentage = [...nodes.map(name => this.nodes_stats[name].map(v => v.MemPer).reverse()), [0, 4, 10, 10, 11, 5, 6, 4, 3, 2, 8]]
          this.cpu_by_node = [headers, ...indexes.map((v, i) => [v/2, ...cpu_percentage.map(v => v.length > i ? v[i] : null)])]
          this.memory_by_node = [headers, ...indexes.map((v, i) => [v/2, ...mem_percentage.map(v => v.length > i ? v[i] : null)])]
        })
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
