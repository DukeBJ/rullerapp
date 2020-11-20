<template>
  <div>
    <pl-header-atwork :title="title.check" />
    <main
      class="card-place"
      v-if="checkOrder()"
    >
      <pl-aperture-check
        v-if="check.square === false"
        :key="checkOrder().id"
        :order="checkOrder()"
        @update-build="UPD_BUILDTYPE"
        @add-construction="ADD_CONSTRUCTION"
        @type-apertude="apertude"
      />
      <pl-aperture-square
        v-if="check.square === true"
        :constructions="checkOrder().constructions"
      />
      <!-- <ConstructConfig/> -->
      <!-- <ConstructList/> -->
      <!-- <OrderDetails/> -->
      <TestInfo
        :key="checkOrder().id +1"
        :id="checkOrder().id"
        :buildType="checkOrder().buildType"
        :constructions="checkOrder().constructions"
        :service="checkOrder().service"
        />
              
    </main>
    <main v-else>
      <h2>Заказ не создан</h2>
      <div>Вернитесь к списку замеров и попробуйте еще раз</div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import plHeaderAtwork from '@/components/pl-header-atwork.vue'
import plApertureCheck from '@/components/configurator/aperture/pl-aperture-check.vue'
import plApertureSquare from '@/components/configurator/aperture/square/pl-aperture-square.vue'
// import ConstructConfig from '@/components/configurator/ConstructConfig.vue'
// import ConstructList from '@/components/configurator/ConstructList.vue'
// import OrderDetails from '@/components/configurator/OrderDetails.vue'
import TestInfo from '@/components/configurator/testInfo.vue'

export default {
  name: 'pl-configurator-page',
  components: {
    plHeaderAtwork,
    plApertureCheck,
    plApertureSquare,
    // ConstructConfig,
    // ConstructList,
    // OrderDetails,
    TestInfo
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
        square: false,
        balkonLeft: false,
        balkonRight: false,
        balkonCenter: false
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
    ]),
    orderId() {
      return new URLSearchParams(document.location.search).get('order')
    },
    checkOrder() {
      const index = this.orders.findIndex(ord => ord.id === this.ordern)
      return this.orders[index]
    },
    apertude(check) {
      console.log(check)
      if (check.square) {
        return this.check.square = check.square
      }
    }
  },
}
</script>