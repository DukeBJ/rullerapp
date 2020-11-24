<template>
  <div class="row justify-content-center">
    <h2 class="col-12">Проставьте размеры</h2>
    <h4>Заказ № {{orderID}} | конструкция № {{winNo}}</h4>
    <div class="col-12">
      <div class="apeture balkon-left">
        <!-- <div role="button" @click="height"  class="size-type height a1">a</div>
        <div role="button" @click="height"  class="size-type height a2">a</div>
        <div role="button" @click="height"  class="size-type height b1">b</div>
        <div role="button" @click="height"  class="size-type height b2">b</div>
        <div role="button" @click="width"  class="size-type width c1">c</div>
        <div role="button" @click="width"  class="size-type width c2">c</div>
        <div role="button" @click="width"  class="size-type width d1">d</div>
        <div role="button" @click="width"  class="size-type width d2">d</div> -->

        <div role="button" @click="height" :class="[isSizeDoneA() ? 'size-done' : '']" class="size-type height a1">a</div>
        <div role="button" @click="height" :class="[isSizeDoneA() ? 'size-done' : '']" class="size-type height a2">a</div>
        <div role="button" @click="height" :class="[isSizeDoneB() ? 'size-done' : '']" class="size-type height b1">b</div>
        <div role="button" @click="height" :class="[isSizeDoneB() ? 'size-done' : '']" class="size-type height b2">b</div>
        <div role="button" @click="width" :class="[isSizeDoneC() ? 'size-done' : '']" class="size-type width c1">c</div>
        <div role="button" @click="width" :class="[isSizeDoneC() ? 'size-done' : '']" class="size-type width c2">c</div>
        <div role="button" @click="width" :class="[isSizeDoneD() ? 'size-done' : '']" class="size-type width d1">d</div>
        <div role="button" @click="width" :class="[isSizeDoneD() ? 'size-done' : '']" class="size-type width d2">d</div>
        <div class="figure">
          <svg width="224" height="298" viewBox="0 0 224 298" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M100.592 179.074H219.111V4.85181H4.88867V293.148H100.592V179.074ZM104.592 295.148C104.592 296.253 103.697 297.148 102.592 297.148H2.88867C1.7841 297.148 0.888672 296.253 0.888672 295.148V2.8518C0.888672 1.74723 1.7841 0.851807 2.88867 0.851807H221.111C222.215 0.851807 223.111 1.74724 223.111 2.85181V181.074C223.111 182.179 222.215 183.074 221.111 183.074H104.592V295.148Z" fill="#05252F"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pl-square-size-list',
  props: ['orderID', 'winNo', 'order'],
  data() {
    return {
      
    }

  },
  computed: {
    getSizesObj: function() {
      const index = this.order.constructions.findIndex(constr => constr.window === this.winNo)
      const getSize = this.order.constructions[index].sizes
      return getSize
    }
  },
  methods: {
    isSizeDoneA: function() {
      let getSize = this.getSizesObj
      return Object.prototype.hasOwnProperty.call(getSize, 'aIn')
    },
    isSizeDoneB: function() {
      const index = this.order.constructions.findIndex(constr => constr.window === this.winNo)
      const getSize = this.order.constructions[index].sizes
      let eee = Object.prototype.hasOwnProperty.call(getSize, 'bIn')
      return eee
    },
    isSizeDoneC: function() {
      const index = this.order.constructions.findIndex(constr => constr.window === this.winNo)
      const getSize = this.order.constructions[index].sizes
      let eee = Object.prototype.hasOwnProperty.call(getSize, 'cIn')
      return eee
    },
    isSizeDoneD: function() {
      const index = this.order.constructions.findIndex(constr => constr.window === this.winNo)
      const getSize = this.order.constructions[index].sizes
      let eee = Object.prototype.hasOwnProperty.call(getSize, 'dIn')
      return eee
    },
    isSizeDoneE: function() {
      const index = this.order.constructions.findIndex(constr => constr.window === this.winNo)
      const getSize = this.order.constructions[index].sizes
      let eee = Object.prototype.hasOwnProperty.call(getSize, 'eIn')
      return eee
    },
    height(e) {
      const target = e.target.innerText
      if (target=== 'a' && this.isSizeDoneA() === false) {
      console.log(`Нажал высоту ${target}`)
      this.$emit('add-height', target)
      } else if (target=== 'b' && this.isSizeDoneB() === false) {
      console.log(`Нажал высоту ${target}`)
      this.$emit('add-height', target)
      } else  {console.log(`Вы уже добавили ${target}`)}
    },
    width(e) {
      const target = e.target.innerText
      if (target=== 'c' && this.isSizeDoneC() === false) {
      console.log(`Нажал ширину ${target}`)
      this.$emit('add-width', target)
      } else if (target=== 'd' && this.isSizeDoneD() === false) {
      console.log(`Нажал ширину ${target}`)
      this.$emit('add-width', target)
      } else  {console.log(`Вы уже добавили ${target}`)}
    },
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    margin-bottom: 30px;
  }

  .apeture {
    margin: 0 auto;
    position: relative;
    &.balkon-left {
      width: 246px;
      height: 320px;
    }
    .figure {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .size-type {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #33C5F3;
      color: white;
      border-radius: 30px;
      width: 30px;
      height: 30px;
      font-weight: 500;
      font-size: 12px;
      z-index: 10;
      &.a1 {
        left: 47px;
        top: 0px;
      }
      &.a2 {
        left: 47px;
        top: 290px;
      }
      &.b1 {
        left: 162px;
        top: 0;
      }
      &.b2 {
        left: 162px;
        top: 176px;
      }
      &.c1 {
        left: 0px;
        top: 71px;
      }
      &.c2 {
        left: 216px;
        top: 71px;
      }
      &.d1 {
        left: 0px;
        top: 234px;
      }
      &.d2 {
        left: 98px;
        top: 234px;
      }
    }
    .size-done {
      background-color: #FFA800;
      cursor: not-allowed;
    }
  }
</style>