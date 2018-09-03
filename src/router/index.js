import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddAccount from '@/components/AddAccount'
import getAllAccount from '@/components/getAllAccount'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/add',
      name: 'AddAccount',
      component: AddAccount
    },
    {
      path: '/getAllAccount',
      name: 'getAllAccount',
      component: getAllAccount
    },
  ]
})
