<template>
  <div>
    <pl-header-atwork :title="orderTitle()" />
    <main
      class="card-place"
      v-if="orderID !== null && thisOrder === true"
    >
      <div class="container">
        <pl-order-topinfo
          :winNo="editWinNo"
          :price="windowPrice(editWinNo)"
          :orderSum="orderSum()"
          :winEdit="winEdit"
          :sizes="getSizes(editWinNo)"
        />

        <pl-order-window-list
          v-if="isWindowList"
          :constructions="GET_ORDER.constructions"
          :priceList="orderPrice.constructions[0].config"
          @edit-window="editWindow"
          @order-done="orderDone"
        />

        <pl-order-window-edit
          v-if="isWindowEdit"
          :winNo="editWinNo"
          :price="this.orderPrice.constructions[0]"
          :config="GET_ORDER.constructions[editWinNo-1].config"
          :service="GET_ORDER.service"
          :orderID="orderID"
          @edit-window="editEnd"
        />

        <pl-order-confirm
          v-if="isEnd"
          :constr="GET_ORDER.constructions"
          :service="GET_ORDER.service"
          :orderID="orderID"
        />
      </div>
    </main>
    <main v-else>
      <h2>Заказ не передан в работу</h2>
      <div>Вернитесь к списку замеров и попробуйте еще раз</div>
    </main>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import plOrderWindowList from '@/components/atwork/order/pl-order-window-list.vue'
  import plHeaderAtwork from '@/components/pl-header-atwork.vue'
  import plOrderWindowEdit from '@/components/atwork/order/pl-order-window-edit.vue'
  import plOrderTopinfo from '@/components/atwork/order/pl-order-topinfo.vue'
  import plOrderConfirm from '@/components/atwork/order/pl-order-confirm.vue'

export default {
  name: 'pl-configurator-page',
  components: {
    plOrderWindowList,
    plHeaderAtwork,
    plOrderWindowEdit,
    plOrderTopinfo,
    plOrderConfirm
  },
  data() {
    return {
      orderID: this.$route.params.id,
      sumOrder: '',
      sumWindows: [],
      isWindowList: true,
      isWindowEdit: false,
      editWinNo: null,
      winEdit: false,
      isEnd: false
    }
  },

  methods: {
    ...mapActions('orders', [
        'GET_PRICE_LIST',
        'GET_LOCAL_ORDERS'
    ]),
    orderTitle() {
      return 'Заказ №' + this.orderID
    },
    // checkOrder() {
    //   const index = this.orders.findIndex(ord => ord.id === this.orderID)
    //   return this.orders[index]
    // },
    editWindow(e) {
      console.log(e)
      this.editWinNo = e
      this.isWindowList = false
      this.isWindowEdit = true
      this.winEdit = true
    },
    editEnd(e) {
      this.isWindowList = !e.isWindowEdit
      this.isWindowEdit = e.isWindowEdit
      this.winEdit = e.isWindowEdit
    },
    orderDone(e) {
      this.isWindowList = !e.isEnd
      this.isEnd = e.isEnd
    },
    windowPrice(a) {
      if(a!==null) {
      // Потом вместо [0] нужно будет подставлять (winNo - 1)
      const price = this.orderPrice.constructions[0].config
      const window = this.GET_ORDER.constructions
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
      }
    },
    orderSum() {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const servPrice = this.orderPrice.constructions[0].service
      const window = this.GET_ORDER.constructions
      const service = this.GET_ORDER.service
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
    },
    getSizes(a) {
      if(a!==null) {
        return this.GET_ORDER.constructions[a-1].sizes
      }
    },
    
  },
  computed: {
    ...mapState('configurator', {
        title: 'title',
        orders: 'orders',
        service: 'service'
    }),
    ...mapGetters('orders',[
        'PRICE_LIST',
        'GET_ORDER'
      ]),
    thisOrder() {
      return localStorage.orders.includes(this.orderID)
    },
    orderPrice() {
      const index = this.PRICE_LIST.findIndex(ord => ord.id === this.orderID)
      console.log(`Заказ ${this.orderID}`)
      console.log(`Прайс ${this.PRICE_LIST[index]}`)
      return this.PRICE_LIST[index]
    },
  },
  watch: {
    
  },
  mounted() {
    this.GET_PRICE_LIST()
    this.GET_LOCAL_ORDERS(this.orderID)
  },
}
</script>