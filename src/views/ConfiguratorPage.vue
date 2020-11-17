<template>
  <div>
    <TopActive :title="title.check" />
    <main class="card-place">
  {{orderId()}}<br>
  {{ordern}}
          <ApertureCheck
            v-for="order in orders"
            :key="order.id"
            :order="order"
            @update-build="updateBuildType"
          />
          <!-- <ApertureSquare/> -->
          <!-- <ConstructConfig/> -->
          <!-- <ConstructList/> -->
          <!-- <OrderDetails/> -->
          <TestInfo
            v-for="thisorder of orders"
            :key="thisorder.id +1"
            :id="thisorder.id"
            :buildType="thisorder.buildType"
            :constructions="thisorder.constructions"
            :service="thisorder.service"
            />
              
    </main>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import TopActive from '@/components/TopActive.vue'
import ApertureCheck from '@/components/configurator/ApertureCheck.vue'
// import ApertureSquare from '@/components/configurator/ApertureSquare.vue'
// import ConstructConfig from '@/components/configurator/ConstructConfig.vue'
// import ConstructList from '@/components/configurator/ConstructList.vue'
// import OrderDetails from '@/components/configurator/OrderDetails.vue'
import TestInfo from '@/components/configurator/testInfo.vue'

export default {
  name: 'ConfiguratorPage',
  components: {
    TopActive,
    ApertureCheck,
    // ApertureSquare,
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
  computed: {
    ...mapGetters('schedule', ['scheduleList']),
    ...mapState('configurator', {
        title: 'title',
        orders: 'orders',
        service: 'service'
    }),
  },
  methods: {
    ...mapActions('configurator', [
        'updateBuildType',
    ]),
    orderId() {
      return new URLSearchParams(document.location.search).get('order')
    },
    // buildType(orderId) {
    //   this.updateBuildType(orderId)
    // }
  },
  mounted() {
    //this.updateBuildType()
    //this.loadSchedule()
    //this.newOrder()
  },
}
</script>