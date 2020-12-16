<template>
  <div>
    <pl-loader
      v-if="isLoading"
    />
    <main v-else class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <pl-schedule-list
            :scheduleList="SCHEDULE_LIST"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import plScheduleList from '@/components/schedule/pl-schedule-list.vue'

export default {
  name: 'pl-schedule-page',
  components: {
    plScheduleList,
    
  },
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    ...mapActions('schedule', [
        'GET_SCHEDULE_LIST',
    ]),
  },
  watch: {
    loading() {
      this.isLoading = this.loading
    }
  },
  computed: {
    ...mapGetters('schedule', [
      'SCHEDULE_LIST',
      ]),
      ...mapState('schedule', [
      'loading',
      ]),
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