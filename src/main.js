import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
//import './registerServiceWorker'
import './assets/scss/custom.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue, VueAxios, axios)
Vue.prototype.$axios = axios

// Vue.filter('ruPrice', function (value) {
//   //if (!value) return ''
//   value = value.Number()
//   return Intl.NumberFormat("ru").format(value)// + '\u00A0₽'
// })

new Vue({
  router,
  store,
  render: h => h(App),
  // filter: ruPrice => ruPrice(value) {
  //     //if (!value) return ''
  //     value = value.Number()
  //     return Intl.NumberFormat("ru").format(value)// + '\u00A0₽'
  //   })
}).$mount('#app')