<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <h4>Выберите тип дома</h4>
      <b-form-select v-model="selected" :options="options" @change="chosen"></b-form-select>
    </div>
    {{selected}}
  </div>
</template>

<script>
export default {
  name: 'pl-type-build',
  model: {
    prop: 'selected',
    event: 'chosen'
  },
  props: ['buildType', 'id'],
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
  },
  methods: {
      chosen(select, id) {
          this.$emit('chosen', select, id)
      },
  },
}
</script>