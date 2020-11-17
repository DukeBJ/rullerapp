<template>
  <header class="app-header">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <h1 class="inner-page">Расписание замеров на{{ '\u00A0' + date + '\u00A0' }}г.</h1>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: 'pl-header-schedule',
  props: {
    date: String,
  },
}
</script>

<style>
</style>