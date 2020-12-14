<template>
  <div>
    <!-- <pl-header :name="firstname" :family="lastname" :sale="sale" :bonus="bonus" :bonus_persent="bonusPersent" :sale_persent="salePersent" /> -->
    <main class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <pl-card-list
            v-bind:cardInfo="cardInfo"
          />
          <pl-donut-list
            v-bind:donutInfo="donutInfo"
          />
          <pl-compliment :name="firstname" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import plHeader from '@/components/pl-header.vue'
import plCardList from '@/components/maindashboard/pl-card-list.vue'
import plDonutList from '@/components/maindashboard/pl-donut-list.vue'
import plCompliment from '@/components/maindashboard/pl-compliment.vue'

export default {
    name: 'pl-dashboard-page',
    components: {
    // plHeader,
    plCardList,
    plDonutList,
    plCompliment,
  },
  data() {
    return {
      firstname: "Константин",
      lastname: "Константинопольский",
      sale: 192630.75,
      bonus: 64210.25,
      bonusPersent: 25,
      salePersent: 75,
      cardInfo: [
        {
          id: 1,
          title: 'Самостоятельно',
          lineDiagram: [
            {
              line: 1,
              color: 'blue',
              persent: 60,
              sale: 111321,
              description: 'art/evo/smart'
            },
            {
              line: 2,
              color: 'yellow',
              persent: 18,
              sale: 34456.45,
              description: 'art/evo/smart'
            },
            {
              line: 3,
              color: 'gray',
              persent: 12,
              sale: 34456,
              description: 'алюминий'
            }
          ]
        },
        {
          id: 2,
          title: 'Офис',
          lineDiagram: [
            {
              line: 1,
              color: 'blue',
              persent: 45,
              sale: 111321,
              description: 'art/evo/smart'
            },
            {
              line: 2,
              color: 'yellow',
              persent: 11,
              sale: 34456,
              description: 'art/evo/smart'
            },
            {
              line: 3,
              color: 'gray',
              persent: 3,
              sale: 34456,
              description: 'алюминий'
            }
          ]
        },
        {
          id: 3,
          title: 'Повторный замер',
          lineDiagram: [
            {
              line: 1,
              color: 'blue',
              persent: 25,
              sale: 111321,
              description: 'art/evo/smart'
            },
            {
              line: 2,
              color: 'yellow',
              persent: 6,
              sale: 34456,
              description: 'art/evo/smart'
            },
            {
              line: 3,
              color: 'gray',
              persent: 3,
              sale: 34456,
              description: 'алюминий'
            }
          ]
        },
      ],
      donutInfo: [
        {
          id: 1,
          color: 'blue',
          title: 'Срастаемость',
          persent: 80
        },
        {
          id: 2,
          color: 'magenta',
          title: 'Доля ламинации',
          persent: 60
        }
      ],
      loading: true,
    }
  }
}
</script>

<style>
</style>