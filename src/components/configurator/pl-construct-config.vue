<template>
  <div class="container">
    <div class="row">
      <h4>Выберите конфигурацию</h4>
      <div class="w-100">
        <pl-construct-slider
        />
      </div>
      <div class="col-12">
        <div class="label">Профильная система</div>
        <v-select
          class="pl-select"
          v-model="profileSelected"
          :options="profile"
          @input="chosenProfile"
          :clearable="false"
          :searchable="false">
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes">
              <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.2588 5.8004c.3707-.4093 1.0031-.4406 1.4125-.07L5 8.7453V1c0-.5523.4477-1 1-1s1 .4477 1 1v7.7452l3.3287-3.0147c.4094-.3707 1.0418-.3394 1.4125.07.3707.4093.3394 1.0417-.0699 1.4124l-5 4.5283a1 1 0 01-1.3426 0l-5-4.5283c-.4093-.3707-.4406-1.0031-.0699-1.4125z" fill="#33C5F3"/></svg>
            </span>
          </template>
        </v-select>
      </div>
      <div class="col-12">
        <div class="label">Цвет профиля</div>
        <v-select
          class="pl-select"
          v-model="colorSelected"
          :options="color"
          @input="chosenColor"
          :clearable="false"
          :searchable="false">
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes">
              <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.2588 5.8004c.3707-.4093 1.0031-.4406 1.4125-.07L5 8.7453V1c0-.5523.4477-1 1-1s1 .4477 1 1v7.7452l3.3287-3.0147c.4094-.3707 1.0418-.3394 1.4125.07.3707.4093.3394 1.0417-.0699 1.4124l-5 4.5283a1 1 0 01-1.3426 0l-5-4.5283c-.4093-.3707-.4406-1.0031-.0699-1.4125z" fill="#33C5F3"/></svg>
            </span>
          </template>
        </v-select>
      </div>
      <div class="col-12">
        <div class="label">Стеклопакет</div>
        <v-select
          class="pl-select"
          v-model="glassunitSelected"
          :options="glassunit"
          @input="chosenGlassunit"
          :clearable="false"
          :searchable="false">
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes">
              <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.2588 5.8004c.3707-.4093 1.0031-.4406 1.4125-.07L5 8.7453V1c0-.5523.4477-1 1-1s1 .4477 1 1v7.7452l3.3287-3.0147c.4094-.3707 1.0418-.3394 1.4125.07.3707.4093.3394 1.0417-.0699 1.4124l-5 4.5283a1 1 0 01-1.3426 0l-5-4.5283c-.4093-.3707-.4406-1.0031-.0699-1.4125z" fill="#33C5F3"/></svg>
            </span>
          </template>
        </v-select>
      </div>
      <div class="col-12">
        <div class="label">Ручки</div>
        <v-select
          class="pl-select"
          v-model="hendlessSelected"
          :options="hendless"
          @input="chosenHendless"
          :clearable="false"
          :searchable="false">
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes">
              <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.2588 5.8004c.3707-.4093 1.0031-.4406 1.4125-.07L5 8.7453V1c0-.5523.4477-1 1-1s1 .4477 1 1v7.7452l3.3287-3.0147c.4094-.3707 1.0418-.3394 1.4125.07.3707.4093.3394 1.0417-.0699 1.4124l-5 4.5283a1 1 0 01-1.3426 0l-5-4.5283c-.4093-.3707-.4406-1.0031-.0699-1.4125z" fill="#33C5F3"/></svg>
            </span>
          </template>
        </v-select>
      </div>
      <div class="col-6">
        <b-form-group label="Москитная сетка">
          <b-form-radio v-model="mosquitoSelected" name="isMosquito" value="true">Да</b-form-radio>
          <b-form-radio v-model="mosquitoSelected" name="isMosquito" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Детские замки">
          <b-form-radio v-model="childlockSelected" name="isChildlock" value="true">Да</b-form-radio>
          <b-form-radio v-model="childlockSelected" name="isChildlock" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Откосы">
          <b-form-radio v-model="slopeSelected" name="isSlope" value="true">Да</b-form-radio>
          <b-form-radio v-model="slopeSelected" name="isSlope" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Отливы">
          <b-form-radio v-model="ebbSelected" name="isEbb" value="true">Да</b-form-radio>
          <b-form-radio v-model="ebbSelected" name="isEbb" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-12">
        <div class="label">Подоконник</div>
        <v-select
          class="pl-select"
          v-model="sillSelected"
          :options="sill"
          @input="chosenSill"
          :clearable="false"
          :searchable="false">
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes">
              <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.2588 5.8004c.3707-.4093 1.0031-.4406 1.4125-.07L5 8.7453V1c0-.5523.4477-1 1-1s1 .4477 1 1v7.7452l3.3287-3.0147c.4094-.3707 1.0418-.3394 1.4125.07.3707.4093.3394 1.0417-.0699 1.4124l-5 4.5283a1 1 0 01-1.3426 0l-5-4.5283c-.4093-.3707-.4406-1.0031-.0699-1.4125z" fill="#33C5F3"/></svg>
            </span>
          </template>
        </v-select>
      </div>
      <div class="col-12">
        <button
          class="app-btn btn__blue"
          >Сохранить конфигурацию окна</button>
      </div>
    </div>
  </div>
</template>

<script>
import plConstructSlider from '@/components/configurator/pl-construct-slider.vue'
import vSelect from 'vue-select'

export default {
  name: "pl-construct-config",
  components: {
    plConstructSlider,
    vSelect
  },
  data() {
      return {
        profileSelected: 'Melke Smart',
        profile: [
          'Melke Smart',
          'Melke Evolution',
          'Melke Art',
          'Melke Lite`60',
          'Melke Lite`70',
        ],
        colorSelected: 'Белый',
        color: [
          'Белый',
          'Цветная масса',
          'Ламинация',
        ],
        glassunitSelected: 'Climatherm',
        glassunit: [
          'Climatherm',
          'Climatherm Balance',
          'Climatherm Solar',
          'Climatherm Solar Color',
        ],
        hendlessSelected: 'Тип1',
        hendless: [
          'Тип1',
          'Тип2',
          'Тип3',
          'Тип4',
        ],
        sillSelected: 'Стандартный 300',
        sill: [
          'Стандартный 300',
          'Кристалит 300',
          'Эстера 300',
          'Моллер 300',
        ],
        mosquitoSelected: true,
        childlockSelected: true,
        slopeSelected: true,
        ebbSelected: true
      }
    },
    methods: {
    chosenProfile() {
      const orderId = this.id
      // const selected = this.selected
      const payload = {
        // selected,
        orderId
      }
      console.log(payload)
      this.$emit('chosenProfile', payload)
    },
    chosenColor() {
      const orderId = this.id
      // const selected = this.selected
      const payload = {
        // selected,
        orderId
      }
      console.log(payload)
      this.$emit('chosenColor', payload)
    },
    chosenGlassunit() {
      const orderId = this.id
      // const selected = this.selected
      const payload = {
        // selected,
        orderId
      }
      console.log(payload)
      this.$emit('chosenGlassunit', payload)
    },
    chosenHendless() {
      const orderId = this.id
      // const selected = this.selected
      const payload = {
        // selected,
        orderId
      }
      console.log(payload)
      this.$emit('chosenHendless', payload)
    },
    chosenSill() {
      const orderId = this.id
      // const selected = this.selected
      const payload = {
        // selected,
        orderId
      }
      console.log(payload)
      this.$emit('chosenSill', payload)
    },
  },
}
</script>