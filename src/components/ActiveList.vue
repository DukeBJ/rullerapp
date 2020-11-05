<template>
  <div class="col-12">
    <Active
      v-for="active in calculationPrice"
      v-bind:key="active.id"
      v-bind:active="active"
    />
  </div>
</template>

<script>
import Active from '@/components/Active.vue'

export default {
  name: 'Active',
  components: {
    Active
  },
  props: {
    calculationPrice: {
      type: Array,
      required: true,
    }
  },
}
</script>