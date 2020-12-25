<template>
  <div class="col-12">
    <!-- <pl-schedule
      v-for="schedule in timeSort"
      :key="schedule.number"
      :number="schedule.number"
      :time="schedule.time"
      :customer="schedule.customer"
      @new-order-start="newOrder"
    /> -->
    
    <!-- <h3>Демо данные</h3> -->
    <pl-schedule
      v-for="schedule in timeSort"
      :key="schedule.number"
      :number="schedule.number"
      :time="schedule.time"
      :customer="schedule.customer"
      @new-order-start="newOrder"
    />
    <!-- <pl-schedule
      v-for="schedule in scheduleList.filter(ds => ds.done == true)"
      :key="schedule.number"
      :number="schedule.number"
      :time="schedule.time"
      :done="schedule.done"
      :customer="schedule.customer[0]"
      @new-order-start="newOrder"
    /> -->
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
  computed: {
    timeSort() {
      let rtn = this.scheduleList
      let sortByPrice = (d1, d2) => {
        return (d1.time.replace(/-.*/, '') > d2.time.replace(/-.*/, '')) ? 1 : -1
      }
      rtn.sort(sortByPrice)
      return rtn
    }
  },
  methods: {
      newOrder(e) {
          this.$emit('new-order-start', e)
      },
  },

}
</script>