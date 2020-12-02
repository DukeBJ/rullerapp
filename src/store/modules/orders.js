import axios from 'axios'

const state = {
  prises: [],
  orders: []
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
  GET_LOCAL_ORDERS({commit}) {
    const orders = JSON.parse(localStorage.orders)
    commit('SET_ORDERS', orders)
  }
}
const mutations = { 
  SET_PRICE(state, prises) {
    console.log(`Устанавливаем prices в соответствии с полученными данными`)
    state.prises = prises
  },
  SET_ORDERS(state, orders) {
    console.log(`Данные из localStorage добавляются в state.orders`)
    state.orders = orders
  }
}
const getters = {
  PRICE_LIST(state) {
    console.log(`Получаем значения из state.prices геттером PRICE_LIST`)
    return state.prises
  },
  ORDERS_LIST({orders}, orderID) {
    
  }
  
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
} 