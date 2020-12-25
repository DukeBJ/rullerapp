import axios from 'axios'

const state = {
  dashboard: {},
  loading: Boolean()
}
const actions = {
  async GET_DASHBOARD_LIST({commit}) {
    state.loading = true
    await axios
      .get('./user.json')
      .then((response) => {
        console.log(response.data)
        const dashboard = response.data
        commit('SET_DASHBOARD', dashboard)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => (state.loading = false))
  },
}
const mutations = { 
  SET_DASHBOARD(state, dashboard) {
    console.log(`Устанавливаем dashboard в соответствии с полученными данными`)
    state.dashboard = dashboard
  }
}
const getters = {
  DASHBOARD_LIST(state) {
    console.log(`Получаем значения из state.dashboard геттером DASHBOARD_LIST`)
    return state.dashboard
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
} 