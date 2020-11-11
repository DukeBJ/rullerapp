<template>
  <div class="container">
    <SquareSizeList/>
    <ApertureSize/>
  </div>
</template>

<script>
import SquareSizeList from '@/components/configurator/SquareSizeList.vue'
import ApertureSize from '@/components/configurator/ApertureSize.vue'

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