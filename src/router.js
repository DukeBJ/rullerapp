import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue'
import Schedule from './views/SchedulePage.vue'
import Active from './views/ActivePage.vue'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/schedule/',
      component: Schedule,
    },
    {
      path: '/active/',
      component: Active,
    }
  ]
})