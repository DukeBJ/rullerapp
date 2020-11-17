<template>
  <div class="container">
    <pl-square-size-list/>
    <pl-aperture-size/>
  </div>
</template>

<script>
import plSquareSizeList from '@/components/configurator/aperture/square/pl-square-size-list.vue'
import plApertureSize from '@/components/configurator/aperture/square/pl-aperture-size.vue'

export default {
  name: 'pl-aperture-square',
  components: {
    plSquareSizeList,
    plApertureSize,
  },
  data() {
    return {

    }
  }
}
</script>