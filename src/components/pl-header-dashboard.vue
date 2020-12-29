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
    <!-- Скрыть это в компонент -->
    <h2 v-if="DASHBOARD_LIST.person" class="name">{{ DASHBOARD_LIST.person}}</h2>
    <h2 v-else class="name">... загрузка данных ...</h2>
    <div v-if="DASHBOARD_LIST.sum" class="monthly-stat">
      <div class="salary">Заработал с{{'\u00A0'}}начала месяца на{{ '\u00A0' }}сегодня<span>{{ DASHBOARD_LIST.sum | priceFormat}}</span></div>
      <div class="sale">{{ DASHBOARD_LIST.sale | priceFormat }} ({{ persent(DASHBOARD_LIST.sale) }}%) — продажи</div>
    </div>
    <div v-else class="monthly-stat">
      <div class="salary">Заработал с{{'\u00A0'}}начала месяца на{{ '\u00A0' }}сегодня<span>—</span></div>
      <div class="sale">—</div>
    </div>

    <pl-donut
      :equel="+DASHBOARD_LIST.equel"
      :category="+DASHBOARD_LIST.category"
    />

    <div class="card-diagram">
      <h3 class="total-zamer">Выполненные замеры: {{ DASHBOARD_LIST.zamer[0].all }}</h3>
      <pl-diagram-line-small
        v-for="(item, key, index) in DASHBOARD_LIST.zamer[1]"
        :key="index"
        :type="key"
        :value="item"
        :total="DASHBOARD_LIST.zamer[0].all"
      />
    </div>

  </div>
</template>

<script>
import priceFormat from '@/components/filters/priceFormat'
import {mapGetters} from 'vuex'
import noAvatar from "@/assets/img/icons/person.svg"
import plDonut from '@/components/maindashboard/pl-donut'
import plDiagramLineSmall from '@/components/maindashboard/pl-diagram-line-small'

export default {
  name: 'pl-header-dashboard',
  components: {
    plDonut,
    plDiagramLineSmall
  },
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
    ...mapGetters('dashboard', [
      'DASHBOARD_LIST',
      ]),
  },
  methods: {
    persent(num) {
      let persent = (num * 100) / Number(this.DASHBOARD_LIST.sum)
      return persent
    },
  },
  filters: {
    priceFormat
  }
}
</script>