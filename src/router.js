import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue'
import Schedule from './views/SchedulePage.vue'
import ActiveP from './views/ActivePage.vue'
import Configurator from './views/ConfiguratorPage.vue'
import Test from './views/TestPage.vue'


Vue.use(Router)

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "main",
      component: Home
    },
    {
      path: '/schedule/',
      name: "schedule",
      component: Schedule,
    },
    {
      path: '/active/',
      name: "active",
      component: ActiveP,
    },
    {
      path: '/configurator/',
      name: "configurator",
      component: Configurator,
      props: true
    },
    {
      path: '/test/',
      name: "test",
      component: Test,
    },
  ]
})