import Vue from 'vue'
import Vuex from 'vuex'
import configurator from './modules/configurator'
import account from './modules/account'
import dashboard from './modules/dashboard'
import schedule from './modules/schedule'
import orders from './modules/orders'
import allzamer from './modules/allzamer'
//import test from './modules/test'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    configurator,
    account,
    dashboard,
    schedule,
    orders,
    allzamer
    //test
  },
})