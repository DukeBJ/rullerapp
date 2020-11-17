<template>
  <div class="col-12">
    <pl-schedule
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