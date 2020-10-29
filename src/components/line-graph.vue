<template>
  <div class="line-graph" v-bind:class="{ graphColor }">
    <div class="percent">{{ graphLeight }}%</div>
    <div class="line"><span style="width:%;">{{ graphLeight }}</span></div>
    <div class="row priceinfo">
      <div class="col-6 price"><span>{{ graphPrice }} ₽</span></div>
      <div class="col-6 info"><span>{{ graphName }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LineGraph',
  props: {
    graphColor: String,
    graphLeight: String,
    graphPrice: Number,
    graphName: String,
  },
  data: () => {
    graphColor: {
      
    }
  }
}
</script>

<LineGraph graphColor="blue" graphLeight="60" graphPrice="234234234" graphName="art/evo/smart" />