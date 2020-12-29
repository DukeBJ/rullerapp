<template>
  <div class="col-12">
    <div class="card card-diagram">
      <h3 class="card-title">Заказы</h3>
      <pl-diagram-line
        v-for="(item, index) in prod"
        :key="index"
        :index="index"
        :card="item"
        :type="Object.keys(item)[0]"
        :total="total(prod)"
      />
    </div>
  </div>
</template>

<script>
import plDiagramLine from '@/components/maindashboard/pl-diagram-line.vue'

export default {
  name: 'pl-card-diagram-line',
  components: {
    plDiagramLine,
  },
  props: ['prod'],
  methods: {
    total(prod) {
      let sumArr = new Array()
      prod.forEach(element => {
        sumArr.push(element[Object.keys(element)].num)
      })
      let result = sumArr.reduce(function(sum, current) {
        return sum + current;
      }, 0)
      return result
    }
  }
}
</script>