import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Restaurant from './views/Restaurant.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/restaurant',
      name: 'restaurant',
      component: Restaurant
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
