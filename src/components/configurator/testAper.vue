<template>
  <div>
    <div><strong>Размеры {{name}}:</strong> {{size}}</div>
  </div>
</template>

<script>
export default {
  props: [
    'size', 'name'
  ],
}
</script>