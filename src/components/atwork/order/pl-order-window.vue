<template>
  <div class="card card-window">
    <div class="card-header">
      <div
        class="title"
        >Окно №{{winNo}} ({{price | priceFormat}})</div>
      <button
        @click="editWindow"
        :style="{backgroundImage: url}"
        class="sqbtn"
      ></button>
    </div>
  </div>
</template>

<script>
import switcher from '@/assets/img/icons/switcher.svg'
import priceFormat from '@/components/filters/priceFormat'

export default {
  name: 'pl-order-window',
  props: ['winNo', 'price'],
  data() {
    return {
      url: `url(${switcher})`
    }
  },
  filters: {
    priceFormat
  },
  computed: {
  },
  methods: {
    editWindow() {
      this.$emit('edit-window', this.winNo)
    }
  }
}
</script>

<style lang="scss" scoped>
  .sqbtn {
    
    background-color: #33C5F3;
    background-repeat: no-repeat;
    background-position: center;
    border: 0;
    width: 50px;
    height: 50px;
    margin-top: -10px;
    margin-bottom: -10px;
    margin-right: -10px;
    border-radius: 10px;
  }
</style>