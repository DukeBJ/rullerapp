<template>
  <div class="container">
    <pl-square-size-list
      v-if="isSizeList"
      :orderID="orderID"
      :winNo="constructions.length"
      :order="order"
      @add-height="addHeight"
      @add-width="addWidth"
    />
    <pl-aperture-height
      v-if="isHeight"
      :key="whatHeight"
      :orderID="orderID"
      :winNo="constructions.length"
      :addHeight="whatHeight"
      @send-size="sendSize"

    />
    <pl-aperture-width
      v-if="isWidth"
      :key="whatWidth"
      :orderID="orderID"
      :winNo="constructions.length"
      :addWidth="whatWidth"
      @send-size="sendSize"

    />
    <button
      v-if="isSizesDone"
      class="app-btn btn__blue btn__min-width"
      @click="sizesDone">
      Ок
    </button>
  </div>
</template>

<script>
import plSquareSizeList from '@/components/configurator/aperture/square/pl-square-size-list.vue'
import plApertureHeight from '@/components/configurator/aperture/square/pl-aperture-height.vue'
import plApertureWidth from '@/components/configurator/aperture/square/pl-aperture-width.vue'

export default {
  name: 'pl-aperture-square',
  components: {
    plSquareSizeList,
    plApertureHeight,
    plApertureWidth
  },
  props: ['constructions', 'orderID', 'order'],
  data() {
    return {
      height: '',
      width: '',
      whatHeight: '',
      whatWidth: '',
      isHeight: false,
      isWidth: false,
      isSizeList: true,
      isSizesDone: false
    }
  },
  computed: {
    getSizesObj: function() {
      const index = this.order.constructions.findIndex(constr => constr.window === this.constructions.length)
      const getSize = this.order.constructions[index].sizes
      return getSize
    }
  },
  watch: {
    getSizesObj() {
      return this.checkSizes()
    }
  },
  methods: {
    addHeight(payload) {
      this.whatHeight = payload.letter
      this.isHeight = payload.isHeight
      this.isSizeList = false
    },
    addWidth(payload) {
      this.whatWidth = payload.letter
      this.isWidth = payload.isWidth
      this.isSizeList = false
    },
    sendSize(payload) {
      if (payload.close) {
        this.isHeight = false
        this.isWidth = false
      }
      this.isSizeList = true
      this.$emit('add-size', payload)
    },
    checkSizes() {
      const getSize = this.getSizesObj
      let a = Object.prototype.hasOwnProperty.call(getSize, 'a')
      console.log(`a = ${a}`)
      let b = Object.prototype.hasOwnProperty.call(getSize, 'b')
      console.log(`b = ${b}`)
      let c = Object.prototype.hasOwnProperty.call(getSize, 'c')
      console.log(`c = ${c}`)
      let d = Object.prototype.hasOwnProperty.call(getSize, 'd')
      console.log(`d = ${d}`)
      console.log(getSize)
      if (a === true && b === true && c === true && d === true) return this.isSizesDone = true
    },
    sizesDone() {
      const sizesDone = true
      this.$emit('sizes-done', sizesDone)
    }
  }
}
</script>