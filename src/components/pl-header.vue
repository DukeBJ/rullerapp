<template>
  <header class="app-header">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="avatar"><img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" alt=""></div>
          <h2 class="name">{{ name }} {{ family }}</h2>
          <div class="monthly-stat">
            <div class="salary">Заработал с{{'\u00A0'}}начала месяца на{{ '\u00A0' }}сегодня<span>{{ summa | priceFormat}}</span></div>
            <div class="sale">{{ sale | priceFormat }} ({{ sale_persent }}%) — продажи</div>
            <div class="bonus">{{ bonus | priceFormat }} ({{ bonus_persent }}%) — бонус</div>
          </div>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
import priceFormat from '@/components/filters/priceFormat';

export default {
  name: 'pl-header',
  props: {
    name: String,
    family: String,
    sale: Number,
    bonus: Number,
    sale_persent: Number,
    bonus_persent: Number
  },
  computed: {
    summa: function() {
      return Number(this.sale) + Number(this.bonus)
    }
  },
  filters: {
    priceFormat
  }
}
</script>

<style>
</style>