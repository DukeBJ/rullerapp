<template>
  <div>
    <pl-header-atwork title="Список замеров" />
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
import plHeaderAtwork from '@/components/pl-header-atwork.vue'
import plAtworkList from '@/components/atwork/pl-atwork-list.vue'

export default {
  name: 'plAtworkPage',
  components: {
    plHeaderAtwork,
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
          number: '6541-55',
          date: '23.01.2020',
          price: '969658',
          done: true
        },
        {
          id: 3,
          number: '6541-56',
          date: '23.01.2020',
          price: '16658',
          done: true
        },
        {
          id: 4,
          number: '6541-57',
          date: '23.01.2020',
          price: '36658',
          done: false
        },
        {
          id: 5,
          number: '6541-58',
          date: '23.01.2020',
          price: '46658',
          done: false
        },
        {
          id: 6,
          number: '6541-59',
          date: '23.01.2020',
          price: '126658',
          done: false
        },
      ]
    }
  }
}
</script>