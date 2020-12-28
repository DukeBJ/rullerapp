import axios from 'axios'

const state = {
  auth: false,
  login: '',
  loginErr: ''
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
        commit('SET_LOGIN_ERROR', err)
      })
      // .finally(() => (state.loading = false))
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
  SET_LOGIN_ERROR(state, err) {
    console.log(err)
    state.loginErr = err
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
} 