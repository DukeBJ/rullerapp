<template>
  <div id="app">
    <Header name="Константин" family="Константинопольский" sale="192630.75" bonus="64210.25" bonus_persent="25" sale_persent="75" />
    <main class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Donut />
          <Donut />
          <Compliment name="Константин" />
        </div>
      </div>
    </main>
    <Footer/>
    <Slide>
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Slide>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Card from './components/card.vue'
import Donut from './components/donut.vue'
import Compliment from './components/compliment.vue'
import Footer from './components/footer.vue'
import Slide from 'vue-burger-menu'

export default {
  name: 'App',
  components: {
    Header,
    Card,
    Donut,
    Compliment,
    Footer,
    Slide
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
