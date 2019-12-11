import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Order from '@/components/Order'
import Contact from '@/components/Contact'
import test3 from '@/components/test3'
import Comp1 from '@/components/Comp1'


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
    {
      path: '/test3',
      name: 'test3',
      component: test3
    },
    {
      path: '/Comp1',
      name: 'Comp1',
      component: Comp1
    },
  ]
})

