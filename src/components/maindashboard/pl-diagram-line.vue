<template>
  <div class="line-graph" :class="'graph__' + color(index)">
    <div class="percent">{{ lineDiagram.persent }}%</div>
    <div class="line"><span :style=" 'width:' + lineDiagram.persent + '%'"></span></div>
    <div class="row priceinfo">
      <div class="col-6 price"><span>{{ lineDiagram.sale | priceFormat }}</span></div>
      <div class="col-6 info"><span>{{ lineDiagram.description }}</span></div>
    </div>
  </div>
</template>

<script>
import priceFormat from '@/components/filters/priceFormat';
export default {
  name: 'pl-diagram-line',
  data() {
    return {
    }
  },
  props: {
    lineDiagram: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    }
  },
  filters: {
    priceFormat
  },
  methods: {
    color(i) {
      if (i === 0) {
        return "blue"
      } else if (i === 1) {
        return "yellow"
      } else if (i === 2) {
        return "gray"
      }
    }
  }
}
</script>