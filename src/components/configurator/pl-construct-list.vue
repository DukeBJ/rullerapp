<template>
  <div class="container">
    <pl-window-list/>
    <div class="row">
      <div class="col-12">
        <button
          class="app-btn btn__blue"
          
          >Добавить окно</button>
      </div>
      <div class="col-12">
        <button
          class="app-btn btn__blue"
          
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
  }
}
</script>