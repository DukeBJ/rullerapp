<template>
  <div class="row">
    <div class="col-12">
      <div class="aperture-height">
        <h4>Улица ({{addWidth}})</h4>
        <div>
          <label for="sizeOut">Ширина</label>
          <input v-model="sizeOut" id="sizeOut" type="number">
        </div>
      </div>
      <div class="aperture-width">
        <h4>Помещение ({{addWidth}})</h4>
        <div>
          <label for="sizeIn">Ширина</label>
          <input v-model="sizeIn" id="sizeIn" type="number">
        </div>
      </div>
      <button class="app-btn btn__blue btn__min-width" @click="sendSize">Ок ширина</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pl-aperture-width",
  props: ['orderID', 'winNo', 'addWidth'],
  data() {
    return {
      sizeIn: '',
      sizeOut: '',
      checkSize: '',
      warning40: false,
      warning120: false
    }
  },
  methods: {
    checkWidth() {
      const sizeOut = this.sizeOut
      const goodSize = sizeOut + 50
      let checkSize = goodSize - sizeOut
      if (checkSize >= 40 && checkSize <= 120) {
        console.log(`Ширина изделия ${checkSize}`)
        return checkSize
      } else if (checkSize < 40) {
        console.log(`Разница менее 40, нужен перерасчет`)
        return this.warning40 = true
      } else if (checkSize > 120) {
        console.log(`Разница более 120, нужен перерасчет. Или заказать пенопласт =)`)
        return this.warning120 = true
      }
      // if (this.addWidth === 'c') {
        
      // }
    },
    sendSize() {
      const orderID = this.orderID
      const winNo = this.winNo
      const sizeIn = this.sizeIn
      const sizeOut = this.sizeOut
      const letter = this.addWidth
      const isWidth = false
      const payload = {
        orderID,
        winNo,
        sizeIn,
        sizeOut,
        letter,
        isWidth
      }
      this.$emit('send-size', payload)
      console.log(`Ширина внутри ${this.sizeIn} и с наружи ${this.sizeOut}`)
    },
  }
}
</script>