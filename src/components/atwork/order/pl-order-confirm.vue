<template>
  <div class="row window-list">
    <div class="col-12">
      <h3>Заказ {{orderID}}</h3>
      <div
        v-for="win of constr"
        :key="win.window"
      >
        <hr>
        <h3>Окно№{{win.window}}</h3>
        <hr>
        <div>Тип конструкции: {{win.config.type}}</div>
        <div>Профиль: {{win.config.profile}}</div>
        <div>Цвет: {{win.config.color}}</div>
        <div>Стеклопакет: {{win.config.glassunit}}</div>
        <div>Ручки: {{win.config.hendless}}</div>
        <div>Подоконник: {{win.config.sill}}</div>
        <div>Москитная сетка: {{win.config.mosquito}}</div>
        <div>Детские замки: {{win.config.childlock}}</div>
        <div>Откос: {{win.config.slope}}</div>
        <div>Отлив: {{win.config.ebb}}</div>
      </div>
      <hr>
      <div>
        <h3>Услуги</h3>
        <div>Демонтаж: {{service.isDismantling}}</div>
        <div>Доставка: {{service.isDeliver}}</div>
        <div>Монтаж: {{service.isMounting}}</div>
        <div>Вывоз мусора: {{service.isGarbage}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pl-order-confirm',
  props: ['constr', 'orderID', 'service',]
}
</script>