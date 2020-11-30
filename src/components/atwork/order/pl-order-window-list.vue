<template>
  <div class="row window-list">
    <div class="col-12">
      <div class="card card-window">
        <div class="card-header">
          <div class="title">Окно №{{winNo}} ({{Rprice}})</div>
          <button
            @click="editWindow"
          >opt</button>
        </div>
      </div>
      <div>{{price}}</div>
      <div>{{config}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pl-window-list',
  props: ['winNo', 'price', 'config'],
  computed: {
    windowSum() {
      return 0
    }
  },
  methods: {
    editWindow() {
      this.$emit('edit-window', this.winNo)
    }
  }
}

// config:
// childlock: true
// color: "white"
// ebb: "false"
// glassunit: "climatherms"
// hendless: "type3"
// mosquito: "false"
// profile: "lite60"
// sill: "moller300"
// slope: true
// type: "second"
</script>