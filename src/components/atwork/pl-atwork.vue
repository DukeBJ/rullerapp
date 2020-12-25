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
        <div
          class="price"
          v-if="measurement.price">
          {{ measurement.price | priceFormat }}
        </div>
        <div
          class="price opacity20"
          v-else>
          —
        </div>
        <!-- <div class="price" :class="{ opacity20: !active.done }">{{ active.price | priceFormat }}</div> -->
        <div class="custumer-info">
          <div class="client">
            №{{ measurement.number }}
          </div>
          <div class="date">
            {{ measurement.date }}
          </div>
        </div>
        <div class="status">
          <span v-if="measurement.status == 0" class="bg__gray"></span>
          <span v-else-if="measurement.status == 1" class="bg__yellow"></span>
          <span v-else-if="measurement.status == 2" class="bg__red"></span>
          <span v-else-if="measurement.status == 3" class="bg__blue"></span>
          
        </div>
      </div>

      <div v-if="measurement.status == 0" class="label-left bg__gray"><span>Новый</span></div>
      <div v-else-if="measurement.status == 1" class="label-left bg__yellow"><span>Замер</span></div>
      <div v-else-if="measurement.status == 2" class="label-left bg__red"><span>Отказ</span></div>
      <div v-else-if="measurement.status == 3" class="label-left bg__blue"><span>Договор</span></div>

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
  // .card {
  //   cursor: pointer;
  //   &.disabled {
  //     cursor: not-allowed;
  //   }
  // }
</style>