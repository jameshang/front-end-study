<template>
  <div>
    <table>
        <tr>
            <th>Username:</th>
            <td><input type="text" v-model="uid"/></td>
        </tr>
        <tr>
            <th>Password:</th>
            <td><input type="password" v-model="pwd"/></td>
        </tr>
        <tr>
            <td colspan="2"><button v-on:click="login">Submit</button></td>
        </tr>
        <tr>
          <td colspan="2"><div v-html="msg"></div></td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      uid: '',
      pwd: '',
      msg: ''
    }
  },
  methods: {
    login: function () {
      if (this.uid === 'user' && this.pwd === 'pass') {
        this.msg = 'Login successfully!'
      } else {
        this.msg = 'Login failed!'
      }
    }
  }
}
</script>
