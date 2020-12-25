import axios from 'axios'

const state = {
  auth: false,
  showLoginForm: false,
  login: ''
}
const actions = {
  // Получаем список замеров на текущий день
  async GET_AUTH({commit}, {phone, pass}) {
    await axios
      .get(`./get.php?req=auth&phone=${phone}&pass=${pass}`)
      .then((response) => {
        console.log(response.data)
        const reqAuth = response.data
        commit('SET_LOGIN', reqAuth)
      })
      .catch(err => {
        console.log(err)
      })
      // .finally(() => (state.loading = false))
  },

  showLogin({ commit }) {
      commit('showForm')
  },
  hideLogin({ commit }) {
      commit('hideForm')
  },
  attemptLogin({ commit }) {
      // not when empty => need to add stuff to state
      commit('authorize')
  },
  logout({ commit }) {
      commit('deauthorize')
  },
}
const mutations = {
  SET_LOGIN(state, reqAuth) {
    if (reqAuth != 0) {
      state.login = '1'
    } else {
      state.login = 'Не правильный телефон или пароль'
    }
  },
  showForm(state) {
      state.showLoginForm = true
  },
  hideForm(state) {
      state.showLoginForm = false
  },
  authorize(state) {
      state.auth = true
      state.showLoginForm = false
  },
  deauthorize(state) {
      state.auth = false
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
} 