<template>
  <div>
    <TopSchedule date="23.09.2020" />
    <main class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <ScheduleList
            v-bind:scheduleInfo="scheduleInfo"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TopSchedule from '@/components/TopSchedule.vue'
import ScheduleList from '@/components/ScheduleList.vue'


export default {
  name: 'SchedulePage',
  components: {
    TopSchedule,
    ScheduleList,
    
  },
  data() {
    return {
      scheduleInfo: [
        {
          id: 1,
          number: '6541-54',
          time: '15:00 — 16:30',
          done: false,
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
          done: false,
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
          time: '14:00 — 15:30',
          done: false,
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
          time: '10:30 — 12:00',
          done: true,
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
          time: '19:00 — 20:30',
          done: false,
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
          time: '8:00 — 9:30',
          done: true,
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