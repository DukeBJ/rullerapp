import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plLoader from './components/pl-loader.vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
//import './registerServiceWorker'
import './assets/scss/custom.scss'


Vue.config.productionTip = false
Vue.use(BootstrapVue, axios)
Vue.prototype.$axios = axios
Vue.component('pl-loader', plLoader)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')