import Vue from 'vue'
import Router from 'vue-router'
import plDashboard from './views/pl-dashboard-page.vue'
import plSchedule from './views/pl-schedule-page.vue'
import plAtwork from './views/pl-atwork-page.vue'
import plConfigurator from './views/pl-configurator-page.vue'
import plOrder from './views/pl-order-page.vue'
import Test from './views/TestPage.vue'


Vue.use(Router)

export default new Router ({
  base: '/app/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "dashboard",
      component: plDashboard
    },
    {
      path: '/schedule/',
      name: "schedule",
      component: plSchedule,
    },
    {
      path: '/atwork/',
      name: "atwork",
      component: plAtwork,
    },
    {
      path: '/atwork/:id/',
      name: "order",
      component: plOrder,
    },
    {
      path: '/configurator/',
      name: "configurator",
      component: plConfigurator,
      props: true
    },
    {
      path: '/test/',
      name: "test",
      component: Test,
    },
  ]
})