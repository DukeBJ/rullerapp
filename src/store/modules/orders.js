import axios from 'axios'

const state = {
  prises: [],
  localOrd: []
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
  },
  GET_LOCAL_ORDERS({commit}, orderID) {
    const ord = JSON.parse(localStorage.orders)
    const index = ord.findIndex(ord => ord.id === orderID)
    const localOrd = ord[index]
    console.log(localOrd)
    commit('SET_ORDERS', localOrd)
  }
}
const mutations = { 
  SET_PRICE(state, prises) {
    console.log(`Устанавливаем prices в соответствии с полученными данными`)
    state.prises = prises
  },
  SET_ORDERS(state, localOrd) {
    console.log(`Данные из localStorage добавляются в state.localOrd`)
    state.localOrd = localOrd
  }
}
const getters = {
  PRICE_LIST(state) {
    console.log(`Получаем значения из state.prices геттером PRICE_LIST`)
    return state.prises
  },
  GET_ORDER(state) {
    return state.localOrd
  }
  
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
} 