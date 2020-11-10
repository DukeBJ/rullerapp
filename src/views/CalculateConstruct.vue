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
import TopActive from '@/components/TopActive.vue'
import ApertureCheck from '@/components/ApertureCheck.vue'
import ApertureSquare from '@/components/ApertureSquare.vue'
import ConstructConfig from '@/components/ConstructConfig.vue'
import ConstructList from '@/components/ConstructList.vue'
import OrderDetails from '@/components/OrderDetails.vue'

export default {
  name: 'CalculateConstructPage',
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