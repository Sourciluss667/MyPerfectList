import Vue from 'vue'
import App from './App.vue' 
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import { routes } from './routes'

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false
// cette ligne est importante pour les sessions (en mode développement)
axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
