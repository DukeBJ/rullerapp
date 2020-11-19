<template>
  <div class="row justify-content-center">
    <h4 class="col-12">Тип проёма {{id}}</h4>
    <div class="col-6">
      <div
        class="card type-construction"
        @click="square"
      >
        <div class="card-body">
          <img src="@/assets/img/logo.svg" alt="">
          <div>square</div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div
        class="card type-construction"
        @click="balkonLeft"
      >
        <div class="card-body">
          <img src="@/assets/img/logo.svg" alt="">
          <div>balkonLeft</div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div
        class="card type-construction"
        @click="balkonRight"
      >
        <div class="card-body">
          <img src="@/assets/img/logo.svg" alt="">
          <div>balkonRight</div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div
        class="card type-construction"
        @click="balkonCenter"
      >
        <div class="card-body">
          <img src="@/assets/img/logo.svg" alt="">
          <div>balkonCenter</div>
        </div>
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
    },
    balkonRight() {
      console.log(`Выбран балконный блок с дверью справа`)
    },
    balkonCenter() {
      console.log(`Выбран балконный блок с дверью посередине`)
    },
  }
}

// chosen(selected) {
//       const orderId = this.id
//       const payload = {
//         selected,
//         orderId
//       }
//       console.log(payload)
//       this.$emit('chosen', payload)
//     },
</script>

