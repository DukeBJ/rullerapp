<template>
  <div :style="'margin-top: 50px'">
    <div>Заказ: {{id}}</div>
    <div>Тип здания: {{buildType}}</div>
    <TestWind
      v-for="constr of constructions"
      :key="constr.window"
      :window="constr.window"
      :config="constr.config"
      :profile="constr.profile"
      :color="constr.color"
      :glassunit="constr.glassunit"
      :hendless="constr.hendless"
      :isMosquito="constr.isMosquito"
      :isChildlock="constr.isChildlock"
      :isSlope="constr.isSlope"
      :isEbb="constr.isEbb"
      :sill="constr.sill"
      :sizes="constr.sizes"
      />
    <!-- <div>{{constructions}}</div> -->
    <div>Демонтаж: {{service.isDismantling}}</div>
    <div>Монтаж: {{service.isMounting}}</div>
    <div>Доставка: {{service.isDeliver}}</div>
    <div>Мусор: {{service.isGarbage}}</div>
  </div>
</template>

<script>
import TestWind from '@/components/configurator/testWind.vue'


export default {
  components: {
    TestWind
  },
  props: {
    id: {
      type: String,
      default() {
        return ''
      }
    },
    buildType: {
      type: String,
      default() {
        return 'Панельный'
      }
    },
    constructions: {
      type: Array,
      default() {
        return []
      }
    },
    service: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  // watch: {
  //   constructions()
  // }
}
</script>