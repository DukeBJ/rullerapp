<template>
  <div class="row window-sum">
    <div
      v-if="!winEdit"
      class="sum"
    >Итого:</div>
    <div
      v-if="winEdit"
      class="sum"
    >Окно №{{winNo}}</div>
    <div
      v-if="!winEdit"
      class="price"
    >{{orderSum | priceFormat}}</div>
    <div
      v-if="winEdit"
      class="price"
    >{{price | priceFormat}}</div>
    <div
      class="size-info"
      v-if="winEdit"
    >Габаритные размеры проёма — {{sizes.a}}×{{sizes.c}}мм</div>
  </div>
</template>

<script>
import priceFormat from '@/components/filters/priceFormat'
export default {
  name: 'pl-ordert-topinfo',
  props: ['winNo', 'price', 'orderSum','winEdit', 'sizes'],
  filters: {
    priceFormat
  },
}
</script>