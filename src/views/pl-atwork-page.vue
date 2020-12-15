<template>
  <div>
    <main class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <pl-atwork-list
            v-bind:calculationPrice="calculationPrice"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import plAtworkList from '@/components/atwork/pl-atwork-list.vue'

export default {
  name: 'plAtworkPage',
  components: {
    plAtworkList
  },
  data() {
    return {
      calculationPrice: [
        {
          id: 1,
          number: '6541-54',
          date: '23.01.2020',
          price: '96658',
          done: true
        },
        {
          id: 2,
          number: '6542-54',
          date: '23.01.2020',
          price: '969658',
          done: true
        },
        {
          id: 3,
          number: '6543-54',
          date: '23.01.2020',
          price: '16658',
          done: true
        },
        {
          id: 4,
          number: '6544-54',
          date: '23.01.2020',
          price: '36658',
          done: false
        },
        {
          id: 5,
          number: '6545-54',
          date: '23.01.2020',
          price: '46658',
          done: true
        },
        {
          id: 6,
          number: '6546-54',
          date: '23.01.2020',
          price: '126658',
          done: false
        },
      ]
    }
  }
}
</script>