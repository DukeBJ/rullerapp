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
          <div class="price">{{sumOrder}}₽</div>
        </div>
        <pl-order-window-list
          v-for="win in getWindow.constructions"
          :key="win.window"
          :winNo="win.window"
          :config="win.config"
          :price="priceList"
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
  import plOrderWindowList from '@/components/atwork/order/pl-order-window-list.vue'
  import plHeaderAtwork from '@/components/pl-header-atwork.vue'
  import plOrderWindowEdit from '../components/atwork/order/pl-order-window-list.vue'
// import plApertureSquare from '@/components/configurator/aperture/square/pl-aperture-square.vue'
// import plConstructConfig from '@/components/configurator/pl-construct-config.vue'
// import plConstructList from '@/components/configurator/pl-construct-list.vue'
// import plOrderService from '@/components/configurator/pl-order-service.vue'


export default {
  name: 'pl-configurator-page',
  components: {
    plOrderWindowList,
    plHeaderAtwork,
    plOrderWindowEdit,
    // plApertureCheck,
    // plApertureSquare,
    // plConstructConfig,
    // plConstructList,
    // plOrderService,
    // TestInfo
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
      priceList: {},
      // thisOrder: '',
      isWindowList: true,
      isWindowEdit: false
    }
  },
  computed: {
    ...mapState('configurator', {
        title: 'title',
        orders: 'orders',
        service: 'service'
    }),
    ...mapGetters('orders', ['PRICE_LIST']),
    getWindow() {
      const localDate = JSON.parse(localStorage.orders)
      console.log(localDate)
      const order = new URLSearchParams(document.location.search).get('order')
      const index = localDate.findIndex(ord => ord.id === order)
      console.log(localDate[index])
      return localDate[index]
    },
  },
  watch: {
    calcOrderSum() {
      return this.calcOrderSum()
    }
  },
  methods: {
    ...mapActions('orders', [
        'GET_PRICE_LIST',
    ]),
    ...mapActions('configurator', [
        'UPD_BUILDTYPE',
        'ADD_CONSTRUCTION',
        'ADD_SIZE',
        'ADD_CONFIG',
        'ADD_SERVICES'
    ]),
    orderTitle() {
      const ord = new URLSearchParams(document.location.search).get('order')
      console.log(ord)
      return 'Заказ №' + ord
    },
    checkOrder() {
      const index = this.orders.findIndex(ord => ord.id === this.ordern)
      return this.orders[index]
    },
    calcOrderSum() {
      const order = new URLSearchParams(document.location.search).get('order')
      const index = this.PRICE_LIST.findIndex(ord => ord.id === order)
      this.priceList = this.PRICE_LIST[index]
    },
    editWindow(e) {
      console.log(e)
    },
    orderDone() {
      
    },
    measureEnd() {
      
    }
  },
  mounted() {
    this.GET_PRICE_LIST()
    this.calcOrderSum()
  },
}
</script>