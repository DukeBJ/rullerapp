<template>
  <div id="app">
    <div class="main-logo" v-if="isMain"><img src="./assets/img/logo.svg"></div>
    <div class="backlink" v-else><a @click="$router.go(-1)"></a></div>
    <Reveal>
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Reveal>
    <div id="page-wrap">
      <router-view />
      <div class="indent"></div>
    <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import { Reveal } from 'vue-burger-menu'
//import axios from 'axios'

export default {
  name: 'App',
  components: {
    Footer,
    Reveal,
  },
  data() {
    return {
      info: null
    }
  },
  computed: {
    isMain() {
      return this.$route.name === 'main'
    }
  },
  mounted() {
    this.$axios
      .get('http://localhost:8080/price.json')
      .then((response) => {
      console.log(response.data)
    // this.axios
    //   .get("http://localhost:8080/price.json")
    //   .then(response => {
    //     console.log("response", response);
    //   })
    //   .catch(error => {
    //     console.log("error", error);
    //   });
    })
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  background-color: white;
  .indent {
    height: 80px;
  }
}
#page-wrap {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    display: none;
    background-color:rgba(0, 0, 0, 0.0);
    width: 100%;
    height: 100%;
    z-index: 10;
    transition: 0.3s ease-in;
  }
}
.bm-burger-button {
      position: absolute;
      width: 30px;
      height: 30px;
      right: 15px!important;
      left: auto!important;
      top: 20px;
      cursor: pointer;
      background-image: url('./assets/img/icons/burger.svg');
      background-position: center;
      background-repeat: no-repeat;
      z-index: 10;
      opacity: 1;
      transition: 0.3s ease-out;
    }
    .bm-burger-bars {
      //background-color: #373a47;
      display: none;
    }
    .line-style {
      // position: absolute;
      // height: 20%;
      // left: 0;
      // right: 0;
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
      .bm-burger-button {
        opacity: 0;
      }
      #page-wrap::before {
        display: block;
        background-color:rgba(0, 0, 0, 0.3);
        transition: background-color 0.3s ease-out;
      }
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
