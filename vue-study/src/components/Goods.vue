<template>
    <div>
      <button v-on:click="loadGoods">Load</button><br>
      <table>
        <caption>Goods</caption>
        <tr>
          <th v-for="column in goods.columns" v-bind:key="column.index">{{column}}</th>
        </tr>
        <tr v-for="row in goods.rows" v-bind:key="row.index">
          <td v-for="field in row" v-bind:key="field.index">{{field}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Goods',
  data () {
    return {
      goods: {}
    }
  },
  methods: {
    loadGoods: function () {
      axios.get('http://127.0.0.1:8080/static/goods.json'
      ).then((resp) => {
        this.goods = resp.data
      }).catch((error) => {
        console.error(error)
      })
    }
  }
}
</script>
