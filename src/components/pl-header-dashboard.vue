<template>
  <div class="col-12">
    <div class="avatar">
      <img
        v-if="!isAvatar"
        :src="noAvatar"
        alt=""
      >
      <img
        v-if="isAvatar"
        :src="noAvatar"
        alt=""
      >
    </div>
    <h2 class="name">{{ DASHBOARD_LIST.firstname }} {{ DASHBOARD_LIST.lastname }}</h2>
    <div class="monthly-stat">
      <div class="salary">Заработал с{{'\u00A0'}}начала месяца на{{ '\u00A0' }}сегодня<span>{{ summa | priceFormat}}</span></div>
      <div class="sale">{{ sale | priceFormat }} ({{ persent(sale) }}%) — продажи</div>
      <div class="bonus">{{ bonus | priceFormat }} ({{ persent(bonus) }}%) — бонус</div>
    </div>
  </div>
</template>

<script>
import priceFormat from '@/components/filters/priceFormat'
import {mapGetters} from 'vuex'
import noAvatar from "@/assets/img/icons/person.svg";

export default {
  name: 'pl-header-dashboard',
  data() {
    return {
      isAvatar: false,
      noAvatar
    }
  },
  props: {
  },
  computed: {
    sale() {
      return Number(this.DASHBOARD_LIST.sale)
    },
    bonus() {
      return Number(this.DASHBOARD_LIST.bonus)
    },
    summa: function() {
      return this.sale + this.bonus
    },
    ...mapGetters('dashboard', [
      'DASHBOARD_LIST',
      ]),
  },
  methods: {
    persent(num) {
      let persent = (num * 100) / Number(this.summa)
      return persent
    },
  },
  filters: {
    priceFormat
  }
}
</script>