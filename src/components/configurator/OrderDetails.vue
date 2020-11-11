<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <b-form-group label="Демонтаж">
          <b-form-radio v-model="selected" name="dismantling" value="true">Да</b-form-radio>
          <b-form-radio v-model="selected" name="dismantling" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Доставка">
          <b-form-radio v-model="selected" name="deliver" value="true">Да</b-form-radio>
          <b-form-radio v-model="selected" name="deliver" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Монтаж">
          <b-form-radio v-model="selected" name="mounting" value="true">Да</b-form-radio>
          <b-form-radio v-model="selected" name="mounting" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Вывоз мусора">
          <b-form-radio v-model="selected" name="garbage" value="true">Да</b-form-radio>
          <b-form-radio v-model="selected" name="garbage" value="false">Нет</b-form-radio>
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
  name: "OrderDetails",
  
}
</script>