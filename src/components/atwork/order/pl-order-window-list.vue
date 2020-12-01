<template>
  <div class="row window-list">
    <div class="col-12">
      <div class="card card-window">
        <div class="card-header">
          <div
            class="title"
            >Окно №{{winNo}} ({{price | priceFormat}})</div>
          <button
            @click="editWindow"
          >opt</button>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import priceFormat from '@/components/filters/priceFormat'
export default {
  name: 'pl-window-list',
  props: ['winNo', 'price'],
  date() {
    return {
      
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