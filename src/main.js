
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.config.productionTip = false

const axiosCustom = axios.create({
  baseURL: 'https://cantus-app.herokuapp.com/'
})

// const axiosCustom = axios.create({
//   baseURL: 'http://localhost:5000/'
// })

Vue.use(VueAxios, axiosCustom)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
