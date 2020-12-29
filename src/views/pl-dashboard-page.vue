<template>
  <div>
    <pl-loader
      v-if="isLoading"
    />
    <main v-else class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <pl-card-diagram-line
            :prod="DASHBOARD_LIST.prod"
          />
          <div>
            <h3>Рекламационный фонд:</h3>
            <div>{{DASHBOARD_LIST.fond}}</div>
          </div>
          <pl-compliment
            :person="DASHBOARD_LIST.person"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import plCompliment from '@/components/maindashboard/pl-compliment.vue'
import PlCardDiagramLine from '../components/maindashboard/pl-card-diagram-line.vue'

export default {
    name: 'pl-dashboard-page',
    components: {
      plCompliment,
      PlCardDiagramLine,
  },
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    ...mapActions('dashboard', [
        'GET_DASHBOARD_LIST',
    ]),
  },
  watch: {
    loading() {
      this.isLoading = this.loading
    }
  },
  computed: {
    ...mapState('dashboard', [
        'loading',
    ]),
    ...mapGetters('dashboard', [
      'DASHBOARD_LIST',
      ]),
  },
  mounted() {
    this.GET_DASHBOARD_LIST()
  },
  created () {
    this.$storage.set('test', { key: 'value' }, { ttl: 60 * 1000 })
    const data = this.$storage.get('test')
    const fallback = this.$storage.get('unknown', 'fallback') // Not in storage
    console.log(data) // { key: 'value' }
    console.log(fallback) // "fallback"
  }
}
</script>

<style>
</style>