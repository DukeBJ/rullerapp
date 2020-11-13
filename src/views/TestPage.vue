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
          </div>
          <!-- <ApertureCheck
            :order="order"
            @update-build="updaetBuildType"
          /> -->
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
//import ApertureCheck from '@/components/configurator/ApertureCheck.vue'
//import TestInfo from '@/components/configurator/testInfo.vue'

export default {
  name: 'ConfiguratorPage',
  components: {
    TopActive,
    //ApertureCheck,
    //TestInfo
  },
  computed: {
    ...mapGetters('schedule', ['scheduleList']),
    ...mapState('configurator', {
        title: 'title',
        order: 'order',
        service: 'service'
    }),
  },
  methods: {
    ...mapActions('schedule', [
        'loadSchedule',
    ]),
    ...mapActions('configurator', [
        //'updaetBuildType',
        'newOrder',
    ]),
    submit(number) {
      console.log(number)
    }
  },
  mounted() {
    //this.updaetBuildType()
    this.loadSchedule()
    this.newOrder()
  },
}
</script>