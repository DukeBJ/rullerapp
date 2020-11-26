<template>
  <div>
    <h2>Ребенок два</h2>
    <label for="size-x">Размер один</label>
    <input type="number" v-model="sizeX" id="size-x">
    <hr>
    <label for="size-y">Размер одва</label>
    <input type="number" v-model="sizeY" id="size-y">
    <hr>
    <button
      @click="sendSizes"
    >Отправить</button>
    <br>
  </div>
</template>

<script>
export default {
  name: 'child-two',
  props: ['sendNum'],
  data() {
    return {
      sizeX: '',
      sizeY: ''
    }
  },
  methods: {
    sendSizes() {
      const sizeX = this.sizeX
      const sizeY = this.sizeY
      const sendNum = this.sendNum
      const isSend = false
      const payload = {
        sizeX,
        sizeY,
        isSend,
        sendNum
      }
      console.log(`Отправляем ${sendNum} = ${sizeX}×${sizeY}`)
      this.$emit('send-sizes', payload)
    }
  }
  // model: {
  //   prop: size
  // }
}
</script>