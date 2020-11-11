<template>
  <div class="col-12">
    <div class="compliment">
      <div class="compliment__name">Молодец, {{ name }}!</div>
      <div class="compliment__desc">Продолжай в том же духе… и в конце года точно погасишь ипотеку!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Compliment',
  props: {
    name: String,
  }
}
</script>