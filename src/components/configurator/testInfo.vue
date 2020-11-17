<template>
  <div>
    <div>Заказ: {{id}}</div>
    <div>Тип здания: {{buildType}}</div>
    <TestWind
      v-for="constr of constructions"
      :key="constr.id"
      :constID="constr.id"
      :window="constr.window"
      :aperture="constr.aperture"
      />
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
  props: [
    'id', 'buildType', 'constructions', 'service'
  ],
}
</script>