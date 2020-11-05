<template>
  <div>
    <TopActive title="Размеры проёмов" />
    <main class="card-place">
      <div class="container">
        
        <TypeBuild/>
        
      </div>
    </main>
  </div>
</template>

<script>
import TopActive from '@/components/TopActive.vue'
import ConstructList from '@/components/ConstructList.vue'
import TypeBuild from '@/components/TypeBuild.vue'

export default {
  name: 'ApertureSize',
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