<template>
  <div class="col-12">
    <pl-card-diagram-line
      v-for="(card, index) in DASHBOARD_LIST.cardInfo"
      :key="index"
      :card="card"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import plCardDiagramLine from '@/components/maindashboard/pl-card-diagram-line.vue'

export default {
  name: 'pl-card-list',
  components: {
    plCardDiagramLine,
  },
  // props: {
  //   cardInfo: {
  //     type: Array,
  //     required: true,
  //   }
  // },
  computed: {
    ...mapGetters('dashboard', [
      'DASHBOARD_LIST',
      ]),
  }
}
</script>