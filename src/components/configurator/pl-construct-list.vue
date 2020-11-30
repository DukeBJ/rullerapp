<template>
  <div class="container">
    <div class="row">
      <pl-window-list
        v-for="win in constructions"
        :key="win.window"
        :window="win.window"
        :aperture="win.aperture"
      />
    </div>
    <div class="row">
      <div class="col-12">
        <button
          class="app-btn btn__blue btn__min-width"
            @click="addWindow"
          >Добавить окно</button>
      </div>
      <div class="col-12">
        <button
          class="app-btn btn__blue btn__min-width"
            @click="lastStep"
          >Продолжить</button>
      </div>
    </div>
  </div>
</template>

<script>
import plWindowList from '@/components/configurator/pl-window-list.vue'

export default {
  name: "pl-construct-list",
  components: {
    plWindowList
  },
  props: ['constructions'],
  methods: {
    addWindow() {
      this.$emit('add-window', 'add')
    },
    lastStep() {
      this.$emit('last-step', 'last')
    }
  }
}
</script>