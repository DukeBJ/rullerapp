<template>
  <div class="card card-diagram">
    <h3 class="card-title">{{ card.title }}</h3>
    <pl-diagram-line
      v-for="lineDiagram in card.lineDiagram"
      v-bind:key="lineDiagram.id"
      v-bind:lineDiagram="lineDiagram"
    />
  </div>
</template>

<script>
import plDiagramLine from '@/components/maindashboard/pl-diagram-line.vue'

export default {
  name: 'pl-card-diagram-line',
  components: {
    plDiagramLine,
  },
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>