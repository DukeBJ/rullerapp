<template>
    <div class="card card-active">
      <div class="card-header">
        <div class="price" v-bind:class="{ opacity20: !active.done }">{{ active.price | ruPrice }}</div>
        <div class="custumer-info">
          <div class="client">
            №{{ active.number }}
          </div>
          <div class="date">
            {{ active.date }}
          </div>
        </div>
        <div class="status">
          <span v-if="active.done == true" class="bg__blue"></span>
          <span v-else class="bg__yellow"></span>
        </div>
      </div>

      <div v-if=" active.done == true " class="label-left"><span>Рассчитан</span></div>
      <div v-else class="label-left bg__yellow"><span>Ожидает</span></div>

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
  filters: {
    ruPrice(value) {
      return Intl.NumberFormat("ru").format(value) + '\u00A0₽'
    }
  }
}
</script>
