<template>
  <div>
    <h2>Ребенок один</h2>
    <button
      @click="clickOne"
      :disabled="keys('a')"
    >Один</button>
    <button
      @click="clickTwo"
      :disabled="keys('b')"
    >Два</button>
    <button
      @click="clickThree"
      :disabled="keys('c')"
    >Три</button>
    <button
      @click="clickFour"
      :disabled="keys('d')"
    >Четыре</button>
    <hr v-if="Object.keys(sizes).length !== 0">
    <ul v-if="Object.keys(sizes).length !== 0">
      <li
        v-for="(value, name, index) in sizes"
        :key="index"
      >{{name}}: {{value.x}}×{{value.y}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'child-one',
  props: ['sizes'],
  data() {
    return {
      count: 0,
      isOneDis: false,
      isTwoDis: false,
      isThreeDis: false,
      isFourDis: false,
    }
  },
  // computed: {
    
  // },
  methods: {
    clickOne() {
      const number = 'a'
      const isSend = true
      const payload = {
        number,
        isSend
      }
      console.log('отправил ' + number)
      this.$emit('send-num', payload)
    },
    clickTwo() {
      const number = 'b'
      const isSend = true
      const payload = {
        number,
        isSend
      }
      console.log('отправил ' + number)
      this.$emit('send-num', payload)
    },
    clickThree() {
      const number = 'c'
      const isSend = true
      const payload = {
        number,
        isSend
      }
      console.log('отправил ' + number)
      this.$emit('send-num', payload)
    },
    clickFour() {
      const number = 'd'
      const isSend = true
      const payload = {
        number,
        isSend
      }
      console.log('отправил '+ number)
      this.$emit('send-num', payload)
    },
    keys(letter) {
      return Object.prototype.hasOwnProperty.call(this.sizes, letter)
    }
  }
}
</script>

<style lang="scss" scoped>
  li {
    text-align: left;
  }
</style>