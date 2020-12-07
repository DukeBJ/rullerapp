<template>
  <div class="row justify-content-center">
    <h4 class="col-12">Тип проёма {{id}}</h4>
    <div class="col-6">
      <div
        class="card type-construction"
        @click="square"
      >
        <div class="card-body">
          <svg width="22" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H2v26h18V2zM2 0C.8954 0 0 .8954 0 2v26c0 1.1046.8954 2 2 2h18c1.1046 0 2-.8954 2-2V2c0-1.1046-.8954-2-2-2H2z" fill="#05252F"/></svg>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div
        class="card type-construction"
        @click="balkonLeft"
      >
        <div class="card-body">
          <svg width="30" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23h16V2H2v36h10V23zm2 15c0 1.1046-.8954 2-2 2H2c-1.1046 0-2-.8954-2-2V2C0 .8954.8954 0 2 0h26c1.1046 0 2 .8954 2 2v21c0 1.1046-.8954 2-2 2H14v13z" fill="#05252F"/></svg>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div
        class="card type-construction"
        @click="balkonRight"
      >
        <div class="card-body">
          <svg width="30" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 23H2V2h26v36H18V23zm-2 15c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2V2c0-1.1046-.8954-2-2-2H2C.8954 0 0 .8954 0 2v21c0 1.1046.8954 2 2 2h14v13z" fill="#05252F"/></svg>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div
        class="card type-construction"
        @click="balkonCenter"
      >
        <svg width="42" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26 23v15H16V23H2V2h38v21H26zm14 2c1.1046 0 2-.8954 2-2V2c0-1.1046-.8954-2-2-2H2C.8954 0 0 .8954 0 2v21c0 1.1046.8954 2 2 2h12v13c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2V25h12z" fill="#05252F"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pl-aperture-type',
  props: ['id', 'constrNumber'],
  // model: {
  //   prop
  // },
  methods: {
    square() {
      console.log(`Выбран квадрат`)
      let check = {square: true}
      const orderId = this.id
      const constrNumber = this.constrNumber
      const payload = {
        orderId,
        constrNumber
      }
      console.log(payload)
      this.$emit('square', payload)
      this.$emit('check', check)
    },
    balkonLeft() {
      console.log(`Выбран балконный блок с дверью слева`)
      let check = {square: true}
      const orderId = this.id
      const constrNumber = this.constrNumber
      const payload = {
        orderId,
        constrNumber
      }
      console.log(payload)
      this.$emit('square', payload)
      this.$emit('check', check)
    },
    balkonRight() {
      console.log(`Выбран балконный блок с дверью справа`)
      let check = {square: true}
      const orderId = this.id
      const constrNumber = this.constrNumber
      const payload = {
        orderId,
        constrNumber
      }
      console.log(payload)
      this.$emit('square', payload)
      this.$emit('check', check)
    },
    balkonCenter() {
      console.log(`Выбран балконный блок с дверью посередине`)
      let check = {square: true}
      const orderId = this.id
      const constrNumber = this.constrNumber
      const payload = {
        orderId,
        constrNumber
      }
      console.log(payload)
      this.$emit('square', payload)
      this.$emit('check', check)
    },
  }
}
</script>

