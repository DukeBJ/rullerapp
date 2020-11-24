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
  name: "pl-aperture-size",
  props: ['orderID', 'winNo', 'addWidth'],
  data() {
    return {
      sizeIn: '',
      sizeOut: '',
    }
  },
  methods: {
    sendSize() {
      const orderID = this.orderID
      const winNo = this.winNo
      const sizeIn = this.sizeIn
      const sizeOut = this.sizeOut
      const letter = this.addWidth
      const payload = {
        orderID,
        winNo,
        sizeIn,
        sizeOut,
        letter
      }
      this.$emit('send-size', payload)
      console.log(`Ширина внутри ${this.sizeIn} и с наружи ${this.sizeOut}`)
    },
  }
}
</script>