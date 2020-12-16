import Vue from 'vue'

const state = {
  title: {
    check: "Расчет конструкций",
    aperture: "Размеры проёма",
    config: "Конфигурация окна"
  },
  orders: []
}

const actions = {
  // Создание заказа
  ADD_ORDER({commit}, orderId) {
    commit('ADD_ORDER_MUT', orderId)
  },
  // Добавляем конструкцию в заказ
  ADD_CONSTRUCTION({commit}, {orderId, constrNumber}) {
    commit('ADD_CONSTRUCTION_MUT', {orderId, constrNumber})
  },
  // Обновляем информацию о типе дома
  UPD_BUILDTYPE({commit}, {selected, orderId}) {
    commit('UPD_BUILDTYPE_MUT', {selected, orderId})
  },
  ADD_SIZE({commit}, {orderID, winNo, constrSize, letter}) {
    commit('ADD_SIZE_MUT', {orderID, winNo, constrSize, letter})
  },
  ADD_CONFIG({commit}, {orderID, winNo, config}) {
    commit('ADD_CONFIG_MUT', {orderID, winNo, config})
  },
  ADD_SERVICES({commit}, {orderID, service}) {
    commit('ADD_SERVICES_MUT', {orderID, service})
    commit('SEND_ORDER', orderID)
  }
}
const mutations = {
  ADD_ORDER_MUT({orders}, orderId) {
    // Проверяем, создан уже заказ или нет. Если да, то ище его в массиве.
    if (orderId !== undefined) {
      const ordID = orders.find(ord => ord.id === orderId)
      // Если в массиве заказ есть, то ничего не делаем
      if (ordID !== undefined) {
        const www = JSON.stringify(ordID.id)
        console.log(`Заказ с номером ${www} уже существует`)
        console.log(orders)
      // Если заказа нет, то добавляем
      } else {
        orders.push(createNewOrder(orderId))
        console.log(`Создаем заказ №${orderId}`)
        console.log(orders)
      }
    }
  },
  ADD_CONSTRUCTION_MUT({orders}, {orderId, constrNumber}) {
    // Ищем в какой заказ добавляем конструкцию 
    const index = orders.findIndex(ord => ord.id === orderId)
    console.log(`Я получил заказ №${orderId} и колличество конструкций в массиве ${constrNumber}`)
    constrNumber++
    if (constrNumber !== undefined) {
      // Если значение получено, то ищем номер конструкции
      const constrID = orders[index].constructions.find(ord => ord.window === constrNumber)
      if (constrID !== undefined) {
        // Проверяем, есть ли такая конструкция в массиве
        const www = JSON.stringify(constrID.window)
        console.log(`Конструкция с номером ${www} уже существует`)
        console.log(orders[index].constructions)
      } else {
        // Если нет, то добавляем
        orders[index].constructions.push(createNewConstruction(constrNumber))
        console.log(`Создаем конструкцию №${constrNumber}`)
        console.log(orders[index].constructions)
      }
    }
  },
  ADD_SIZE_MUT({orders}, {orderID, winNo, constrSize, letter}) {
    // Ищем конструкцию в которую будем добавлять размеры
    const index = orders.findIndex(ord => ord.id === orderID)
    const constrID = orders[index].constructions.findIndex(constr => constr.window === winNo)
    const sizeObj = orders[index].constructions[constrID].sizes
    // Проверяем есть ли такое значение в объекте
    const checkProperty = Object.prototype.hasOwnProperty.call(sizeObj, letter)
    if (checkProperty === false) {
      console.log(`Добавлены объекты ${letter}: ${constrSize}`)
      Vue.set(sizeObj, letter, constrSize)
      //sizeObj[letter] = {'in': sizeIn, 'out': sizeOut}
    } else {console.log(`Размеры ${letter}: ${constrSize} уже добавлены`)}
  },
  // Не помню что за херь, но пока она просто выводит все объекты sizes
  // Вероятно ее просто нужно будет удалить потом
  UPD_SIZES_MUT({orders}, {orderID, winNo}) {
    const index = orders.findIndex(ord => ord.id === orderID)
    const constrID = orders[index].constructions.findIndex(constr => constr.window === winNo)
    console.log(orders[index].constructions[constrID].sizes)
    orders[index].constructions[constrID] == orders[index].constructions[constrID]
  },
  UPD_BUILDTYPE_MUT ({orders}, {selected, orderId}) {
    // Ищем где находится информация по данному заказу и заменяем на новую
    const index = orders.findIndex(ord => ord.id === orderId)
    orders[index].buildType = selected
    console.log(`index ${index}`)
    console.log(`Заказ №${orderId}`)
    console.log(`buildType ${selected}`)
  },
  ADD_CONFIG_MUT({orders}, {orderID, winNo, config}) {
    // Ищем конструкцию в которую будем добавлять размеры
    const index = orders.findIndex(ord => ord.id === orderID)
    const constrID = orders[index].constructions.findIndex(constr => constr.window === winNo)
    const configObj = orders[index].constructions[constrID].config
    // Добавляем конфигурацию окна
    console.log(`Добавлены объекты в config: ${JSON.stringify(config)}`)
    Vue.set(Object.assign(configObj, config))
    console.log(orders[index])
  },
  ADD_SERVICES_MUT({orders}, {orderID, service}) {
    const index = orders.findIndex(ord => ord.id === orderID)
    const oldServise = orders[index].service
    Object.assign(oldServise, service)
    console.log(service)
    console.log(`Заказ добавлен`)
    console.log(orders[index])
  },
  SEND_ORDER({orders}, orderID) {
    // проверка, есть ли в localStorage заказ с orderID
    const index = orders.findIndex(ord => ord.id === orderID)
    const newOrder = orders[index]
    console.log("Начинаем проверку")
    console.log(`Новый заказ ${JSON.stringify(newOrder)}`)
    console.log(`localStorage.orders = ${localStorage.orders}`)
    if(localStorage.orders === undefined) {
      console.log(`если undefined то добавляем новый`)
      localStorage.orders = JSON.stringify(orders)
      console.log(localStorage.orders)
    } else {
      console.log(`Если не undefined`)
      const parseLS = JSON.parse(localStorage.orders)
      const pIndex = parseLS.findIndex(ord => ord.id === orderID)
      console.log(`То ищем в`)
      console.log(parseLS)
      console.log(`pIndex =  ${pIndex}`)
      if (parseLS[pIndex] === undefined) {
        console.log(`Если заказа ${orderID} нет`)
        parseLS.push(newOrder)
        localStorage.orders = JSON.stringify(parseLS)
        console.log(`Добавляем`)
      } else {
        console.log(`Если заказ ${orderID} уже есть`)
        parseLS.splice(pIndex, 1, newOrder)
        localStorage.orders = JSON.stringify(parseLS)
        console.log(`Заменяем его`)
      }
    }
    console.log(JSON.parse(localStorage.orders))
  }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
} 

const createNewOrder = (orderId) => ({
  id: orderId,
  buildType: "Панельный",
  constructions: [],
  service: {}
})

const createNewConstruction = (constrNumber) => ({
  window: constrNumber,
  sizes: {},
  config: {},
  aperture: 'square'
})

// const createNewConstruction = (constrNumber) => ({
//   window: constrNumber,
//   sizes: {},
//   type: 'first',
//   profile: 'lite60',
//   color: 'white',
//   glassunit: 'climatherm',
//   hendless: 'type1',
//   isMosquito: true,
//   isChildlock: true,
//   isSlope: true,
//   isEbb: true,
//   sill: 'std300'
// })