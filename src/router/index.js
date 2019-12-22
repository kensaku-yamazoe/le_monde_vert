import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Order from '@/components/Order'
import Contact from '@/components/Contact'


Vue.use(Router)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
  ]
})

