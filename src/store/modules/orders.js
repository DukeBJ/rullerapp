import axios from 'axios'

const state = {
  prises: []
}
const actions = {
  async GET_PRICE_LIST({commit}) {
    await axios
      .get('http://localhost:8080/price.json')
      .then((response) => {
        console.log(response.data)
        const prises = response.data
        commit('SET_PRICE', prises)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
const mutations = { 
  SET_PRICE(state, prises) {
    console.log(`Устанавливаем prices в соответствии с полученными данными`)
    state.prises = prises
  }
}
const getters = {
  PRICE_LIST(state) {
    console.log(`Получаем значения из state.prices геттером PRICE_LIST`)
    return state.prises
  },

}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
} 