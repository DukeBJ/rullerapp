<template>
  <div class="col-12">
    <CardLineDiagram
      v-for="card in cardInfo"
      v-bind:key="card"
      v-bind:card="card"
    />
  </div>
</template>



<script>
import CardLineDiagram from '@/components/CardLineDiagram.vue'

export default {
  name: 'CardList',
  components: {
    CardLineDiagram
  },
  props: ['cardInfo']
}
</script>