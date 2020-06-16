// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueAxios from 'vue-axios'
import axios from 'axios'


Vue.config.productionTip = false

// const axiosCustom = axios.create({ś
//   baseURL: 'https://traveo-vue.herokuapp.com'
// })

const axiosCustom = axios.create({
  baseURL: 'http://localhost:5000/'
})

Vue.use(VueAxios, axiosCustom)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
