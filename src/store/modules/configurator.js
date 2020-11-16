//const uuidv4 = require('uuid/v4')
//let uuid = 0
const state = {
  title: {
    check: "Расчет конструкций",
    aperture: "Размеры проёма",
    config: "Конфигурация окна"
  },
  orders: [
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
    commit('ADD_ORDER', orderId)
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
  ADD_ORDER({orders}, orderId) {
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
      // const ordID = order.find(ord => ord.id === orderId)
      // const www = JSON.stringify(ordID.id)
      // console.log(`Ищем среди заказов ID${orderId} = ${www}`)
      // if (orderId !== www) {
      //   order.push(createNewOrder(orderId))
      //   console.log(`Создаем заказ №${orderId}`)
      //   console.log(order)
      // }// else {
      //   const index = order.findIndex(ord => ord.id === orderId)
      //   const newOrd = createNewOrder(orderId)
      //   order.splice(index, 1, newOrd)
      //   console.log(`Заменяем старый заказ новым`) // А это нужно?
      // }
    }
    // const ordID = order.find(ord => ord.id === orderId)
    // console.log(ordID)
    // if (ordID == orderId) {
    //   console.log('Такой заказ уже есть')
    // } else {
    //   const index = order.findIndex(ord => ord.id === orderId)
    //   const newOrd = createNewOrder(orderId)
    //   order.splice(index, 1, newOrd)
    //   //order.push(createNewOrder(orderId))
    //   console.log(`Добавляем ${orderId}`)
    //   }
    //const index = order.findIndex(ord => ord.id === orderId)
    //const newOrd = createNewOrder(orderId)
    //order.splice(index, 1, newOrd)
    //order.push(createNewOrder(orderId))
    //console.log(order)
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

// const productPrice = ({config}) => {
//     let price = 1.50
//     if (config.size === 'a5') {
//         price = 1.0
//     } else if (config.size === 'a6') {
//         price = 0.75
//     }
//     price += 0.01 * config.heading.length // 1 cent per letter in headline
//     price += 0.02 * config.body.split(' ').length // 2 cent per word in body
//     if (config.quality === 'extra') {
//         price *= 1.25
//     }
//     price *= config.amount
//     return price
// }

  const createNewOrder = (orderId) => ({
    id: orderId,
    buildType: "Панельный",
    constructions: [],
    service: {
      dismantling: true,
      mounting: true,
      deliver: true,
      garbage: true
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
      mosquito: true,
      childlock: true,
      slope: true,
      ebb: true,
      sill: ''
    }
})