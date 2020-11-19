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
    const index = orders.findIndex(ord => ord.id === orderId)
    console.log(`Я получил заказ №${orderId} и колличество конструкций в массиве ${constrNumber}`)
    constrNumber++
    if (constrNumber !== undefined) {
      const constrID = orders[index].constructions.find(ord => ord.window === constrNumber)
      if (constrID !== undefined) {
        const www = JSON.stringify(constrID.window)
        console.log(`Конструкция с номером ${www} уже существует`)
        console.log(orders[index].constructions)
      } else {
        orders[index].constructions.push(createNewConstruction(constrNumber))
        console.log(`Создаем конструкцию №${constrNumber}`)
        console.log(orders[index].constructions)
      }
    }
  },
  UPD_BUILDTYPE_MUT ({orders}, {selected, orderId}) {
    // Ищем где находится информация по данному заказу и заменяем на новую
    const index = orders.findIndex(ord => ord.id === orderId)
    orders[index].buildType = selected
    console.log(`index ${index}`)
    console.log(`Заказ №${orderId}`)
    console.log(`buildType ${selected}`)
  },

  // updateOrderMut(state) {
  //     state.order = state.products.reduce((previous, product) => previous + productPrice(product), 0)
  // },
  // resetConstructionMut({ constructions }, constrNumber) {
  //   const index = constructions.findIndex(constr => constr.id === constrNumber)
  //   const newConstruction = createNewConstruction()
  //   constructions.splice(index, 1, newConstruction)
  // },
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
  service: {
    isDismantling: true,
    isMounting: true,
    isDeliver: true,
    isGarbage: true
  }
})

const createNewConstruction = (constrNumber) => ({
  window: constrNumber,
  sizes: [],
  config: 'first',
  profile: 'lite60',
  color: 'white',
  glassunit: 'climatherm',
  hendless: 'type1',
  isMosquito: true,
  isChildlock: true,
  isSlope: true,
  isEbb: true,
  sill: 'std300'
})