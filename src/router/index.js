import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
      path: '/Shop',
      name: 'shop',
      component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
    },
    {
      path: '/Albums',
      name: 'Albums',
      component: () => import(/* webpackChunkName: "about" */ '../views/Albums.vue')
    },
    {
      path: '/Login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
      path: '/Register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
    },
    {
      path: '/Instruments',
      name: 'Instruments',
      component: () => import(/* webpackChunkName: "about" */ '../views/Instruments.vue')
    },
    {
      path: '/Sound_equipments',
      name: 'Sound_equipments',
      component: () => import(/* webpackChunkName: "about" */ '../views/SoundEquipments.vue')
    },
    {
      path: '/Lighting_effects',
      name: 'Lighting_effects',
      component: () => import(/* webpackChunkName: "about" */ '../views/LightingEffects.vue')
    },
    {
      path: '/Books_magazines',
      name: 'Books_magazines',
      component: () => import(/* webpackChunkName: "about" */ '../views/BooksMagazines.vue')
    },
    {
      path: '/Microphones',
      name: 'Microphones',
      component: () => import(/* webpackChunkName: "about" */ '../views/Microphones.vue')
    },
    {
      path: '/Product/:id',
      name: 'Product',
      component: () => import(/* webpackChunkName: "about" */ '../components/products/singleProduct.vue'),
      props: true,
      children: [
        {
          path:'Details',
          name: 'details',
          props: true,
          component: () => import(/* webpackChunkName: "about" */ '../components/products/singleProductDetails.vue'),
        },
        {
          path:'Features',
          name: 'features',
          props: true,
          component: () => import(/* webpackChunkName: "about" */ '../components/products/singleProductFeatures.vue'),
        }
      ]
    },
    {
      path: '/About',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: () => import(/* webpackChunkName: "about" */ '../components/cart/cart.vue'),
      props: true,
    },
    {
      path: '/Order',
      name: 'Order',
      component: () => import(/* webpackChunkName: "about" */ '../components/cart/order.vue'),
    }
    ]
})
