<template>
  <div class="line-graph" :class="'graph__' + color(index)">
    <div class="percent">{{ card[type].num }} шт.</div>
    <div class="line"><span :style=" 'width:' + persent(card[type].num) + '%'"></span></div>
    <div class="row priceinfo">
      <div class="col-6 price"><span>{{ card[type].sum | priceFormat }}</span></div>
      <div class="col-6 info"><span>{{ decsription(type) }}</span></div>
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
    card: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true
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
    },
    decsription(type) {
      if (type == "self") {
        return "Самостоятельно"
      } else if (type == "office") {
        return "В офисе"
      } else if (type == "other") {
        return "Повторный выезд"
      }
    },
    persent(num) {
      let persent = (num * 100) / Number(this.total)
      return persent
    },
  }
}
</script>