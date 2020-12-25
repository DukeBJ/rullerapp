import axios from 'axios'

const state = {
  prises: [],
  localOrd: [],
  loading: Boolean()
}
const actions = {
  async GET_PRICE_LIST({commit}) {
    state.loading = true
    await axios
      .get('./price.json')
      .then((response) => {
        console.log(response.data)
        const prises = response.data
        commit('SET_PRICE', prises)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => (state.loading = false))
  },
  GET_LOCAL_ORDERS({commit}, orderID) {
    const ord = JSON.parse(localStorage.orders)
    const index = ord.findIndex(ord => ord.id === orderID)
    const localOrd = ord[index]
    console.log(localOrd)
    commit('SET_ORDERS', localOrd)
  },
  UPD_WINDOW_CONFIG({commit}, {winNo, config, service}) {
    commit('SET_UPD_CONFIG', {winNo, config, service})
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
  },
  // Обновляем конфигурацию окна в заказе с ценами
  SET_UPD_CONFIG({localOrd}, {winNo, config, service}) {
    localOrd.service = {...service}
    const constr = localOrd.constructions[winNo-1]
    constr.config = {...config}
    console.log(localOrd)
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