<template>
  <div>
    <main
      class="card-place"
      v-if="checkOrder()"
    >
      <pl-aperture-check
        v-if="check.aperture"
        :key="checkOrder().id"
        :order="checkOrder()"
        @update-build="UPD_BUILDTYPE"
        @add-construction="ADD_CONSTRUCTION"
        @type-aperture="aperture"
      />
      <pl-aperture-square
        v-if="check.square"
        :constructions="checkOrder().constructions"
        :orderID="checkOrder().id"
        :order="checkOrder()"
        @add-size="ADD_SIZE"
        @sizes-done="sizesDone"
      />
      <pl-construct-config
        v-if="check.config"
        :orderID="checkOrder().id"
        :winNo="checkOrder().constructions.length"
        @send-config="ADD_CONFIG"
        @config-done="configDone"
      />
      <pl-construct-list
        v-if="check.windows"
        :constructions="checkOrder().constructions"
        @add-window="addWindow"
        @last-step="lastStep"
      />
      <pl-order-service
        v-if="check.last"
        :orderID="checkOrder().id"
        @send-order="ADD_SERVICES"
      />
      <!-- <TestInfo
        :key="checkOrder().id +1"
        :id="checkOrder().id"
        :buildType="checkOrder().buildType"
        :constructions="checkOrder().constructions"
        :service="checkOrder().service"
        />   -->
    </main>
    <main v-else>
      <h2>Заказ не создан</h2>
      <div>Вернитесь к списку замеров и попробуйте еще раз</div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import plApertureCheck from '@/components/configurator/aperture/pl-aperture-check.vue'
import plApertureSquare from '@/components/configurator/aperture/square/pl-aperture-square.vue'
import plConstructConfig from '@/components/configurator/pl-construct-config.vue'
import plConstructList from '@/components/configurator/pl-construct-list.vue'
import plOrderService from '@/components/configurator/pl-order-service.vue'
// import TestInfo from '@/components/configurator/testInfo.vue'

export default {
  name: 'pl-configurator-page',
  components: {
    plApertureCheck,
    plApertureSquare,
    plConstructConfig,
    plConstructList,
    plOrderService,
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
      check: {
        aperture: true,
        square: false,
        balkonLeft: false,
        balkonRight: false,
        balkonCenter: false,
        config: false,
        windows: false,
        last: false
      }
    }
  },
  computed: {
    ...mapState('configurator', {
        title: 'title',
        orders: 'orders',
        service: 'service'
    }),
  },
  methods: {
    ...mapActions('configurator', [
        'UPD_BUILDTYPE',
        'ADD_CONSTRUCTION',
        'ADD_SIZE',
        'ADD_CONFIG',
        'ADD_SERVICES'
    ]),
    orderId() {
      return new URLSearchParams(document.location.search).get('order')
    },
    checkOrder() {
      const index = this.orders.findIndex(ord => ord.id === this.ordern)
      return this.orders[index]
    },
    aperture(check) {
      console.log(check)
      if (check.square) {
        this.check.square = check.square
        this.check.aperture = false
      }
    },
    sizesDone() {
      console.log(`Размеры переданы`)
      this.check.square = false
      this.check.config = true
    },
    // sendConfig(payload) {
    //   console.log(payload)
    // },
    configDone() {
      console.log(`Сонфигурация закончена!`)
      this.check.config = false
      this.check.windows = true
    },
    addWindow() {
      this.check.windows = false
      this.check.aperture = true
    },
    lastStep() {
      this.check.windows = false
      this.check.last = true
    }
  },
}
</script>