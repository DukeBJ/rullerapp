<template>
    <div
      class="card card-active"
    >
    <!-- <div
      class="card card-active"
      :class="{ disabled: !active.done }"
      @click="gotoOrder"
    > -->
      <div class="card-header">
        <div class="price">{{ measurement.price | priceFormat }}</div>
        <!-- <div class="price" :class="{ opacity20: !active.done }">{{ active.price | priceFormat }}</div> -->
        <div class="custumer-info">
          <div class="client">
            №{{ measurement.number }}
          </div>
          <div class="date">
            {{ measurement.date }}
          </div>
        </div>
        <!-- <div class="status">
          <span v-if="active.done == true" class="bg__blue"></span>
          <span v-else class="bg__yellow"></span>
        </div> -->
      </div>

      <!-- <div v-if=" active.done == true " class="label-left"><span>Рассчитан</span></div>
      <div v-else class="label-left bg__yellow"><span>Ожидает</span></div> -->

    </div>
</template>

<script>
import priceFormat from '@/components/filters/priceFormat'
export default {
  name: 'pl-atwork',
  props: {
    measurement: {
      type: Object,
      required: true,
    }
  },
  filters: {
    priceFormat
  },
  methods: {
    gotoOrder() {
      this.$router.push({ name: 'order', params: {id: this.measurement.number} })
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    cursor: pointer;
    &.disabled {
      cursor: not-allowed;
    }
  }
</style>