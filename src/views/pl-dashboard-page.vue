<template>
  <div>
    <main class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <pl-card-list
            v-bind:cardInfo="DASHBOARD_LIST.cardInfo"
          />
          <pl-donut-list
            v-bind:donutInfo="DASHBOARD_LIST.donutInfo"
          />
          <pl-compliment :name="DASHBOARD_LIST.firstname" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
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
      loading: true,
    }
  },
  methods: {
    ...mapActions('dashboard', [
        'GET_DASHBOARD_LIST',
    ]),
  },
  computed: {
    ...mapGetters('dashboard', [
      'DASHBOARD_LIST',
      ]),
  },
  mounted() {
    this.GET_DASHBOARD_LIST()
  },
}
</script>

<style>
</style>