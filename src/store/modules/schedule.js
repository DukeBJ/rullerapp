import axios from 'axios'

const state = {
  schedule: [],
  yandex: []
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
  },
  async GET_YANDEX_POINT({commit}, {id, adress}) {
    console.log(id)
    console.log(adress)
    if (localStorage.yandex) {
      return (console.log(`В локалке есть`))
    } else {
      const key = '7c5150d5-721b-4493-b1a0-4c6c98e8e544'
      let array = adress.split(' ')
      for (let i = 0; i < array.length; i++) {
        let str = array[i]
        str = str.replace(',', ' ')
        str = str.replace('.', ' ')
        str = str.trim()
        array[i] = str
      }
      const query = encodeURI(array.join(' '))
      await axios
      .get(`https://geocode-maps.yandex.ru/1.x/?apikey=${key}&geocode=${query}&format=json`)
      .then((response) => {
        const point = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
        commit('SET_YANDEX_POINT', {point, id})
      })
      .catch(err => {
        console.log(err)
      })
      // await axios
      // .get('http://localhost:8080/scheduleinfo.json')
      // .then((response) => {
      //   console.log(response.data[0].customer[0].adress)
      //   const adress = response.data[0].customer[0].adress
      //   const key = '7c5150d5-721b-4493-b1a0-4c6c98e8e544'
      //   let array = adress.split(' ')
      //   for (let i = 0; i < array.length; i++) {
      //     let str = array[i]
      //     str = str.replace(',', ' ')
      //     str = str.replace('.', ' ')
      //     str = str.trim()
      //     array[i] = str
      //   }
      //   const query = encodeURI(array.join(' '))
      //   axios
      //   .get(`https://geocode-maps.yandex.ru/1.x/?apikey=${key}&geocode=${query}&format=json`)
      //   .then((response) => {
      //     const point = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
      //     commit('SET_YANDEX_POINT', point)
      //   })
      // })
      // .catch(err => {
      //   console.log(err)
      // })
    }
  }
}
const mutations = { 
  SET_SCHEDULE(state, schedule) {
    console.log(`Устанавливаем schedule в соответствии с полученными данными`)
    state.schedule = schedule
  },
  SET_YANDEX_POINT(state, {id, point}) {
    const lat = point.slice(0,9)
    const long = point.slice(10)
    const pos = `~${long}%2C${lat}`
    console.log(pos)
    let obj = new Object()
    obj.id = id
    obj.pos = pos
    return state.yandex.push(obj)
  }
}
const getters = {
  SCHEDULE_LIST(state) {
    console.log(`Получаем значения из state.schedule геттером SCHEDULE_LIST`)
    return state.schedule
  },
  YANDEX_POINT(state) {
    console.log(state.yandex)
    return state.yandex
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
} 