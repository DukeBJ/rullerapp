<template>
  <div class="row window-list">
    <div class="col-12">
      <div class="card card-window">
        <div class="card-header">
          <div
            class="title"
            >Окно №{{winNo}} ({{windowSum | priceFormat}})</div>
          <button
            @click="editWindow"
          >opt</button>
        </div>
      </div>
      <div></div>
      <div>{{config}}</div>
    </div>
  </div>
</template>

<script>
import priceFormat from '@/components/filters/priceFormat'
export default {
  name: 'pl-window-list',
  props: ['winNo', 'price', 'config'],
  date() {
    return {
      
    }
  },
  filters: {
    priceFormat
  },
  computed: {
    windowSum() {
      const config = this.config
      // Потом вместо [0] нужно будет подставлять (winNo - 1)
      const price = this.price.constructions[0].config
      let totoalPrice = new Array()
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      // Тип механизмов окна (открываение/закрывание)
      const type = config.type
      let priceType = 0
      if(type !== undefined) {
        priceType = Number(price.type[type])
        console.log(`Цена конструкции окна ${priceType}`)
      }
      totoalPrice.push(priceType)
      // Тип профиля
      const profile = config.profile
      let priceProfile = 0
      if(profile !== undefined) {
        priceProfile = Number(price.profile[profile])
        console.log(`Цена профиля ${priceProfile}`)
      }
      totoalPrice.push(priceProfile)
      // Цвет профиля
      const color = config.color
      let priceColor = 0
      if(color !== undefined) {
        priceColor = Number(price.color[color])
        console.log(`Цена цвета профиля ${priceColor}`)
      }
      totoalPrice.push(priceColor)
      // Тип стеклопакетов
      const glassunit = config.glassunit
      let priceGlassunit = 0
      if(glassunit !== undefined) {
        priceGlassunit = Number(price.glassunit[glassunit])
        console.log(`Цена стеклопакета ${priceGlassunit}`)
      }
      totoalPrice.push(priceGlassunit)
      // Типы ручек
      const hendless = config.hendless
      let priceHendless
      if(hendless !== undefined) {
        priceHendless = Number(price.hendless[hendless])
        console.log(`Цена ручек ${priceHendless}`)
      }
      totoalPrice.push(priceHendless)
      // Подоконники
      const sill = config.sill
      let priceSill = 0
      if(sill !== undefined) {
        priceSill = Number(price.sill[sill])
        console.log(`Цена подоконников ${priceSill}`)
      }
      totoalPrice.push(priceSill)
      // Москитные сетки
      const mosquito = config.mosquito
      let priceMosquito = 0
      if(mosquito !== false && mosquito !== "false") {
        priceMosquito = Number(price.mosquito)
        console.log(`Цена москитной сетки ${priceMosquito}`)
      }
      totoalPrice.push(priceMosquito)
      // Детские замки
      const childlock = config.childlock
      let priceChildlock = 0
      if(childlock !== false && childlock !== "false") {
        priceChildlock = Number(price.childlock)
        console.log(`Цена детские замки ${priceChildlock}`)
      }
      totoalPrice.push(priceChildlock)
      // Откосы
      const slope = config.slope
      let priceSlope = 0
      if(slope !== false && slope !== "false") {
        priceSlope = Number(price.slope)
        console.log(`Цена откоса ${priceSlope}`)
      }
      totoalPrice.push(priceSlope)
      // Отливы
      const ebb = config.ebb
      let priceEbb = 0
      if(ebb !== false && ebb !== "false") {
        priceEbb = Number(price.ebb)
        console.log(`Цена отлива ${priceEbb}`)
      }
      totoalPrice.push(priceEbb)
      let sum = totoalPrice.reduce(reducer)
      this.$emit('send-sum', sum)
      return sum
    },
  },
  methods: {
    editWindow() {
      this.$emit('edit-window', this.winNo)
    }
  }
}
</script>