<template>
  <header class="app-header">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="avatar"><img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" alt=""></div>
          <h2 class="name">{{ name }} {{ family }}</h2>
          <div class="monthly-stat">
            <div class="salary">Заработал с{{'\u00A0'}}начала месяца на{{ '\u00A0' }}сегодня<span>{{ summa | ruPrice}}</span></div>
            <div class="sale">{{ sale | ruPrice }} ({{ sale_persent }}%) — продажи</div>
            <div class="bonus">{{ bonus | ruPrice }} ({{ bonus_persent }}%) — бонус</div>
          </div>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    name: String,
    family: String,
    sale: String,
    bonus: String,
    sale_persent: String,
    bonus_persent: String
  },
  computed: {
    summa: function() {
      return Number(this.sale) + Number(this.bonus)
    }
  },
  filters: {
    ruPrice(value) {
      return Intl.NumberFormat("ru").format(value) + '\u00A0₽'
    }
  }
}
</script>

<style>
</style>