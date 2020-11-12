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
    <div>Демонтаж: {{service.dismantling}}</div>
    <div>Монтаж: {{service.mounting}}</div>
    <div>Доставка: {{service.deliver}}</div>
    <div>Мусор: {{service.garbage}}</div>
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