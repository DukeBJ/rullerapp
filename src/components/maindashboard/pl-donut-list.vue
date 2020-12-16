<template>
  <div class="col-12">
    <pl-donut
      v-for="(donut, index) in DASHBOARD_LIST.donutInfo"
      :key="index"
      :index="index"
      :donut="donut"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import plDonut from '@/components/maindashboard/pl-donut.vue'

export default {
  name: 'pl-donut-list',
  components: {
    plDonut
  },
  // props: {
  //   donutInfo: {
  //     type: Array,
  //     required: true, 
  //   }
  // },
  computed: {
    ...mapGetters('dashboard', [
      'DASHBOARD_LIST',
    ]),
  }
}
</script>