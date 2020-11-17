<template>
  <div class="col-12">
    <pl-atwork
      v-for="active in calculationPrice"
      v-bind:key="active.id"
      v-bind:active="active"
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
    calculationPrice: {
      type: Array,
      required: true,
    }
  },
}
</script>