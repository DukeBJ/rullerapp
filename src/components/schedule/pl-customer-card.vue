<template>
  <div class="card-body">

    <div class="client-name">
      <div class="block-info">
        <h4>Заказчик</h4>
        <div>{{ nameNormalize }}</div>
      </div>
      <nav v-if="customer.phone">
        <a :href="`tel:+7${phoneNormalize}`">
          <div class="square-button">
            <span class="phone"></span>
          </div>
        </a>
      </nav>
    </div>

    <div class="client-adress">
      <div class="block-info">
        <div>{{ adressNornalize }}</div>
      </div>
      <nav v-if="map(number)">
        <a :href="map(number)" target="_blank" rel="nofollow noopener">
          <div class="square-button">
            <span class="map"></span>
          </div>
        </a>
      </nav>
    </div>

    <div class="before-price">
      <div class="block-info">
        <h4>Предварительный расчёт</h4>
        <div v-if="customer.firstPrice">{{ customer.firstPrice | priceFormat }}</div>
        <div v-else>Не рассчитан</div>
      </div>
      <nav v-if="isPdf">
        <a href="#">
          <div class="square-button">
            <span class="search"></span>
          </div>
        </a>
      </nav>
    </div>

    <div
      class="zamer-done"
      v-if="isWaiting">
      <div class="block-info">
        <h4>Окончательный расчёт</h4>
        <div v-if="customer.firstPrice">{{ customer.firstPrice | priceFormat }}</div>
        <div v-else>Не рассчитан</div>
      </div>
      <nav v-if="isSelf">
        <a href="#">
          <div class="square-button">
            <span class="switch"></span>
          </div>
        </a>
      </nav>
    </div>

    <div class="manager">
      <div class="block-info">
        <h4>Менеджер</h4>
        <div>{{ customer.manager }}</div>
      </div>
      <nav v-if="isChat">
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

    <transition name="card-end" mode="out-in">

      <div class="flexwrap" v-if="!isEnd">

        <transition name="card-btn" mode="out-in">

          <button
            class="app-btn btn__blue"
            v-if="!isStart"
            @click="start">
            Начать замер
          </button>
          
          <div class="flexwrap" v-else>
            <button
              class="app-btn btn__blue"
              @click="self">
              Отправить в расчёт
            </button>
            
            <button
              class="app-btn btn__blue"
              @click="addNewOrder(number)">
              Самостоятельный расчёт
            </button>
            
            <button
              class="app-btn btn__red"
              @click="end">
              Завершить замер
            </button>
          </div>

          </transition>

      </div>
      <div v-else class="work-end">Замер завершён</div>

    </transition>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import priceFormat from '@/components/filters/priceFormat'

export default {
  name: 'pl-customer-card',
  components: {

  },
  props: 
    ['customer', 'number', 'isEnd'],
  data() {
    return {
      isStart: false,
      isModalEnd: false,
      isModalEndNot: false,
      isPdf: false,
      isChat: false,
      isWaiting: true,
      isSelf: true
    }
  },
  filters: {
    priceFormat
  },
  computed: {
    ...mapGetters('schedule', [
      'YANDEX_POINT',
      'MY_LOCATION'
    ]),
    adressNornalize() {
      const adr = this.customer.adress
      return adr.slice(2)
    },
    phoneNormalize() {
      let phone = this.customer.phone
      phone = phone.trim()
      phone = phone.replace(/[^\d]/g, '')
      if (phone.length == 11) {
        phone = phone.slice(1)
      }
      return phone
    },
    nameNormalize() {
      let name = this.customer.name
      name = name.replace(/[\d()]/g, '')
      name = name.trim()
      return name
    }
  },
  methods: {
    ...mapActions('schedule', [
        'GET_YANDEX_POINT',
    ]),
    map(number) {
      const index = this.YANDEX_POINT.findIndex(ord => ord.id === number)
      const point = this.YANDEX_POINT[index].pos
      if (point) {
        return `https://yandex.ru/maps/?rtext=${this.MY_LOCATION}${point}&rtt=auto`
      } else {
        return false
      }
    },
    start(e) {
      this.$emit('mensure-start', e)
      this.isStart = true
    },
    addNewOrder(number) {
      this.$emit('to-config', number)
    },
    self() {
      const modalSelf = true
      this.$emit('modal-self', modalSelf)
    },
    end() {
      const modalEnd = true
      this.$emit('mensure-end', modalEnd)
    }
  },
  mounted() {
    const id = this.number
    const adress = this.customer.adress
    const payload= {
      id,
      adress
    }
    this.GET_YANDEX_POINT(payload)
  }
}
</script>

<style lang="scss" scoped>
  .card-end-enter,
  .card-end-leave-to,
  .card-btn-enter,
  .card-btn-leave-to {
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }
  .card-end-enter-active,
  .card-end-leave-active,
  .card-btn-enter-active,
  .card-btn-leave-active {
    transition: all 0.3s ease-in-out;
  }
  .card-end-leave,
  .card-end-enter-to,
  .card-btn-leave,
  .card-btn-enter-to {
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }
</style>