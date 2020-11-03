<template>
  <div>
    <TopActive title="Список замеров" />
    <main class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <ActiveList
            v-bind:scheduleInfo="scheduleInfo"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TopActive from '@/components/TopActive.vue'
import ActiveList from '@/components/ActiveList.vue'

export default {
  name: 'SchedulePage',
  components: {
    TopActive,
    ActiveList
  },
  data() {
    return {
      scheduleInfo: [
        {
          id: 1,
          number: '6541-54',
          time: '12:00 — 13:30',
          customer: [
            {
              name: 'Вильгельмина Христорождественская',
              phone: 79993331122,
              adress: 'Москва, ул. Барклая, д.6, стр.26, кв.140 и тут ещё проверка на то если будет длинный адрес',
              firstPrice: 165052,
              manager: 'Лариса Петрова',
              comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          ]
        },
        {
          id: 2,
          number: '6542-54',
          time: '12:00 — 13:30',
          customer: [
            {
              name: 'Лина Христорождественская',
              phone: 79993331122,
              adress: 'Москва, ул. Барклая, д.6, стр.26, кв.140 и тут ещё проверка на то если будет длинный адрес',
              firstPrice: 265052,
              manager: 'Лариса Петрова',
              comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          ]
        },
        {
          id: 3,
          number: '6543-54',
          time: '12:00 — 13:30',
          customer: [
            {
              name: 'Нина Христорождественская',
              phone: 79993331122,
              adress: 'Москва, ул. Барклая, д.6, стр.26, кв.140 и тут ещё проверка на то если будет длинный адрес',
              firstPrice: 365052,
              manager: 'Лариса Петрова',
              comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          ]
        },
        {
          id: 4,
          number: '6544-54',
          time: '12:00 — 13:30',
          customer: [
            {
              name: 'Анна Христорождественская',
              phone: 79993331122,
              adress: 'Москва, ул. Барклая, д.6, стр.26, кв.140 и тут ещё проверка на то если будет длинный адрес',
              firstPrice: 465052,
              manager: 'Лариса Петрова',
              comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          ]
        },
        {
          id: 5,
          number: '6545-54',
          time: '12:00 — 13:30',
          customer: [
            {
              name: 'Светлана Христорождественская',
              phone: 79993331122,
              adress: 'Москва, ул. Барклая, д.6, стр.26, кв.140 и тут ещё проверка на то если будет длинный адрес',
              firstPrice: 565052,
              manager: 'Лариса Петрова',
              comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          ]
        },
        {
          id: 6,
          number: '6546-54',
          time: '12:00 — 13:30',
          customer: [
            {
              name: 'Марина Христорождественская',
              phone: 79993331122,
              adress: 'Москва, ул. Барклая, д.6, стр.26, кв.140 и тут ещё проверка на то если будет длинный адрес',
              firstPrice: 665052,
              manager: 'Лариса Петрова',
              comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          ]
        },
      ]
    }
  }
}
</script>