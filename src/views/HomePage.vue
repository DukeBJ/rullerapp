<template>
  <div>
    <Header name="Константин" family="Константинопольский" sale="192630.75" bonus="64210.25" bonus_persent="25" sale_persent="75" />
    <main class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <CardList
            v-bind:cardInfo="cardInfo"
          />
          <DonutList
            v-bind:donutInfo="donutInfo"
          />
          <Compliment name="Константин" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import CardList from '@/components/CardList.vue'
import DonutList from '@/components/DonutList.vue'
import Compliment from '@/components/Compliment.vue'

//import Loader from '@/components/Loader.vue'

export default {
    name: 'Home',
    components: {
    Header,
    CardList,
    DonutList,
    Compliment,
    //Loader
  },
  data() {
    return {
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
.bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }
</style>