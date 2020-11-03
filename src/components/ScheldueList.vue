<template>
  <div class="col-12">
    <Schedule
      v-for="schedule in scheduleInfo"
      v-bind:key="schedule.id"
      v-bind:number="schedule.number"
      v-bind:time="schedule.time"
      v-bind:customer="schedule.customer[0]"
    />
  </div>
</template>

<script>
import Schedule from '@/components/Schedule.vue'

export default {
  name: 'ScheduleList',
  components: {
    Schedule
  },
  props: {
    scheduleInfo: {
      type: Array,
      required: true,
    }
  }
}
</script>