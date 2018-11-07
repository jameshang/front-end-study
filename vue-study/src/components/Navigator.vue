<template>
<div>
  <router-link to="/hello" tag="li">Hello world</router-link><br>
  <router-link to="/login" tag="li">Login</router-link><br>
  <router-link to="/goods" tag="li">Goods</router-link>
  <router-view/>
</div>
</template>
<script>
export default {
  name: 'Navigator',
  data () {
    return {

    }
  },
  methods: {
    log: function () {
      console.log('navigator')
    }
  }
}
</script>
