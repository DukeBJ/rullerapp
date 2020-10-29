<template>
  <div id="app">
    <Header name="Виктор Андреевич" sale="192630.75" bonus="64210.25" bonus_persent="25" sale_persent="75" />
    <section class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
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
import Slide from 'vue-burger-menu'

export default {
  name: 'App',
  components: {
    Header,
    Card,
    Slide
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
