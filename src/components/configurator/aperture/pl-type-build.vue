<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <h4>Выберите тип дома</h4>
      <v-select
        class="pl-select"
        v-model="selected"
        :options="options"
        @input="chosen"
        :clearable="false"
        :searchable="false"
      >
        <template #open-indicator="{ attributes }">
          <span v-bind="attributes">
            <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.2588 5.8004c.3707-.4093 1.0031-.4406 1.4125-.07L5 8.7453V1c0-.5523.4477-1 1-1s1 .4477 1 1v7.7452l3.3287-3.0147c.4094-.3707 1.0418-.3394 1.4125.07.3707.4093.3394 1.0417-.0699 1.4124l-5 4.5283a1 1 0 01-1.3426 0l-5-4.5283c-.4093-.3707-.4406-1.0031-.0699-1.4125z" fill="#33C5F3"/></svg>
          </span>
        </template>
      </v-select>
    </div>
    <!-- {{selected}}
    {{id}} -->
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'pl-type-build',
  components: {
    vSelect
  },
  model: {
    prop: 'selected',
    event: 'chosen'
  },
  props: ['buildType', 'id'],
  data() {
    return {
      selected: this.buildType,
      options: [
        'Панельный',
        'Кирпичный',
        'Деревянный',
        'Соломенный',
        'Невидимый',
      ]
    }
  },
  methods: {
    chosen() {
      const orderId = this.id
      const selected = this.selected
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