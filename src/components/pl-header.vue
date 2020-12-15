<template>
  <header class="app-header">
    <transition name="fade" mode="out-in">
      <div class="main-logo" v-if="isMain" key="logo"><img :src="plLogo"></div>
      <div class="backlink" v-else key="backlink"><a @click="$router.go(-1)"></a></div>
    </transition>
    <div class="container">
      <div class="row justify-content-center">
        <pl-header-dashboard
          v-if="isMain"
        />
        <pl-header-text
          v-else
        />
      </div>
    </div>

  </header>
</template>

<script>
import plHeaderDashboard from '@/components/pl-header-dashboard.vue'
import plHeaderText from '@/components/pl-header-text.vue'
import plLogo from '@/assets/img/logo.svg'

export default {
  name: 'pl-header',
  components: {
    plHeaderDashboard,
    plHeaderText,
  },
  data() {
    return {
      plLogo
    }
  },
  computed: {
    isMain() {
      return this.$route.name === 'dashboard'
    }
  },
}
</script>

<style lang="scss">
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
  }
</style>