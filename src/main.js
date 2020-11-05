import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
//import './registerServiceWorker'
import './assets/scss/custom.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

// Vue.filter('ruPrice', function (value) {
//   //if (!value) return ''
//   value = value.Number()
//   return Intl.NumberFormat("ru").format(value)// + '\u00A0₽'
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')