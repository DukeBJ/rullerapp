<template>
  <div>
    <TopActive :title="title.check" />
    <main class="card-place">
          <ApertureCheck
            :order="order"
            @update-build="updaetBuildType"
          />
          <ApertureSquare/>
          <ConstructConfig/>
          <ConstructList/>
          <OrderDetails/>
          <TestInfo
            v-for="thisorder of order"
            :key="thisorder.id"
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
import TopActive from '@/components/TopActive.vue'
import ApertureCheck from '@/components/configurator/ApertureCheck.vue'
import ApertureSquare from '@/components/configurator/ApertureSquare.vue'
import ConstructConfig from '@/components/configurator/ConstructConfig.vue'
import ConstructList from '@/components/configurator/ConstructList.vue'
import OrderDetails from '@/components/configurator/OrderDetails.vue'
import TestInfo from '@/components/configurator/testInfo.vue'

export default {
  name: 'ConfiguratorPage',
  components: {
    TopActive,
    ApertureCheck,
    ApertureSquare,
    ConstructConfig,
    ConstructList,
    OrderDetails,
    TestInfo
  },
  computed: {
      ...mapState('configurator', {
          title: 'title',
          order: 'order',
          service: 'service'
      })
  },
  methods: {
    ...mapActions('configurator', [
        'updaetBuildType',
        //'addConstruction',
    ])
  },
  mounted() {
            this.updaetBuildType()
        },
}
</script>