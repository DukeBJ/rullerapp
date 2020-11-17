<template>
  <div class="col-12">
    <pl-donut
      v-for="donut in donutInfo"
      v-bind:key="donut.id"
      v-bind:donut="donut"
    />
  </div>
</template>

<script>
import plDonut from '@/components/maindashboard/pl-donut.vue'

export default {
  name: 'pl-donut-list',
  components: {
    plDonut
  },
  props: {
    donutInfo: {
      type: Array,
      required: true, 
    }
  }
}
</script>