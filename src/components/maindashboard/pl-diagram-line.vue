<template>
  <div class="line-graph" v-bind:class="'graph__' + lineDiagram.color">
    <div class="percent">{{ lineDiagram.persent }}%</div>
    <div class="line"><span v-bind:style=" 'width:' + lineDiagram.persent + '%'"></span></div>
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
  props: {
    lineDiagram: {
      type: Object,
      required: true,
    }
  },
  filters: {
    priceFormat
  }
}
</script>