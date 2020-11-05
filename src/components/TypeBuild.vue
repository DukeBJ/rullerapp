<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <h4>Выберите тип дома</h4>
      <b-form-select v-model="selected" :options="options"></b-form-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeBuild',
  props: {
    // active: {
    //   type: Object,
    //   required: true,
    // }
  },
  data() {
      return {
        selected: 'Панельный',
        options: [
          { value: 'Панельный', text: 'Панельный' },
          { value: 'Кирпичный', text: 'Кирпичный' },
          { value: 'Деревянный', text: 'Деревянный' },
          { value: 'Соломенный', text: 'Соломенный' },
          { value: 'Невидимый', text: 'Невидимый' },
        ]
      }
    }
}
</script>