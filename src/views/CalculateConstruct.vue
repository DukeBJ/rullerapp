<template>
  <div>
    <TopActive title="Расчёт конструкций" />
    <main class="card-place">
      <div class="container">
        
          <TypeBuild/>
          <ConstructList/>
        
      </div>
    </main>
  </div>
</template>

<script>
import TopActive from '@/components/TopActive.vue'
import ConstructList from '@/components/ConstructList.vue'
import TypeBuild from '@/components/TypeBuild.vue'

export default {
  name: 'CalculateConstructPage',
  components: {
    TopActive,
    ConstructList,
    TypeBuild
  },
  data() {
    return {
      calculationPrice: [
      ]
    }
  }

}
</script>