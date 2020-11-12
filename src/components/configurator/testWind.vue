<template>
  <div>
    <div>Проем: {{aperture.type}}</div>
    <TestAper
      v-for="(size, name) of aperture.sizes"
      :key="name"
      :size="size"
      :name="name"
      />
    <div>Окно: {{constID}}</div>
    <div>Конфигурация: {{window.config}}</div>
    <div>Цвет: {{window.color}}</div>
    <div>Профиль: {{window.profile}}</div>
    <div>Стеклопакет: {{window.glassunit}}</div>
    <div>Ручки: {{window.hendless}}</div>
    <div>Москитная сетка: {{window.mosquito}}</div>
    <div>ЗАмки: {{window.childlock}}</div>
    <div>Отлив: {{window.slope}}</div>
    <div>Слив: {{window.ebb}}</div>
    <div>Подоконник: {{window.sill}}</div>
  </div>
</template>

<script>
import TestAper from '@/components/configurator/testAper.vue'

export default {
  components: {
    TestAper
  },
  props: [
    'constID', 'window', 'aperture'
  ],
}
</script>