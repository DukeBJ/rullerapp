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
  ADD_SIZE({commit}, {orderID, winNo, sizeIn, sizeOut, letter}) {
    commit('ADD_SIZE_MUT', {orderID, winNo, sizeIn, sizeOut, letter})
    commit('UPD_SIZES_MUT', {orderID, winNo})
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
  ADD_SIZE_MUT({orders}, {orderID, winNo, sizeIn, sizeOut, letter}) {
    const index = orders.findIndex(ord => ord.id === orderID)
    const constrID = orders[index].constructions.findIndex(constr => constr.window === winNo)
    const sizeObj = orders[index].constructions[constrID].sizes
    const checkProperty = Object.prototype.hasOwnProperty.call(sizeObj, `${letter}In`)
    if (checkProperty === false) {
      orders[index].constructions[constrID].sizes[`${letter}In`] = sizeIn
      orders[index].constructions[constrID].sizes[`${letter}Out`] = sizeOut
      console.log(`Добавлшены объекты {${letter}In: ${sizeIn}, ${letter}Out: ${sizeOut}}`)
    } else {console.log(`Размеры {${letter}In: ${sizeIn}, ${letter}Out: ${sizeOut}} уже добавлены`)}
  },
  UPD_SIZES_MUT({orders}, {orderID, winNo}) {
    const index = orders.findIndex(ord => ord.id === orderID)
    const constrID = orders[index].constructions.findIndex(constr => constr.window === winNo)
    console.log(orders[index].constructions[constrID].sizes)
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
  sizes: {},
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

// const addSizes = (letterIn, letterOut, sizeIn, sizeOut) => ({
//   letterIn: 
//   letterOut: 
// })