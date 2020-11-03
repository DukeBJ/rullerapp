<template>
  <div id="app">
    <router-view />
    <div class="indent"></div>
    <Footer/>
    <Slide right>
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Slide>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Slide from 'vue-burger-menu'

export default {
  name: 'App',
  components: {
    Footer,
    Slide
    
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  .indent {
    height: 80px;
  }
}
</style>
