<template>
  <div>
    <pl-loader
      v-if="isLoading"
    />
    <main v-else class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <pl-atwork-list
            v-if="MEASUREMENTS_LIST.length != 0"
            :measurements="MEASUREMENTS_LIST"
          />

          <h4 v-else>В этом месяце замеров не было</h4>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import plAtworkList from '@/components/atwork/pl-atwork-list.vue'

export default {
  name: 'plAtworkPage',
  components: {
    plAtworkList
  },
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {
    ...mapActions('allzamer', [
        'GET_MEASUREMENTS_LIST',
    ]),
  },
  watch: {
    loading() {
      this.isLoading = this.loading
    },
  },
  computed: {
    ...mapGetters('allzamer', [
      'MEASUREMENTS_LIST',
      ]),
    ...mapState('allzamer', [
      'loading',
      ]),
  },
  mounted() {
    const phone = this.$cookies.get('phone')
    this.GET_MEASUREMENTS_LIST(phone)
  },
}
</script>