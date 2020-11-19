<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <h4>Выберите тип дома</h4>
      <b-form-select v-model="selected" :options="options" @change="chosen"></b-form-select>
    </div>
    {{selected}}
    {{id}}
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
      selected: this.buildType,
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
    chosen(selected) {
      const orderId = this.id
      const payload = {
        selected,
        orderId
      }
      console.log(payload)
      this.$emit('chosen', payload)
    },
  },
}
</script>