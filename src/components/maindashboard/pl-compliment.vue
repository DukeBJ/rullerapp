<template>
  <div class="col-12">
    <div class="compliment">
      <div class="compliment__name">Молодец, {{ DASHBOARD_LIST.firstname }}!</div>
      <div class="compliment__desc">Продолжай в том же духе… и в конце года точно погасишь ипотеку!</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'pl-compliment',
  // props: {
  //   name: String,
  // },
  computed: {
    ...mapGetters('dashboard', [
      'DASHBOARD_LIST',
      ]),
  }
}
</script>