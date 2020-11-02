<template>
  <div class="col-12">
    <Donut
      v-for="donut in donutInfo"
      v-bind:key="donut.id"
      v-bind:donut="donut"
    />
  </div>
</template>

<script>
import Donut from '@/components/Donut.vue'

export default {
  name: 'DonutList',
  components: {
    Donut
  },
  props: {
    donutInfo: {
      type: Array,
      required: true, 
    }
  }
}
</script>