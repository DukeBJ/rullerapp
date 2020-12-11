<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <b-form-group label="Демонтаж">
          <b-form-radio v-model="isDismantlingSelected" name="isDismantling" :value="Boolean(1)">Да</b-form-radio>
          <b-form-radio v-model="isDismantlingSelected" name="isDismantling" :value="Boolean(0)">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Доставка">
          <b-form-radio v-model="isDeliverSelected" name="isDeliver" :value="Boolean(1)">Да</b-form-radio>
          <b-form-radio v-model="isDeliverSelected" name="isDeliver" :value="Boolean(0)">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Монтаж">
          <b-form-radio v-model="isMountingSelected" name="isMounting" :value="Boolean(1)">Да</b-form-radio>
          <b-form-radio v-model="isMountingSelected" name="isMounting" :value="Boolean(0)">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Вывоз мусора">
          <b-form-radio v-model="isGarbageSelected" name="isGarbage" :value="Boolean(1)">Да</b-form-radio>
          <b-form-radio v-model="isGarbageSelected" name="isGarbage" :value="Boolean(0)">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-12">
        <button
          class="app-btn btn__blue btn__min-width"
          @click="sendOrder"
        >Расчитать заказ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pl-order-service",
  props: ['orderID'],
  data() {
    return {
      isGarbageSelected: true,
      isMountingSelected: true,
      isDeliverSelected: true,
      isDismantlingSelected: true
    }
  },
  methods: {
    sendOrder() {
      const isGarbage = this.isGarbageSelected
      const isMounting = this.isMountingSelected
      const isDeliver = this.isDeliverSelected
      const isDismantling = this.isDismantlingSelected
      const service = {
        isGarbage,
        isMounting,
        isDeliver,
        isDismantling
      }
      const orderID = this.orderID
      const payload = {
        orderID,
        service
      }
      this.$emit('send-order', payload)
      this.$router.push({ name: 'order', params: {id: orderID} })

    }
  }
}
</script>