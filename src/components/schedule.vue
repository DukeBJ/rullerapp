<template>
    <div class="card card-shedule">
      <div class="card-header">
        <div class="client">
          №{{ number }}
        </div>
        <div class="time">
          {{ time }}
        </div>
      </div>
      <div class="card-body">
        <div class="client-name">
          <h4>Заказчик</h4>
          <div>{{ customer.name }}</div>
        </div>
        <div class="client-adress">
          <div>{{ customer.adress }}</div>
        </div>
        <div class="before-price">
          <h4>Предварительный расчёт</h4>
          <div>{{ customer.firstPrice }}</div>
        </div>
        <div class="manager">
          <h4>Менеджер</h4>
          <div>{{ customer.manager }}</div>
        </div>
        <div class="comment">
          <h4>Комментарии</h4>
          <div>{{ customer.comment }}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Schedule',
  props: {
    number: String,
    time: String,
    customer: {
      type: Array,
      required: true,
    }
  }
}
</script>