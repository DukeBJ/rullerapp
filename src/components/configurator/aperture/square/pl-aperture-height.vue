<template>
  <div class="row">
    <div class="col-12">
      <div class="aperture-height">
        <h4>Улица ({{addHeight}})</h4>
        <div>
          <label for="sizeOut">Высота</label>
          <input id="sizeOut" v-model="sizeOut" type="number">
        </div>
      </div>
      <div class="aperture-width">
        <h4>Помещение ({{addHeight}})</h4>
        <div>
          <label for="sizeIn">Высота</label>
          <input id="sizeIn" v-model="sizeIn" type="number">
        </div>
      </div>
      <button class="app-btn btn__blue btn__min-width" @click="sendSize">Ок высота</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pl-aperture-height",
  props: ['orderID', 'winNo', 'addHeight'],
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
      const letter = this.addHeight
      const isHeight = false
      const payload = {
        orderID,
        winNo,
        sizeIn,
        sizeOut,
        letter,
        isHeight
      }
      this.$emit('send-size', payload)
      console.log(`Ширина внутри ${this.sizeIn} и с наружи ${this.sizeOut}`)
    },
  }
}
</script>