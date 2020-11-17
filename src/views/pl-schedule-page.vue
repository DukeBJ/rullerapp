<template>
  <div>
    <pl-header-schedule :date="today" />
    <main class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <pl-schedule-list
            v-bind:scheduleList="SCHEDULE_LIST"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import plHeaderSchedule from '@/components/pl-header-schedule.vue'
import plScheduleList from '@/components/schedule/pl-schedule-list.vue'


export default {
  name: 'pl-schedule-page',
  components: {
    plHeaderSchedule,
    plScheduleList,
    
  },
  methods: {
    ...mapActions('schedule', [
        'GET_SCHEDULE_LIST',
    ]),
  },
  computed: {
    ...mapGetters('schedule', ['SCHEDULE_LIST']),
    today: function() {
      let dateConstr = new Date().toJSON().slice(0,10)
      let yyyy = dateConstr.slice(0,4)
      let mm = dateConstr.slice(5,7)
      let dd = dateConstr.slice(8,10)
      dateConstr = dd + '.' + mm + '.' + yyyy
      return dateConstr
    }
  },
  mounted() {
    this.GET_SCHEDULE_LIST()
  },
}
</script>