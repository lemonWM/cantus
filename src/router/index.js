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
      path: '/Gallery',
      name: 'gallery',
      component: () => import(/* webpackChunkName: "about" */ '../views/Gallery.vue')
    },
    {
      path: '/Albums',
      name: 'albums',
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
      name: 'instruments',
      component: () => import(/* webpackChunkName: "about" */ '../views/Instruments.vue')
    },
    {
      path: '/Sound_equipments',
      name: 'sound_equipments',
      component: () => import(/* webpackChunkName: "about" */ '../views/SoundEquipments.vue')
    },
    {
      path: '/Lighting_effects',
      name: 'lighting_effects',
      component: () => import(/* webpackChunkName: "about" */ '../views/LightingEffects.vue')
    },
    {
      path: '/Books_magazines',
      name: 'books_magazines',
      component: () => import(/* webpackChunkName: "about" */ '../views/BooksMagazines.vue')
    },
    {
      path: '/Microphones',
      name: 'microphones',
      component: () => import(/* webpackChunkName: "about" */ '../views/Microphones.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import(/* webpackChunkName: "about" */ '../components/products/singleProduct.vue'),
      props: true,
      children: [
        {
          path:'details',
          name: 'details',
          props: true,
          component: () => import(/* webpackChunkName: "about" */ '../components/products/singleProductDetails.vue'),
        },
        {
          path:'features',
          name: 'features',
          props: true,
          component: () => import(/* webpackChunkName: "about" */ '../components/products/singleProductFeatures.vue'),
        }
      ]
    },
    ]
})