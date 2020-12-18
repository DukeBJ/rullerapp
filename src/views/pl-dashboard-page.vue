<template>
  <div>
    <pl-loader
      v-if="isLoading"
    />
    <main v-else class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <pl-card-list
          />
          <pl-donut-list
          />
          <pl-compliment
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import plCardList from '@/components/maindashboard/pl-card-list.vue'
import plDonutList from '@/components/maindashboard/pl-donut-list.vue'
import plCompliment from '@/components/maindashboard/pl-compliment.vue'

export default {
    name: 'pl-dashboard-page',
    components: {
      plCardList,
      plDonutList,
      plCompliment,
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
    // ...mapGetters('dashboard', [
    //   'DASHBOARD_LIST',
    //   ]),
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