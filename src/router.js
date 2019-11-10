import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Drinks from './views/Drinks.vue'
import Food from './views/Food.vue'
import AtHome from './views/AtHome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/drinks',
      name: 'drinks',
      component: Drinks,
      props: true
    },
    {
      path: '/food',
      name: 'food',
      component: Food
    },
    {
      path: '/at-home',
      name: 'at-home',
      component: AtHome
    }
  ]
})
