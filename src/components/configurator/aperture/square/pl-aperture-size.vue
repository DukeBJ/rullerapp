<template>
  <div class="row">
    <div class="col-12">
      <div class="aperture-height">
        <h4>Улица ({{addHeight}}{{addWidth}})</h4>
        <div v-if="addHeight !== ''">
          <label for="heightOut">Высота</label>
          <input v-model="heightOut" id="heightOut" type="number">
        </div>
        <div v-if="addWidth !== ''">
          <label for="widthOut">Ширина</label>
          <input v-model="widthOut" id="widthOut" type="number">
        </div>
      </div>
      <div class="aperture-width">
        
        <h4>Помещение ({{addHeight}}{{addWidth}})</h4>
        <div v-if="addHeight !== ''">
          <label for="heightIn">Высота</label>
          <input v-model="heightIn" id="heightIn" type="number">
        </div>
        <div v-if="addWidth !== ''">
          <label for="widthIn">Ширина</label>
          <input v-model="widthIn" id="widthIn" type="number">
        </div>
      </div>
      <button class="app-btn btn__blue btn__min-width" v-if="addWidth !== ''" @click="sendSizeW">Ок ширина</button>
      <button class="app-btn btn__blue btn__min-width" v-if="addHeight !== ''" @click="sendSizeH">Ок высота</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pl-aperture-size",
  props: ['orderID', 'winNo', 'addHeight', 'addWidth'],
  data() {
    return {
      heightIn: '',
      heightOut: '',
      widthIn: '',
      widthOut: ''
    }
  },
  methods: {
    sendSizeW() {
      const orderID = this.orderID
      const winNo = this.winNo
      const sizeIn = this.widthIn
      const sizeOut = this.widthOut
      const letter = this.addWidth
      const payload = {
        orderID,
        winNo,
        sizeIn,
        sizeOut,
        letter
      }
      this.$emit('send-width', payload)
      console.log(`Ширина внутри ${this.sizeIn} и с наружи ${this.sizeOut}`)
    },
    sendSizeH() {
      const orderID = this.orderID
      const winNo = this.winNo
      const heightIn = this.heightIn
      const heightOut = this.heightOut
      const letter = this.addHeight
      const payload = {
        orderID,
        winNo,
        heightIn,
        heightOut,
        letter
      }
      this.$emit('send-height', payload)
      console.log(`Высота внутри ${this.heightIn} и с наружи ${this.heightOut}`)
      // console.log(`Высота внутри ${this.sizeIn} и с наружи ${this.sizeOut}`)
    }
  }
}
</script>