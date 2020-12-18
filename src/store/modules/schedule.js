import axios from 'axios'

// Ключь от yandex API чтобы работать с Геокодом
const yaKey = '7c5150d5-721b-4493-b1a0-4c6c98e8e544'

// Убираем небольшой гемор, если localStorage.yandex не существует
if (localStorage.yandex === undefined) {
  localStorage.yandex = ""
}

const state = {
  schedule: [],
  yandex: [],
  myLocation: "",
  loading: Boolean()
}
const actions = {
  // Получаем список замеров на текущий день
  async GET_SCHEDULE_LIST({commit}) {
    state.loading = true
    await axios
      .get('/scheduleinfo.json')
      .then((response) => {
        console.log(response.data)
        const schedule = response.data
        commit('SET_SCHEDULE', schedule)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => (state.loading = false))
  },
  // Получаем точки для адресов из списка замеров
  async GET_YANDEX_POINT({commit}, {id, adress}) {
    console.log(`${id}: ${adress}`)
    let yaStore
    let index
    // Проверяем есть ли записи по этому замеру в localStorage.yandex
    if (localStorage.yandex !== "") {
      yaStore = JSON.parse(localStorage.yandex)
      index = yaStore.findIndex(ya => ya.id === id)
      // Здесь нужно добавить комит на мутацию для добавления информации из localStorage.yandex в state.yandex
    } else {
      index = -1
    }
    // Если запись не найдена, то добавляем ее
    if (index < 0) {
      console.log(`${id} не найден в localStorage и будет сгенерерован у yandex`)
      let array = adress.split(' ')
      for (let i = 0; i < array.length; i++) {
        let str = array[i]
        str = str.replace(',', ' ')
        str = str.replace('.', ' ')
        str = str.trim()
        array[i] = str
      }
      const query = encodeURI(array.join(' '))
      // Коннектимся к Yandex Geocode и получаем данные
      await axios
      .get(`https://geocode-maps.yandex.ru/1.x/?apikey=${yaKey}&geocode=${query}&format=json`)
      .then((response) => {
        const point = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
        console.log (point)
        commit('SET_YANDEX_POINT', {point, id})
      })
      .catch(err => {
        console.log(err)
      })
    } else { // Если данные из яндекса уже загружались, забираем их из локалхоста
      console.log(`В локалке есть точка к заказу ${id}`)
      const point = yaStore[index].point
      commit('SET_YANDEX_POINT', {point, id})
    }
  },
  // Получаем свою геопозицию
  GET_MY_LOCATION({commit}) {
    console.log(`Запрашиваем местоположение`)
    const geo = navigator.geolocation
    if (geo) {
      geo.getCurrentPosition(showPosition)
    } else {
      console.log(`Не можем определить позицию`)
    }
    function showPosition(position) {
      console.log(`Latitude: ${position.coords.latitude}`)
      console.log(`Longitude: ${position.coords.longitude}`)
      let myLocation = `${position.coords.latitude}%2C${position.coords.longitude}`
      commit('SET_MY_LOCATION', myLocation)
    }
  }
}
const mutations = { 
  SET_SCHEDULE(state, schedule) {
    console.log(`Устанавливаем schedule в соответствии с полученными данными`)
    state.schedule = schedule
  },
  SET_YANDEX_POINT(state, {id, point}) {
    const index = state.yandex.findIndex(ya => ya.id === id)
    if (index < 0 ) {
      const lat = point.slice(0,9)
      const long = point.slice(10)
      const pos = `~${long}%2C${lat}`
      console.log(pos)
      let obj = new Object()
      obj.id = id
      obj.pos = pos
      console.log(obj)
      if (localStorage.yandex === "") {
        localStorage.yandex = `[{"id": "${id}", "point": "${point}"}]`
        console.log(localStorage.yandex)
      } else {
        const arr = JSON.parse(localStorage.yandex)
        const int = arr.findIndex(ya => ya.id === id)
        if(int < 0) {
          arr.push(JSON.parse(`{"id": "${id}", "point": "${point}"}`))
          localStorage.yandex = JSON.stringify(arr)
        }
      }
      return state.yandex.push(obj)
    } else {
      console.log(`${id} уже в state.yandex`)
    }
    console.log(`Сейчас в state.yandex`)
    console.log(state.yandex)
  },
  // Записываем полученное местоположение
  SET_MY_LOCATION(state, myLocation) {
    console.log(myLocation)
    state.myLocation = myLocation
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
  },
  MY_LOCATION(state) {
    return state.myLocation
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}