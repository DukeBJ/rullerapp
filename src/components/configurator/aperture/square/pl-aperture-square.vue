<template>
  <div class="container">
    <pl-square-size-list
      @add-height="addHeight"
      @add-width="addWidth"
    />
    <pl-aperture-size
    />
    {{whatHeight}}<br>{{whatWidth}}
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
  props: ['constructions'],
  data() {
    return {
      height: '',
      width: '',
      whatHeight: '',
      whatWidth: ''
    }
  },
  methods: {
    addHeight(e) {
      return this.whatHeight = e
    },
    addWidth(e) {
      return this.whatWidth = e
    }
  }
}
</script>