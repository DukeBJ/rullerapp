<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <b-form-group label="Демонтаж">
          <b-form-radio v-model="selected" name="isDismantling" value="true">Да</b-form-radio>
          <b-form-radio v-model="selected" name="isDismantling" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Доставка">
          <b-form-radio v-model="selected" name="isDeliver" value="true">Да</b-form-radio>
          <b-form-radio v-model="selected" name="isDeliver" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Монтаж">
          <b-form-radio v-model="selected" name="isMounting" value="true">Да</b-form-radio>
          <b-form-radio v-model="selected" name="isMounting" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Вывоз мусора">
          <b-form-radio v-model="selected" name="isGarbage" value="true">Да</b-form-radio>
          <b-form-radio v-model="selected" name="isGarbage" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-12">
        <button
          class="app-btn btn__blue"
          
          >Расчитать заказ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pl-order-service",
  
}
</script>