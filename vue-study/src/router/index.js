import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Goods from '@/components/Goods'
import Navigator from '@/components/Navigator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navigator',
      component: Navigator
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }
  ]
})
