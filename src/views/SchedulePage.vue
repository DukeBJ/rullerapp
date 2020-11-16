<template>
  <div>
    <TopSchedule :date="today" />
    <main class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <ScheduleList
            v-bind:scheduleList="scheduleList"
            @new-order-start="newOrder"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TopSchedule from '@/components/TopSchedule.vue'
import ScheduleList from '@/components/schedule/ScheduleList.vue'


export default {
  name: 'SchedulePage',
  components: {
    TopSchedule,
    ScheduleList,
    
  },
  methods: {
    ...mapActions('schedule', [
        'loadSchedule',
    ]),
    ...mapActions('configurator', [
        'newOrder',
    ]),
  },
  computed: {
    ...mapGetters('schedule', ['scheduleList']),
    today: function() {
      let dateConstr = new Date().toJSON().slice(0,10)
      let yyyy = dateConstr.slice(0,4)
      let mm = dateConstr.slice(5,7)
      let dd = dateConstr.slice(8,10)
      dateConstr = dd + '.' + mm + "." + yyyy
      return dateConstr
    }
  },
  mounted() {
    this.loadSchedule()
    //this.newOrder()
  },
}
</script>