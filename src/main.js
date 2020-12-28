import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plLoader from './components/pl-loader.vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import {Vue2Storage} from 'vue2-storage'
import VueCookies from 'vue-cookies'
//import './registerServiceWorker'
import './assets/scss/custom.scss'


Vue.config.productionTip = false
Vue.use(BootstrapVue, axios)
Vue.use(VueCookies)
Vue.use(Vue2Storage, {
  prefix: 'pl_',
  driver: 'local',
  ttl: 60 * 60 * 24 * 1000 // 24 часа
})
Vue.$cookies.config('30d')
Vue.prototype.$axios = axios
Vue.component('pl-loader', plLoader)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')