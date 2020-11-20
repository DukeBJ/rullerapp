<template>
  <div class="row">
    <div class="col-12">
      <div class="aperture-height">
        <h4>Высота</h4>
        <div>
          <label for="heightOut">Улица</label>
          <input v-model="heightOut" id="heightOut" type="number">
        </div>
        <div>
          <label for="heightIn">Помещение</label>
          <input v-model="heightIn" id="heightIn" type="number">
        </div>
      </div>
      <div class="aperture-width">
        <h4>Ширина</h4>
        <div>
          <label for="widthOut">Улица</label>
          <input v-model="widthOut" id="widthOut" type="number">
        </div>
        <div>
          <label for="widthIn">Помещение</label>
          <input v-model="widthIn" id="widthIn" type="number">
        </div>
      </div>
      <div>Размеры с улицы {{heightOut}}×{{widthOut}}</div>
      <div>Размеры внутри {{heightIn}}×{{widthIn}}</div>
      <button @click="sendSizeW">Ок ширина</button>
      <button @click="sendSizeH">Ок высота</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pl-aperture-size",
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
      console.log(`Ширина внутри ${this.widthIn} и с наружи ${this.widthOut}`)
    },
    sendSizeH() {
      console.log(`Ширина внутри ${this.heightIn} и с наружи ${this.heightOut}`)
    }
  }
}
</script>