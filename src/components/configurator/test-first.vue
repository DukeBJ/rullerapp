<template>
  <div>
    <test-child-one
      v-if="!isSend"
      :sizes="sizes"
      @send-num="catchNum"
    />
    <hr>
    <test-child-two
      v-if="isSend"
      :sendNum="watNumber"
      @send-sizes="catchSizes"
    />
  </div>
</template>

<script>
import testChildOne from '@/components/configurator/test-child-one.vue'
import testChildTwo from '@/components/configurator/test-child-two.vue'

export default {
  name: 'test-first',
  components: {
    testChildOne,
    testChildTwo
  },
  props: ['sizes'],
  data() {
    return {
      isSend: false,
      watNumber: '',
    }
  },
  methods: {
    catchNum(payload) {
      console.log(`Поймал ${payload.number}`)
      this.isSend = payload.isSend
      this.watNumber = payload.number
    },
    catchSizes(payload) {
      this.$emit('send-sizes', payload)
      this.isSend = payload.isSend
    }
  }
  
}
</script>