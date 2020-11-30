<template>
  <div class="container">
    <div class="row">
      <h4>Выберите конфигурацию</h4>
      <div class="w-100">
        <pl-construct-slider
          @type-check="typeChek"
        />
      </div>
      <div class="col-12">
        <div class="label">Профильная система</div>
        <v-select
          class="pl-select"
          v-model="profileSelected"
          :options="profile"
          :reduce="name => name.code"
          label="name"
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
          :reduce="name => name.code"
          label="name"
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
          :reduce="name => name.code"
          label="name"
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
          :reduce="name => name.code"
          label="name"
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
          :reduce="name => name.code"
          label="name"
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
          @click="sendConfig"
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
  props: ['orderID', 'winNo'],
  data() {
      return {
        type: 'first',
        profileSelected: 'smart',
        profile: [
          {code: 'smart', name:'Melke Smart'},
          {code: 'evolution', name:'Melke Evolution'},
          {code: 'art', name:'Melke Art'},
          {code: 'lite60', name:'Melke Lite`60'},
          {code: 'lite70', name:'Melke Lite`70'},
          {code: 'rehau_b', name:'Rehau'},
        ],
        colorSelected: 'white',
        color: [
          {code: 'white', name:'Белый'},
          {code: 'mass', name:'Цветная масса'},
          {code: 'laminat', name:'Ламинация'},
        ],
        glassunitSelected: 'climatherm',
        glassunit: [
          {code: 'climatherm', name:'Climatherm'},
          {code: 'climathermb', name:'Climatherm Balance'},
          {code: 'climatherms', name:'Climatherm Solar'},
          {code: 'climathermsc', name:'Climatherm Solar Color'},
        ],
        hendlessSelected: 'type1',
        hendless: [
          {code: 'type1', name:'Тип1'},
          {code: 'type2', name:'Тип2'},
          {code: 'type3', name:'Тип3'},
          {code: 'type4', name:'Тип4'},
        ],
        sillSelected: 'std300',
        sill: [
          {code: 'std300', name:'Стандартный 300'},
          {code: 'kryst300', name:'Кристалит 300'},
          {code: 'estera300', name:'Эстера 300'},
          {code: 'moller300', name:'Моллер 300'},
        ],
        mosquitoSelected: true,
        childlockSelected: true,
        slopeSelected: true,
        ebbSelected: true,
      }
    },
    methods: {
    typeChek(cfg) {
      this.type = cfg
    },
    sendConfig() {
      const config = new Object()
      config.type = this.type
      config.profile = this.profileSelected
      config.color = this.colorSelected
      config.glassunit = this.glassunitSelected
      config.hendless = this.hendlessSelected
      config.mosquito = this.mosquitoSelected
      config.childlock = this.childlockSelected
      config.slope = this.slopeSelected
      config.ebb = this.ebbSelected
      config.sill = this.sillSelected
      const orderID = this.orderID
      const winNo = this.winNo
      const payload = {
        orderID,
        winNo,
        config
      }
      this.$emit('send-config', payload)
      this.$emit('config-done', 'done')
    }
  },
}
</script>