//const uuidv4 = require('uuid/v4')
//let uuid = 0
const state = {
  title: {
    check: "Расчет конструкций",
    aperture: "Размеры проёма",
    config: "Конфигурация окна"
  },
  order: [
    // {
    //   // id: 999, // Сюда нужно будет вставить нормер заказа из базы
    //   // buildType: "Панельный",
    //   // constructions: [
    //   //   {
    //   //     id: uuid+=1,
    //   //     aperture: {
    //   //       type: "square",
    //   //       sizes: {
    //   //         ha: 1234,
    //   //         wb: 4321
    //   //       }
    //   //     },
    //   //     window: {
    //   //       config: "first",
    //   //       profile: "lite60",
    //   //       color: "white",
    //   //       glassunit: "climatherm",
    //   //       hendless: "type1",
    //   //       mosquito: true,
    //   //       childlock: true,
    //   //       slope: true,
    //   //       ebb: true,
    //   //       sill: "std300"
    //   //     }
    //   //   }
    //   // ],
    //   // service: {
    //   //   dismantling: true,
    //   //   mounting: true,
    //   //   deliver: true,
    //   //   garbage: true
    //   // }
    // }
  ]
}

const actions = {
  newOrder({commit}, orderId) {
    commit('addOrderMut', orderId)
    //commit('updateOrderMut')
  },
  addConstruction({commit}) {
    commit('addConstructionMut')
    //commit('updatePriceMut')
  },
  updaetBuildType({commit}, orderId) {
    commit('updaetBuildTypeMut', orderId)
  },


  resetConstruction({commit}, constructionId) {
    commit('resetConstructionMut', constructionId)
  }
}
const mutations = {
  addOrderMut({order}, orderId) {
    const ordID = order.find(ord => ord.id === orderId)
    console.log(ordID.id)
    if (ordID.id == orderId) {
      console.log('Такой заказ уже есть')
    } else {
      const index = order.findIndex(ord => ord.id === orderId)
      const newOrd = createNewOrder(orderId)
      order.splice(index, 0, newOrd)
      //order.push(createNewOrder(orderId))
      console.log(`Добавляем ${orderId}`)
      }
    //const index = order.findIndex(ord => ord.id === orderId)
    //const newOrd = createNewOrder(orderId)
    //order.splice(index, 1, newOrd)
    //order.push(createNewOrder(orderId))
    //console.log(order)
  },
  addConstructionMut({constructions}) {
    constructions.push(createNewConstruction())
  },
  updaetBuildTypeMut (state) {
    state.order[0].buildType = state.order.buildType
  },

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
  service: ''
})

const createNewConstruction = () => ({
  id: 9,//uuid =+ 1,
  window: {
    config: '',
    profile: '',
    color: '',
    glassunit: '',
    hendless: '',
    mosquito: true,
    childlock: true,
    slope: true,
    ebb: true,
    sill: ''
  }
})