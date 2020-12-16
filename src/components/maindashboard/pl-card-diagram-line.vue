<template>
  <div class="card card-diagram">
    <h3 class="card-title">{{ card.title }}</h3>
    <pl-diagram-line
      v-for="(lineDiagram, index) in card.lineDiagram"
      :key="index"
      :index="index"
      :lineDiagram="lineDiagram"
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