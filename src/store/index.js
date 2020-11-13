import Vue from 'vue'
import Vuex from 'vuex'
import configurator from './modules/configurator'
import account from './modules/account'
import schedule from './modules/schedule'
import test from './modules/test'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    configurator,
    account,
    schedule,
    test
  },
})