<template>
  <div class="card card-diagram">
    <h3 class="card-title">{{ card.title }}</h3>
    <DiagramLine
      v-for="lineDiagram in card.lineDiagram"
      v-bind:key="lineDiagram.id"
      v-bind:lineDiagram="lineDiagram"
    />
  </div>
</template>

<script>
import DiagramLine from '@/components/DiagramLine.vue'

export default {
  name: 'CardLineDiagram',
  components: {
    DiagramLine,
  },
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>