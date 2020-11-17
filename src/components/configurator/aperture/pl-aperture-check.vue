<template>
  <div class="container">
    <pl-type-build
      :buildType="order.buildType"
      :id="order.id"
      @chosen="notifyParent"
      v-model="order.buildType"
    />
    <pl-aperture-type
      
    />
  </div>
</template>

<script>
import plApertureType from '@/components/configurator/aperture/pl-aperture-type.vue'
import plTypeBuild from '@/components/configurator/aperture/pl-type-build.vue'

export default {
  name: 'pl-aperture-check',
  components: {
    plApertureType,
    plTypeBuild
  },
  props: ['order'],
  methods: {
    notifyParent(select, id) {
        this.$emit('update-build', select, id)
    }
  }
}
</script>