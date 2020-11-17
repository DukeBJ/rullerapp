<template>
  <div class="col-12">
    <pl-card-diagram-line
      v-for="card in cardInfo"
      v-bind:key="card.id"
      v-bind:card="card"
    />
  </div>
</template>



<script>
import plCardDiagramLine from '@/components/maindashboard/pl-card-diagram-line.vue'

export default {
  name: 'pl-card-list',
  components: {
    plCardDiagramLine,
  },
  props: {
    cardInfo: {
      type: Array,
      required: true,
    }
  }
}
</script>