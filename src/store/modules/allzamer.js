import axios from 'axios'

const state = {
  measurements: [],
  loading: Boolean()
}
const actions = {
  // Получаем список замеров на текущий день
  // async GET_MEASUREMENTS_LIST({commit}) {
  async GET_MEASUREMENTS_LIST({commit}, phone) {
    state.loading = true
    await axios
      // .get('./zamermonth.json')
      .get(`./get.php?req=all&phone=${phone}`)
      .then((response) => {
        console.log('Получаем ответ для всех замеров')
        console.log(response.data)
        // Список замеров
        const measurements = response.data
        commit('SET_MEASUREMENTS', measurements)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => (state.loading = false))
  },
}
const mutations = { 
  SET_MEASUREMENTS(state, measurements) {
    console.log(`Устанавливаем measurements в соответствии с полученными данными`)
    state.measurements = measurements
  }
}
const getters = {
  MEASUREMENTS_LIST(state) {
    console.log(`Получаем значения из state.measurements геттером MEASUREMENTS_LIST`)
    return state.measurements
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}