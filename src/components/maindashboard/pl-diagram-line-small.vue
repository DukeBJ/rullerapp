<template>
  <div class="line-graph line-graph__min">
    <div class="row priceinfo">
      <div class="col-6 price"><span>{{ header(type) }}</span></div>
      <div class="col-6 info"><span>{{ value }}</span></div>
    </div>
    <div class="line"><span :style=" 'width:' + persent(value) + '%'"></span></div>    
  </div>
</template>

<script>
export default {
  name: 'pl-diagram-line',
  data() {
    return {
    }
  },
  props: {
    value: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    }
  },
  methods: {
    persent(val) {
      let persent = (val * 100) / Number(this.total)
      return persent
    },
    header(type) {
      if (type == 'mayby') {
        return 'Возможные'
      } else if (type == 'self') {
        return 'На дому'
      } else if (type == 'office') {
        return 'В офисе'
      }
    }
  }
}
</script>