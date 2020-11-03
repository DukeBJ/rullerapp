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

        <div
        class="card-body"
        v-if="show"
        >
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

          <button
            class="app-btn btn__blue"
            @click="modalPhoto = !modalPhoto"
          >Отправить в расчёт</button>

          <button class="app-btn btn__blue">Самостоятельный расчёт</button>

          <button
          class="app-btn btn__red"
          @click="modalEnd = !modalEnd"
          >Завершить замер</button>
        </div>

      <button class="tape" v-on:click="show = !show"></button>
      <div class="label-left"><span>Завершен</span></div>

      <b-modal
      centered
      v-model="modalPhoto"
      title="Прикрепите фото вашего замера"
      >

        <form action="">
          <input type="file">
        </form>

        <template #modal-footer="{ ok }">
          <button disabled class="app-btn btn__blue" variant="success" @click="ok()">
            Отправить
          </button>
        </template>
        
      </b-modal>

      <b-modal
        centered
        no-stacking
        v-model="modalEnd"
        title="Вы завершаете замер!<br>Каков результат вашего замера?"
      >
        <template #modal-footer="{ ok }">
          <button
            class="app-btn btn__blue"
            @click="ok()"
          >Ура! Договор!</button>
          <button
            class="app-btn btn__blue"
            @click="modalEndNot = !modalEndNot"
          >Пока недоговор 😭</button>
        </template>
      </b-modal>

      <b-modal
        centered
        no-stacking
        v-model="modalEndNot"
        title="Укажите причину по которой не удалось заключить договор"
      >

        <form action="">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="checkbox" name="" id="">
        </form>
        <template #modal-footer="{ ok }">
          <button
            class="app-btn btn__blue"
            @click="ok()"
          >Отправить</button>
        </template>
      </b-modal>

    </div>
</template>

<script>
export default {
  name: 'Schedule',
  props: {
    number: String,
    time: String,
    customer: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      show: false,
      modalPhoto: false,
      modalEnd: false,
      modalEndNot: false
    }
  }
}
</script>

<style scoped>

</style>