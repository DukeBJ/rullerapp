<template>
  <div class="col-12">
    <div class="card">
      <h3 class="card-title">Самостоятельно</h3>
      <div class="line-graph graph__blue">
        <div class="percent">60%</div>
        <div class="line"><span style="width:60%"></span></div>
        <div class="row priceinfo">
          <div class="col-6 price"><span>115 578,15 ₽</span></div>
          <div class="col-6 info"><span>art/evo/smart</span></div>
        </div>
      </div>
      <div class="line-graph graph__red">
        <div class="percent">30%</div>
        <div class="line"><span style="width:30%"></span></div>
        <div class="row priceinfo">
          <div class="col-6 price"><span>115 578,15 ₽</span></div>
          <div class="col-6 info"><span>art/evo/smart</span></div>
        </div>
      </div>
      <div class="line-graph graph__gray">
        <div class="percent">15%</div>
        <div class="line"><span style="width:15%"></span></div>
        <div class="row priceinfo">
          <div class="col-6 price"><span>115 578,15 ₽</span></div>
          <div class="col-6 info"><span>art/evo/smart</span></div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
//import LineGraph from './line-graph.vue'

export default {
  name: 'Card',
  // components: {
  //   LineGraph
  // }
}
</script>