<template>
  <div class="container">
    <div class="row window-edit">
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
        <b-form-group :label="label.mosquito">
          <b-form-radio v-model="mosquitoSelected" name="isMosquito" value="true">Да</b-form-radio>
          <b-form-radio v-model="mosquitoSelected" name="isMosquito" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group :label="label.childlock">
          <b-form-radio v-model="childlockSelected" name="isChildlock" value="true">Да</b-form-radio>
          <b-form-radio v-model="childlockSelected" name="isChildlock" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group :label="label.slope">
          <b-form-radio v-model="slopeSelected" name="isSlope" value="true">Да</b-form-radio>
          <b-form-radio v-model="slopeSelected" name="isSlope" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group :label="label.ebb">
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
      <div class="col-6">
        <b-form-group label="Демонтаж">
          <b-form-radio v-model="isDismantlingSelected" name="isDismantling" value="true">Да</b-form-radio>
          <b-form-radio v-model="isDismantlingSelected" name="isDismantling" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Доставка">
          <b-form-radio v-model="isDeliverSelected" name="isDeliver" value="true">Да</b-form-radio>
          <b-form-radio v-model="isDeliverSelected" name="isDeliver" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Монтаж">
          <b-form-radio v-model="isMountingSelected" name="isMounting" value="true">Да</b-form-radio>
          <b-form-radio v-model="isMountingSelected" name="isMounting" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Вывоз мусора">
          <b-form-radio v-model="isGarbageSelected" name="isGarbage" value="true">Да</b-form-radio>
          <b-form-radio v-model="isGarbageSelected" name="isGarbage" value="false">Нет</b-form-radio>
        </b-form-group>
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
import priceFormat from '@/components/filters/priceFormat'
import vSelect from 'vue-select'
export default {
  name: 'pl-window-list',
  components: {
    vSelect
  },
  props: ['winNo', 'price', 'config', 'service'],
  data() {
      return {
        label: {
          mosquito: `Москитная сетка (${this.price.mosquito})`,
          childlock: `Москитная сетка (${this.price.childlock})`,
          slope: `Москитная сетка (${this.price.slope})`,
          ebb: `Москитная сетка (${this.price.ebb})`,
          Garbage: `Москитная сетка (${this.price.mosquito})`,
          Mounting: `Москитная сетка (${this.price.mosquito})`,
          Deliver: `Москитная сетка (${this.price.mosquito})`,
          Dismant: `Москитная сетка (${this.price.mosquito})`,
        },
        type: 'first',
        profileSelected: this.config.profile,
        profile: [
          {code: 'smart', name:`Melke Smart — ${this.price.profile.smart} ₽`},
          {code: 'evolution', name:`Melke Evolution — ${this.price.profile.evolution} ₽`},
          {code: 'art', name:`Melke Art — ${this.price.profile.art} ₽`},
          {code: 'lite60', name:`Melke Lite\`60 — ${this.price.profile.lite60} ₽`},
          {code: 'lite70', name:`Melke Lite\`70 — ${this.price.profile.lite70} ₽`},
          {code: 'rehau_b', name:`Rehau — ${this.price.profile.rehau} ₽`},
        ],
        colorSelected: this.config.color,
        color: [
          {code: 'white', name:`Белый — ${this.price.color.white} ₽`},
          {code: 'mass', name:`Цветная масса — ${this.price.color.white} ₽`},
          {code: 'laminat', name:`Ламинация — ${this.price.color.white} ₽`},
        ],
        glassunitSelected: this.config.glassunit,
        glassunit: [
          {code: 'climatherm', name:`Climatherm — ${this.price.glassunit.climatherm} ₽`},
          {code: 'climathermb', name:`Climatherm Balance — ${this.price.glassunit.climathermb} ₽`},
          {code: 'climatherms', name:`Climatherm Solar — ${this.price.glassunit.climatherms} ₽`},
          {code: 'climathermsc', name:`Climatherm Solar Color — ${this.price.glassunit.climathermsc} ₽`},
        ],
        hendlessSelected: this.config.hendless,
        hendless: [
          {code: 'type1', name:`Тип1 — ${this.price.hendless.type1} ₽`},
          {code: 'type2', name:`Тип2 — ${this.price.hendless.type2} ₽`},
          {code: 'type3', name:`Тип3 — ${this.price.hendless.type3} ₽`},
          {code: 'type4', name:`Тип4 — ${this.price.hendless.type4} ₽`},
        ],
        sillSelected: this.config.sill,
        sill: [
          {code: 'std300', name:`Стандартный 300 — ${this.price.sill.std300} ₽`},
          {code: 'kryst300', name:`Кристалит 300 — ${this.price.sill.kryst300} ₽`},
          {code: 'estera300', name:`Эстера 300 — ${this.price.sill.estera300} ₽`},
          {code: 'moller300', name:`Моллер 300 — ${this.price.sill.moller300} ₽`},
        ],
        mosquitoSelected: this.config.mosquito,
        childlockSelected: this.config.childlock,
        slopeSelected: this.config.slope,
        ebbSelected: this.config.ebb,
        isGarbageSelected: true,
        isMountingSelected: true,
        isDeliverSelected: true,
        isDismantlingSelected: true
      }
    },
  filters: {
    priceFormat
  },
  computed: {
    // prof() {
    //   this.profileSelected = config
    //   return 0
    // }
  },
  methods: {
    editWindow() {
      // this.$emit('edit-window', this.winNo)
    }
  }
}
</script>