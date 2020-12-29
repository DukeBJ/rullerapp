<template>
  <div class="col-12">
    <pl-card-diagram-line
      v-for="(card, key, index) in prod"
      :key="index"
      :card="card"
      :type="key"
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
  props: ['prod'],
  // props: {
  //   cardInfo: {
  //     type: Array,
  //     required: true,
  //   }
  // },
  computed: {
  
  }
}
</script>