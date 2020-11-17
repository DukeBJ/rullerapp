import axios from 'axios'

const state = {
  schedule: []
}
const actions = {
  async GET_SCHEDULE_LIST({commit}) {
    await axios
      .get('http://localhost:8080/scheduleinfo.json')
      .then((response) => {
        console.log(response.data)
        const schedule = response.data
        commit('SET_SCHEDULE', schedule)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
const mutations = { 
  SET_SCHEDULE(state, schedule) {
    state.schedule = schedule
  }
}
const getters = {
  SCHEDULE_LIST(state) {
    return state.schedule
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
} 