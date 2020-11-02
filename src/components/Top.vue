<template>
  <header>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <h1 class="inner-page">Расписание замеров на&nbsp;{{ date }}&nbsp;г.</h1>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    date: String,
  },
}
</script>

<style>
</style>