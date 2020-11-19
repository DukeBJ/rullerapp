<template>
  <div>
    <div>Заказ: {{id}}</div>
    <div>Тип здания: {{buildType}}</div>
    <!-- <TestWind
      v-for="constr of constructions"
      :key="constr.id"
      :constID="constr.id"
      :window="constr.window"
      :aperture="constr.aperture"
      /> -->
      {{constructions}}
    <div>Демонтаж: {{service.isDismantling}}</div>
    <div>Монтаж: {{service.isMounting}}</div>
    <div>Доставка: {{service.isDeliver}}</div>
    <div>Мусор: {{service.isGarbage}}</div>
  </div>
</template>

<script>
//import TestWind from '@/components/configurator/testWind.vue'


export default {
  components: {
    //TestWind
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
}
</script>