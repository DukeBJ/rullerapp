<template>
  <div>
    <div><strong>Размеры {{name}}:</strong> внутри - {{size.in}}, снаружи - {{size.out}}</div>
  </div>
</template>

<script>
export default {
  props: [
    'size', 'name'
  ],
}
</script>