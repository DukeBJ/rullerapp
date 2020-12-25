<template>
  <div class="col-12">
    <pl-atwork
      v-for="(measurement, index) in measurements"
      :key="index"
      :measurement="measurement"
    />
  </div>
</template>

<script>
import plAtwork from '@/components/atwork/pl-atwork.vue'

export default {
  name: 'pl-atwork-list',
  components: {
    plAtwork
  },
  props: {
    measurements: {
      type: Array,
      required: true,
      //default: () => { return []},
    }
  },
}
</script>