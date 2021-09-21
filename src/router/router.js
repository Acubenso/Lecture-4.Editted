import Vue from 'vue'
import Router from 'vue-router'


import VCart from '../components/VCart'
import VLogin from '../components/VLogin'
import VRegister from '../components/VRegister'


Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: require('../components/VCatalog.vue').default
    },
    {
      path: '/login',
      name: 'login',
      component: require('../components/VLogin.vue').default,
      props: true
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("../components/VRegister.vue"),
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: require('../components/VCart.vue').default,
      props: true
    }
  ]
})

export default router;