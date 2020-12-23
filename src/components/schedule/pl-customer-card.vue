<template>
  <div class="card-body">

    <div class="client-name">
      <div class="block-info">
        <h4>Заказчик</h4>
        <div>{{ customer.name }}</div>
      </div>
      <nav v-if="customer.phone">
        <a :href="`tel:+7${customer.phone}`">
          <div class="square-button">
            <span class="phone"></span>
          </div>
        </a>
      </nav>
    </div>

    <div class="client-adress">
      <div class="block-info">
        <div>{{ customer.adress }}</div>
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
        <div>{{ customer.firstPrice | priceFormat }}</div>
      </div>
      <nav v-if="isPdf">
        <a href="#">
          <div class="square-button">
            <span class="search"></span>
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

    <div class="flexwrap" v-if=" done === false ">

      <button
      class="app-btn btn__blue"
      v-on:click="isStart = !isStart" v-if="isStart === false ">Начать замер</button>
      
      <div class="flexwrap" v-else>
        <button
          class="app-btn btn__blue"
          @click="isModalPhoto = !isModalPhoto"
        >Отправить в расчёт</button>
        
        <button
          class="app-btn btn__blue"
          @click="addNewOrder(number)"
        >Самостоятельный расчёт</button>
        
        <button
          class="app-btn btn__red"
          @click="isModalEnd = !isModalEnd"
        >Завершить замер</button>
      </div>

    </div>
    <div v-else class="work-end">Замер завершён</div>

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
    ['customer', 'number'],
  data() {
    return {
      isStart: false,
      isShow: false,
      isModalPhoto: false,
      isModalEnd: false,
      isModalEndNot: false,
      isPdf: false,
      isChat: false
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