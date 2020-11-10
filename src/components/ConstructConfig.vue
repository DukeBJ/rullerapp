<template>
  <div class="container">
    <div class="row">
      <h4>Выберите конфигурацию</h4>
      <div class="col-12">
        Тут слайдер
      </div>
      <div class="col-12">
        <label for="profile-system">Профильная система</label>
        <b-form-select id="profile-system" v-model="profileSelected" :options="profile"></b-form-select>
      </div>
      <div class="col-12">
        <label for="profile-color">Цвет профиля</label>
        <b-form-select id="profile-color" v-model="colorSelected" :options="color"></b-form-select>
      </div>
      <div class="col-12">
        <label for="glassunit">Стеклопакет</label>
        <b-form-select id="glassunit" v-model="glassunitSelected" :options="glassunit"></b-form-select>
      </div>
      <div class="col-12">
        <label for="hendless">Ручки</label>
        <b-form-select id="hendless" v-model="hendlessSelected" :options="hendless"></b-form-select>
      </div>
      <div class="col-6">
        <b-form-group label="Москитная сетка">
          <b-form-radio v-model="selected" name="mosquito" value="true">Да</b-form-radio>
          <b-form-radio v-model="selected" name="mosquito" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Детские замки">
          <b-form-radio v-model="selected" name="childlock" value="true">Да</b-form-radio>
          <b-form-radio v-model="selected" name="childlock" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Откосы">
          <b-form-radio v-model="selected" name="slope" value="true">Да</b-form-radio>
          <b-form-radio v-model="selected" name="slope" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Отливы">
          <b-form-radio v-model="selected" name="ebb" value="true">Да</b-form-radio>
          <b-form-radio v-model="selected" name="ebb" value="false">Нет</b-form-radio>
        </b-form-group>
      </div>
      <div class="col-12">
        <label for="sill">Подоконник</label>
        <b-form-select id="sill" v-model="sillSelected" :options="sill"></b-form-select>
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
export default {
  data() {
      return {
        profileSelected: 'smart',
        profile: [
          { value: 'smart', text: 'Melke Smart' },
          { value: 'evolution', text: 'Melke Evolution' },
          { value: 'art', text: 'Melke Art' },
          { value: 'lite60', text: 'Melke Lite`60' },
          { value: 'lite70', text: 'Melke Lite`70' },
        ],
        colorSelected: 'white',
        color: [
          { value: 'white', text: 'Белый' },
          { value: 'mass', text: 'Цветная масса' },
          { value: 'laminat', text: 'Ламинация' },
        ],
        glassunitSelected: 'climatherm',
        glassunit: [
          { value: 'climatherm', text: 'Climatherm' },
          { value: 'climathermb', text: 'Climatherm Balance' },
          { value: 'climatherms', text: 'Climatherm Solar' },
          { value: 'climathermsc', text: 'Climatherm Solar Color' },
        ],
        hendlessSelected: 'type1',
        hendless: [
          { value: 'type1', text: 'Тип1' },
          { value: 'type2', text: 'Тип2' },
          { value: 'type3', text: 'Тип3' },
          { value: 'type4', text: 'Тип4' },
        ],
        sillSelected: 'std300',
        sill: [
          { value: 'std300', text: 'Стандартный 300' },
          { value: 'kryst300', text: 'Кристалит 300' },
          { value: 'estera300', text: 'Эстера 300' },
          { value: 'moller300', text: 'Моллер 300' },
        ],
      }
    }
}
</script>