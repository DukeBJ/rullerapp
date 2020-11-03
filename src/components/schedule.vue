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
          <div class="block-info">
            <h4>Заказчик</h4>
            <div>{{ customer.name }}</div>
          </div>
          <nav>
            <div class="square-button">
              <span class="msg"></span>
            </div>
          </nav>
        </div>
        <div class="client-adress">
          <div class="block-info">
            <div>{{ customer.adress }}</div>
          </div>
          <nav>
            <div class="square-button">
              <span class="msg"></span>
            </div>
          </nav>
        </div>
        <div class="before-price">
          <div class="block-info">
            <h4>Предварительный расчёт</h4>
            <div>{{ customer.firstPrice }}</div>
          </div>
          <nav>
            <div class="square-button">
              <span class="msg"></span>
            </div>
          </nav>
        </div>
        <div class="manager">
          <div class="block-info">
            <h4>Менеджер</h4>
            <div>{{ customer.manager }}</div>
          </div>
          <nav>
            <div class="square-button">
              <span class="msg"></span>
            </div>
          </nav>
        </div>
        <div class="comment">
          <div class="block-info">
            <h4>Комментарии</h4>
            <div>{{ customer.comment }}</div>
          </div>
        </div>
        <button class="app-btn btn__blue">Начать замер</button>
        <button class="app-btn btn__blue">Отправить в расчёт</button>
        <button class="app-btn btn__blue">Самостоятельный расчёт</button>
        <button class="app-btn btn__red">Завершить замер</button>
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