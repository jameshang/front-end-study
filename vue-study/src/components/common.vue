<template>
    <div>
        <input type="text" v-model="beforeValue" v-on:input="handleMD5"/>
        <button v-on:click="handleMD5">MD5</button><p></p>
        <div>{{beforeValue}}</div><p></p>
        <div>{{afterValue}}</div><p></p>
    </div>
</template>
<script>
export default {
  name: 'MD5',
  data () {
    return {
      beforeValue: 'MD5',
      afterValue: ''
    }
  },
  methods: {
    handleMD5: function (e) {
      this.$data.afterValue = this.$md5(this.$data.beforeValue)
      console.log('Before value %s', this.$data.beforeValue)
      console.log('After value %s', this.$data.afterValue)
    }
  }
}
</script>
