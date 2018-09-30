// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MD5 from './components/common'
import router from './router'
import md5 from 'js-md5'

Vue.config.productionTip = false
Vue.prototype.$md5 = md5

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#md5',
  router,
  components: { MD5 },
  template: '<MD5/>'
})
