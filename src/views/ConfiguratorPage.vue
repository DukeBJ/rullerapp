<template>
  <div>
    <TopActive :title="title" />
    <main class="card-place">
          <ApertureCheck/>
          <ApertureSquare/>
          <ConstructConfig/>
          <ConstructList/>
          <OrderDetails/>
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

export default {
  name: 'ConfiguratorPage',
  components: {
    TopActive,
    ApertureCheck,
    ApertureSquare,
    ConstructConfig,
    ConstructList,
    OrderDetails
  },
  data() {
    return {
      calculationPrice: [
      ],
      title: "Растчет конструкций"
    }
  }
}
</script>