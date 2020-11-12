//const uuidv4 = require('uuid/v4')

let uuid = 0 

const state = {
  title: {
    check: "Расчет конструкций",
    aperture: "Размеры проёма",
    config: "Конфигурация окна"
  },
  order: [
    {
      id: 999, // Сюда нужно будет вставить нормер заказа из базы
      buildType: "Панельный",
      constructions: [
        {
          id: uuid+=1,
          aperture: {
            type: "square",
            sizes: {
              ha: 1234,
              wb: 4321
            }
          },
          window: {
            config: "first",
            profile: "lite60",
            color: "white",
            glassunit: "climatherm",
            hendless: "type1",
            mosquito: true,
            childlock: true,
            slope: true,
            ebb: true,
            sill: "std300"
          }
        }
      ],
      service: {
        dismantling: true,
        mounting: true,
        deliver: true,
        garbage: true
      }
    }
  ]
}
const actions = {
  newOrder({commit}) {
    commit('addOrderMut')
    commit('updateOrderMut')
  },
  addConstruction({commit}) {
    commit('addConstructionMut')
    //commit('updatePriceMut')
  },
  updaetBuildType({commit}, orderId) {
    commit('updaetBuildTypeMut', orderId)
  },
  // removeProduct({commit}, index) {
  //     commit('removeProductMut', index)
  //     commit('updatePriceMut')
  // },
  // addToCart({commit}) {
  //     commit('addToCartMut')
  // },
  // updatePrice({commit}) {
  //     commit('updatePriceMut')
  // },
  resetConstruction({commit}, constructionId) {
    commit('resetConstructionMut', constructionId)
  }
}
const mutations = {
  addOrderMut({orders}) {
    orders.push(createNewOrder())
  },
  addConstructionMut({constructions}) {
    constructions.push(createNewConstruction())
  },
  updaetBuildTypeMut (state) {
    state.order[0].buildType = state.order.buildType
  },
  // removeProductMut({products}, productId) {
  //     const index = products.findIndex(prod => prod.id === productId)
  //     products.splice(index, 1)
  // },
  // addToCartMut(state) {
  //     // reset state?
  //     console.log('addToCart mutation does nothing')
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

const createNewOrder = () => ({
  id: uuid +=1, // Сюда нужно будет вставить нормер заказа из базы
  buildType: "Панельный",
  constructions: '',
  service: ''
})

const createNewConstruction = () => ({
    id: uuid =+ 1,
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

// const createNewProduct = () => ({
//     id: uuidv4(),
//     config: {
//         heading: '',
//         body:  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
//         amount: 10,
//         shape: 'square',
//         size: 'a4',
//         quality: 'normal',
//     }
// })