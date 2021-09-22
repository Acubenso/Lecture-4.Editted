import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: require('../components/VHome.vue').default
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