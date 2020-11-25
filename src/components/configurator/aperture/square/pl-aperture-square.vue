<template>
  <div class="container">
    <pl-square-size-list
      @add-height="addHeight"
      @add-width="addWidth"
      :orderID="orderID"
      :winNo="constructions.length"
      :order="order"
      :catchSize="sendSize"
    />
    <pl-aperture-height
      v-if="whatHeight !== ''"
      :key="whatHeight"
      :orderID="orderID"
      :winNo="constructions.length"
      :addHeight="whatHeight"
      @send-size="sendSize"

    />
    <pl-aperture-width
      v-if="whatWidth !== ''"
      :key="whatWidth"
      :orderID="orderID"
      :winNo="constructions.length"
      :addWidth="whatWidth"
      @send-size="sendSize"

    />
    <button
      v-if="checkSizes()"
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
    }
  },
  computed: {
    getSizesObj: function() {
      const index = this.order.constructions.findIndex(constr => constr.window === this.constructions.length)
      const getSize = this.order.constructions[index].sizes
      return getSize
    }
  },
  methods: {
    addHeight(e) {
      return this.whatHeight = e
    },
    addWidth(e) {
      return this.whatWidth = e
    },
    sendSize(payload) {
      this.$emit('add-size', payload)
    },
    // sendSize(payload) {
    //   this.$emit('add-size', payload)
    // },
    checkSizes() {
      const getSize = this.getSizesObj
      let aIn = Object.prototype.hasOwnProperty.call(getSize, 'aIn')
      let bIn = Object.prototype.hasOwnProperty.call(getSize, 'bIn')
      let cIn = Object.prototype.hasOwnProperty.call(getSize, 'cIn')
      let dIn = Object.prototype.hasOwnProperty.call(getSize, 'dIn')
      if (aIn === true && bIn === true && cIn === true && dIn === true) return true
    },
    sizesDone() {
      const check = {square: false, config: true}
      this.$emit('sizes-done', check)
    }
  }
}
</script>