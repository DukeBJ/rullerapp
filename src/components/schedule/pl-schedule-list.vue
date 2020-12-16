<template>
  <div class="col-12">
    <pl-schedule
      v-for="schedule in scheduleList.filter(ds => ds.done == false)"
      :key="schedule.number"
      :number="schedule.number"
      :time="schedule.time"
      :done="schedule.done"
      :customer="schedule.customer[0]"
      @new-order-start="newOrder"
    />
    <pl-schedule
      v-for="schedule in scheduleList.filter(ds => ds.done == true)"
      :key="schedule.number"
      :number="schedule.number"
      :time="schedule.time"
      :done="schedule.done"
      :customer="schedule.customer[0]"
      @new-order-start="newOrder"
    />
  </div>
</template>

<script>
import plSchedule from '@/components/schedule/pl-schedule.vue'

export default {
  name: 'pl-schedule-list',
  components: {
    plSchedule
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