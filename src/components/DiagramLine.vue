<template>
  <div class="line-graph" v-bind:class="'graph__' + lineDiagram.color">
    <div class="percent">{{ lineDiagram.persent }}%</div>
    <div class="line"><span v-bind:style=" 'width:' + lineDiagram.persent + '%'"></span></div>
    <div class="row priceinfo">
      <div class="col-6 price"><span>{{lineDiagram.sale}}&nbsp;₽</span></div>
      <div class="col-6 info"><span>{{ lineDiagram.description }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiagramLine',
  props: {
    lineDiagram: {
      type: Object,
      required: true,
    }
  },
  methods: {

  }
}
</script>