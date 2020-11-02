<template>
  <div class="col-12">
    <CardLineDiagram
      v-for="card in cardInfo"
      v-bind:key="card.id"
      v-bind:card="card"
    />
  </div>
</template>



<script>
import CardLineDiagram from '@/components/CardLineDiagram.vue'
// import Loader from '@/components/Loader.vue'

export default {
  name: 'CardList',
  components: {
    CardLineDiagram,
    // Loader
  },
  props: {
    cardInfo: {
      type: Array,
      required: true,
    }
  }
}
</script>