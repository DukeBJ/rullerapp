<template>
  <div class="container">
    <SquareSizeList/>
    <ApertureSize/>
  </div>
</template>

<script>
import SquareSizeList from '@/components/SquareSizeList.vue'
import ApertureSize from '@/components/ApertureSize.vue'

export default {
  name: 'ApertureSquare',
  components: {
    SquareSizeList,
    ApertureSize,
  },
  data() {
    return {
      calculationPrice: [
      ],
    }
  }
}
</script>