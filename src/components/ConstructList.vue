<template>
  <div class="container">
    <WindowList/>
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
import WindowList from '@/components/WindowList.vue'

export default {
  name: "ConstructList",
  components: {
    WindowList
  }
}
</script>