<template>
  <div>
    <h3 v-on:click="handleClick">{{caption}}</h3>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      caption: 'VUE study'
    }
  },
  methods: {
    handleClick: function (e) {
      console.log(e.target)
    }
  }
}
</script>

<style>
</style>
