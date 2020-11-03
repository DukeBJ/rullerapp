<template>
  <header class="app-header">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <h1 class="inner-page">{{ title }}</h1>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: 'TopActive',
  props: {
    title: String,
  },
}
</script>

<style>
</style>