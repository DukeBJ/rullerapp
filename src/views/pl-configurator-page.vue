<template>
  <div>
    <pl-header-atwork :title="title.check" />
    <main class="card-place">
      <pl-aperture-check
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
import { mapState, mapActions } from 'vuex'
import plHeaderAtwork from '@/components/pl-header-atwork.vue'
import plApertureCheck from '@/components/configurator/aperture/pl-aperture-check.vue'
// import ApertureSquare from '@/components/configurator/ApertureSquare.vue'
// import ConstructConfig from '@/components/configurator/ConstructConfig.vue'
// import ConstructList from '@/components/configurator/ConstructList.vue'
// import OrderDetails from '@/components/configurator/OrderDetails.vue'
import TestInfo from '@/components/configurator/testInfo.vue'

export default {
  name: 'pl-configurator-page',
  components: {
    plHeaderAtwork,
    plApertureCheck,
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
    //this.GET_SCHEDULE_LIST()
    //this.newOrder()
  },
}
</script>