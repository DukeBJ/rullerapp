//const uuidv4 = require('uuid/v4')
//let uuid = 0
const state = {
  title: {
    check: "Расчет конструкций",
    aperture: "Размеры проёма",
    config: "Конфигурация окна"
  },
  orders: []
}

const actions = {
  ADD_ORDER({commit}, orderId) {
    commit('ADD_ORDER_MUT', orderId)
    //commit('updateOrderMut')
  },
  addConstruction({commit}) {
    commit('addConstructionMut')
    //commit('updatePriceMut')
  },
  // updateBuildType({commit}, select, orderId) {
  //   commit('UPD_BUILDTYPE', select, orderId)
  // },


  resetConstruction({commit}, constructionId) {
    commit('resetConstructionMut', constructionId)
  }
}
const mutations = {
  ADD_ORDER_MUT({orders}, orderId) {
    if (orderId !== undefined) {
      const ordID = orders.find(ord => ord.id === orderId)
      if (ordID !== undefined) {
        const www = JSON.stringify(ordID.id)
        console.log(`Заказ с номером ${www} уже существует`)
        console.log(orders)
      } else {
        orders.push(createNewOrder(orderId))
        console.log(`Создаем заказ №${orderId}`)
        console.log(orders)
      }
    }
  },
  addConstructionMut({constructions}) {
    constructions.push(createNewConstruction())
  },
  // UPD_BUILDTYPE ({orders}, select, orderId) {
  //   // const index = orders.findIndex(ord => ord.id === orderId)
  //   // orders.splice(index, 1, select)
  //   //order.push(createNewOrder(orderId))
  //   console.log(`Добавляем ${orderId}`)
  //   console.log(`Добавляем ${select}`)
  // },

  // updateOrderMut(state) {
  //     state.order = state.products.reduce((previous, product) => previous + productPrice(product), 0)
  // },
  resetConstructionMut({ constructions }, constructionId) {
    const index = constructions.findIndex(constr => constr.id === constructionId)
    const newConstruction = createNewConstruction()
    constructions.splice(index, 1, newConstruction)
  },
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

const createNewConstruction = () => ({
    id: 9,//uuid =+ 1,
    window: {
      config: '',
      profile: '',
      color: '',
      glassunit: '',
      hendless: '',
      isMosquito: true,
      isChildlock: true,
      isSlope: true,
      isEbb: true,
      sill: ''
    }
})