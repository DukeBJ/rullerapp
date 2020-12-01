<template>
  <div>
    <pl-header-atwork :title="orderTitle()" />
    <!-- v-if="checkOrder()" -->
    <main
      class="card-place"
      
    >
      <div
        v-if="isWindowList"
        class="container">
        <div class="row window-sum">
          <div class="sum">Итого:</div>
          <div class="price">{{orderSum() | priceFormat}}</div>
        </div>
        <pl-order-window-list
          v-for="win in getWindow.constructions"
          :key="win.window"
          :winNo="win.window"
          :price="windowPrice(win.window)"
          @edit-window="editWindow"
          />
        <button
          class="app-btn btn__blue btn__min-width"
          @click="orderDone"
        >Оформить заказ</button>
        <button
          class="app-btn btn__blue btn__min-width"
          @click="measureEnd"
        >Оформить заказ</button>
      </div>
      <pl-order-window-edit
        v-if="isWindowEdit"
        :winNo="1"
        :price="this.OrderPrice.constructions[0].config"
        :config="getWindow.constructions[0].config"
        :service="getWindow.service"
        />
    </main>
    <!-- <main v-else>
      <h2>Заказ не создан</h2>
      <div>Вернитесь к списку замеров и попробуйте еще раз</div>
    </main> -->
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import priceFormat from '@/components/filters/priceFormat'
  import plOrderWindowList from '@/components/atwork/order/pl-order-window-list.vue'
  import plHeaderAtwork from '@/components/pl-header-atwork.vue'
  import plOrderWindowEdit from '@/components/atwork/order/pl-order-window-edit.vue'

export default {
  name: 'pl-configurator-page',
  components: {
    plOrderWindowList,
    plHeaderAtwork,
    plOrderWindowEdit,
  },
  props: {
    ordern: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      sumOrder: '',
      sumWindows: [],
      isWindowList: true,
      isWindowEdit: true
    }
  },
  filters: {
    priceFormat
  },
  methods: {
    ...mapActions('orders', [
        'GET_PRICE_LIST',
    ]),
    // ...mapActions('configurator', [
    //     'UPD_BUILDTYPE',
    //     'ADD_CONSTRUCTION',
    //     'ADD_SIZE',
    //     'ADD_CONFIG',
    //     'ADD_SERVICES'
    // ]),
    orderTitle() {
      const ord = new URLSearchParams(document.location.search).get('order')
      return 'Заказ №' + ord
    },
    checkOrder() {
      const index = this.orders.findIndex(ord => ord.id === this.ordern)
      return this.orders[index]
    },
    editWindow(e) {
      console.log(e)
      return e
    },
    orderDone() {
      
    },
    measureEnd() {
      
    },
    windowPrice(a) {
      // Потом вместо [0] нужно будет подставлять (winNo - 1)
      const price = this.OrderPrice.constructions[0].config
      const window = this.getWindow.constructions
      const index = a-1
      const config = window[index].config

      let totoalPrice = new Array()
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      // Тип механизмов окна (открываение/закрывание)
      const type = config.type
      let priceType = 0
      if(type !== undefined) {
        priceType = Number(price.type[type])
        //console.log(`Цена конструкции окна ${priceType}`)
      }
      totoalPrice.push(priceType)
      // Тип профиля
      const profile = config.profile
      let priceProfile = 0
      if(profile !== undefined) {
        priceProfile = Number(price.profile[profile])
        //console.log(`Цена профиля ${priceProfile}`)
      }
      totoalPrice.push(priceProfile)
      // Цвет профиля
      const color = config.color
      let priceColor = 0
      if(color !== undefined) {
        priceColor = Number(price.color[color])
        //console.log(`Цена цвета профиля ${priceColor}`)
      }
      totoalPrice.push(priceColor)
      // Тип стеклопакетов
      const glassunit = config.glassunit
      let priceGlassunit = 0
      if(glassunit !== undefined) {
        priceGlassunit = Number(price.glassunit[glassunit])
        //console.log(`Цена стеклопакета ${priceGlassunit}`)
      }
      totoalPrice.push(priceGlassunit)
      // Типы ручек
      const hendless = config.hendless
      let priceHendless
      if(hendless !== undefined) {
        priceHendless = Number(price.hendless[hendless])
        //console.log(`Цена ручек ${priceHendless}`)
      }
      totoalPrice.push(priceHendless)
      // Подоконники
      const sill = config.sill
      let priceSill = 0
      if(sill !== undefined) {
        priceSill = Number(price.sill[sill])
        //console.log(`Цена подоконников ${priceSill}`)
      }
      totoalPrice.push(priceSill)
      // Москитные сетки
      const mosquito = config.mosquito
      let priceMosquito = 0
      if(mosquito !== false && mosquito !== "false") {
        priceMosquito = Number(price.mosquito)
        //console.log(`Цена москитной сетки ${priceMosquito}`)
      }
      totoalPrice.push(priceMosquito)
      // Детские замки
      const childlock = config.childlock
      let priceChildlock = 0
      if(childlock !== false && childlock !== "false") {
        priceChildlock = Number(price.childlock)
        //console.log(`Цена детские замки ${priceChildlock}`)
      }
      totoalPrice.push(priceChildlock)
      // Откосы
      const slope = config.slope
      let priceSlope = 0
      if(slope !== false && slope !== "false") {
        priceSlope = Number(price.slope)
        //console.log(`Цена откоса ${priceSlope}`)
      }
      totoalPrice.push(priceSlope)
      // Отливы
      const ebb = config.ebb
      let priceEbb = 0
      if(ebb !== false && ebb !== "false") {
        priceEbb = Number(price.ebb)
        //console.log(`Цена отлива ${priceEbb}`)
      }
      totoalPrice.push(priceEbb)
      let sum = totoalPrice.reduce(reducer)
      return sum
    },
    orderSum() {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const servPrice = this.OrderPrice.constructions[0].service
      const window = this.getWindow.constructions
      const service = this.getWindow.service
      let windowsPrice = new Array()
      let orderService = new Array()
      for (let i = 0; i < window.length; i++) {
        windowsPrice.push(this.windowPrice(i+1))
      }

      const deliver = service.isDeliver
      let priceDeliver = 0
      if(deliver !== false && deliver !== "false") {
        priceDeliver = Number(servPrice.deliver)
        console.log(`Цена доставки ${priceDeliver}`)
      }
      orderService.push(priceDeliver)

      const dismantling = service.isDismantling
      let priceDismantling = 0
      if(dismantling !== false && dismantling !== "false") {
        priceDismantling = Number(servPrice.dismantling)
        console.log(`Цена демонтажа ${priceDismantling}`)
      }
      orderService.push(priceDismantling)

      const mounting = service.isMounting
      let priceMounting = 0
      if(mounting !== false && mounting !== "false") {
        priceMounting = Number(servPrice.mounting)
        console.log(`Цена монтажа ${priceMounting}`)
      }
      orderService.push(priceMounting)

      const garbage = service.isGarbage
      let priceGarbage = 0
      if(garbage !== false && garbage !== "false") {
        priceGarbage = Number(servPrice.garbage)
        console.log(`Цена вывоза мусора ${priceGarbage}`)
      }
      orderService.push(priceGarbage)

      const orderPrice = windowsPrice.concat(orderService)

      return orderPrice.reduce(reducer)
    }
  },
  computed: {
    ...mapState('configurator', {
        title: 'title',
        orders: 'orders',
        service: 'service'
    }),
    ...mapGetters('orders', ['PRICE_LIST']),
    getOrder() {
      const ord = new URLSearchParams(document.location.search).get('order')
      return ord
    },
    getWindow() {
      const localDate = JSON.parse(localStorage.orders)
      console.log(localDate)
      const order = this.getOrder
      const index = localDate.findIndex(ord => ord.id === order)
      console.log(localDate[index])
      return localDate[index]
    },
    OrderPrice() {
      const orderID = new URLSearchParams(document.location.search).get('order')
      const index = this.PRICE_LIST.findIndex(ord => ord.id === orderID)
      console.log(`Заказ ${orderID}`)
      console.log(`Прайс ${this.PRICE_LIST[index]}`)
      return this.PRICE_LIST[index]
    },
  },
  watch: {
    
  },
  mounted() {
    this.GET_PRICE_LIST()
  },
}
</script>