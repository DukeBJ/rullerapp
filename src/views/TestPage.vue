<template>
  <div>
    <TopActive :title="title.check" />
    <main class="card-place">
          <div
            v-for="schedule of scheduleList"
            :key="schedule.number"
            >
            <button
              @click="newOrder(schedule.number)"
              class="app-btn btn__blue">Начать {{schedule.number}}</button>

            <ConfigPage
              v-for="order in orders"
              :key="order.id"
              :buildType="order.buildType"
              :order="order"
              @update-build="updateBuildType"
            />

          </div>

          {{scheduleList}}
          
          <!-- <TestInfo
            v-for="thisorder of order"
            :key="thisorder.id"
            :id="thisorder.id"
            :buildType="thisorder.buildType"
            :constructions="thisorder.constructions"
            :service="thisorder.service"
          /> -->
              
    </main>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import TopActive from '@/components/TopActive.vue'
import ConfigPage from '@/components/configurator/testInfo.vue'


export default {
  name: 'ConfiguratorPage',
  components: {
    TopActive,
    ConfigPage
  },
  computed: {
    ...mapGetters('schedule', ['scheduleList']),
    ...mapState('configurator', {
        title: 'title',
        orders: 'orders',
        service: 'service'
    }),
  },
  methods: {
    ...mapActions('schedule', [
        'loadSchedule',
    ]),
    ...mapActions('configurator', [
        'updaetBuildType',
        'newOrder',
    ]),
  },
  mounted() {
    //this.newOrder()
  },
}
</script>