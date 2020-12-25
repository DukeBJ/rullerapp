<template>
  <div class="col-12">
    <h1
      v-if="isSchedule"
      class="inner-page"
    >Расписание замеров на{{ '\u00A0' + today + '\u00A0' }}г.</h1>
    <h1
      v-else
      class="inner-page"
    >{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'pl-header-text',
  components: {},
  props: {
    title: {
      type: String,
      default: "тут заголовок"
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isSchedule() {
      return this.$route.name === 'schedule'
    },
    today: function() {
      let dateConstr = new Date().toJSON().slice(0,10)
      let yyyy = dateConstr.slice(0,4)
      let mm = dateConstr.slice(5,7)
      let dd = dateConstr.slice(8,10)
      dateConstr = dd + '.' + mm + '.' + yyyy
      return dateConstr
    }
  }
}
</script>