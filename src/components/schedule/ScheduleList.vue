<template>
  <div class="col-12">
    <Schedule
      v-for="schedule in scheduleList"
      v-bind:key="schedule.number"
      v-bind:number="schedule.number"
      v-bind:time="schedule.time"
      v-bind:done="schedule.done"
      v-bind:customer="schedule.customer[0]"
      @new-order-start="newOrder"
    />
  </div>
</template>

<script>
import Schedule from '@/components/schedule/Schedule.vue'

export default {
  name: 'ScheduleList',
  components: {
    Schedule
  },
  props: 
    ['scheduleList']
  ,
  methods: {
      newOrder(e) {
          this.$emit('new-order-start', e)
      },
  },
}
</script>