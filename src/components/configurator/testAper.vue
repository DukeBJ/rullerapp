<template>
  <div>
    <div>Размеры_{{name}}: {{size}}</div>
  </div>
</template>

<script>
export default {
  props: [
    'size', 'name'
  ],
}
</script>