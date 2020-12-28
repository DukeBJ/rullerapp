<template>
  <div id="app">
    <Reveal
      v-if="this.$route.name != 'login'"
      :closeOnNavigation="true">
      <router-link :to="{name: 'dashboard'}">
        <span>Статистика</span>
      </router-link>
      <router-link :to="{name: 'schedule'}">
        <span><nobr>Расписание замеров</nobr></span>
      </router-link>
      <router-link :to="{name: 'atwork'}">
        <span><nobr>Список замеров</nobr></span>
      </router-link>
    </Reveal>
    <div id="page-wrap">
      <pl-header
        v-if="this.$route.name != 'login'"
      />
      <!-- <transition name="pageswipe" mode="out-in"> -->
      <transition>
        <router-view class="page-view" />
      </transition>
      <div
        v-if="this.$route.name != 'login'"
        class="indent"
        ></div>
      <pl-footer
        v-if="this.$route.name != 'login'"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import plHeader from '@/components/pl-header.vue'
import plFooter from '@/components/pl-footer.vue'

import { Reveal } from 'vue-burger-menu'
//import axios from 'axios'

export default {
  name: 'pl-measurement-app',
  components: {
    plFooter,
    Reveal,
    plHeader
  },
  data() {
    return {
      info: null,
      // autorz: false
    }
  },
  computed: {
    ...mapState('account', [
      'auth',
    ]),
  },
  beforeMount() {
    if (!this.auth) {
      return this.$router.push({name: 'login'})
    }
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
  height: 100%;//100vh;
  overflow-x: hidden;
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
.page-view {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.bm-burger-button {
      position: absolute;
      width: 30px;
      height: 30px;
      right: 15px!important;
      left: auto!important;
      top: 20px!important;
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
    // .line-style {
    //   // position: absolute;
    //   // height: 20%;
    //   // left: 0;
    //   // right: 0;
    // }
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

    .pageswipe-enter, .pageswipe-leave-to {
      animation: 0.3s slideInLeft;
    }
    .pageswipe-enter-active, .pageswipe-leave-active {
      transition: all 0.3s ease-in-out;
    }
    .pageswipe-leave, .pageswipe-enter-to {
      animation: 0.3s slideInRight;
    }

@keyframes slideInLeft {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}

// .slideInLeft {
//   animation-name: slideInLeft;
// }

@keyframes slideInRight {
  from {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

</style>
