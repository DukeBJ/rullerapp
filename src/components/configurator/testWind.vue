<template>
  <div :style="'border-bottom: 1px solid black;border-top: 1px solid black'">
    <!-- <div>Проем: {{aperture.type}}</div> -->
    <TestAper
      v-for="(value, name, index) of sizes"
      :key="index"
      :size="value"
      :name="name"
      />
    <div>Окно №{{window}}</div>
    <div>Конфигурация: {{config}}</div>
    <div>Цвет: {{color}}</div>
    <div>Профиль: {{profile}}</div>
    <div>Стеклопакет: {{glassunit}}</div>
    <div>Ручки: {{hendless}}</div>
    <div>Москитная сетка: {{isMosquito}}</div>
    <div>ЗАмки: {{isChildlock}}</div>
    <div>Отлив: {{isSlope}}</div>
    <div>Слив: {{isEbb}}</div>
    <div>Подоконник: {{sill}}</div>
  </div>
</template>

<script>
import TestAper from '@/components/configurator/testAper.vue'

export default {
  components: {
    TestAper
  },
  props: [
    'window', 'config', 'profile', 'color', 'glassunit', 'hendless', 'isMosquito', 'isChildlock', 'isSlope', 'isEbb', 'sill', 'sizes'
  ],
  // data() {
  //   return {
  //     notreactSizes: {}
  //   }
  // },
  // computed: {
  //   oldSize: function() {
  //     return this.notreactSizes + this.sizes
  //   }
  // },
  // methods: {
  //   sizeUpd() {
  //     this.$set(this.notreactSizes, this.sizes, '')
  //   }
    
  // }
}
</script>
