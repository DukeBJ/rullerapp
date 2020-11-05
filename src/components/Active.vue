<template>
    <div class="card card-shedule">
      <div class="card-header">
        <div class="price">{{ active.price | ruPrice }}</div>
        <div class="custumer-info">
          <div class="client">
            №{{ active.number }}
          </div>
          <div class="time">
            {{ active.date }}
          </div>
        </div>
      </div>

      <div v-if=" active.id == '1' || '2' || '3' " class="label-left"><span>Рассчитан</span></div>
      <div v-else class="label-left label__yellow"><span>Ожидает</span></div>

    </div>
</template>

<script>
export default {
  name: 'Active',
  props: {
    active: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      show: false,
      modalPhoto: false,
      modalEnd: false,
      modalEndNot: false
    }
  },
  filters: {
    ruPrice(value) {
      return Intl.NumberFormat("ru").format(value) + '\u00A0₽'
    }
  }
}
</script>
