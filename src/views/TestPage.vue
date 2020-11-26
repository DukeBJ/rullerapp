<template>
  <div>
    <plHeaderAtwork title="загл" />
    <main class="card-place">
      <h1>Тестирование передачи данных между компонентами</h1>
      <test-first
        :sizes="sizes"
        @send-sizes="catchSizes"
      />
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import plHeaderAtwork from '@/components/pl-header-atwork.vue'
import testFirst from '@/components/configurator/test-first.vue'


export default {
  name: 'ConfiguratorPage',
  components: {
    plHeaderAtwork,
    testFirst
  },
  data() {
    return {
      sizes: {
        // a: {x: 100, y: 200},
        // b: {x: 300, y: 100},
      },
    }
  },
  computed: {
    ...mapState('configurator', {
        title: 'title',
        orders: 'orders',
        service: 'service'
    }),
  },
  methods: {
    ...mapActions('configurator', [
        'UPD_BUILDTYPE',
        'ADD_CONSTRUCTION',
        'ADD_SIZE'
    ]),
    catchSizes(payload) {
      const sendNum = payload.sendNum
      const sizeX = payload.sizeX
      const sizeY = payload.sizeY
      console.log(`Поймал в родителе значения из child-two:`)
      console.log(`${sendNum} = ${sizeX}×${sizeY}`)
      this.sizes[sendNum] = {'x': sizeX, 'y': sizeY}
    }
  },
  mounted() {
    //this.newOrder()
  },
}
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 20px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid black;
  }
</style>