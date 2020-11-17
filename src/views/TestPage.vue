<template>
  <div>
    <plHeaderAtwork :title="title.check" />
    <main class="card-place">
          <div
            v-for="schedule of SCHEDULE_LIST"
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

          {{SCHEDULE_LIST}}
          
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
import plHeaderAtwork from '@/components/pl-header-atwork.vue'
import ConfigPage from '@/components/configurator/testInfo.vue'


export default {
  name: 'ConfiguratorPage',
  components: {
    plHeaderAtwork,
    ConfigPage
  },
  computed: {
    ...mapGetters('schedule', ['SCHEDULE_LIST']),
    ...mapState('configurator', {
        title: 'title',
        orders: 'orders',
        service: 'service'
    }),
  },
  methods: {
    ...mapActions('schedule', [
        'GET_SCHEDULE_LIST',
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