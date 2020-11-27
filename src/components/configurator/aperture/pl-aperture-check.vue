<template>
  <div class="container">
    <pl-type-build
      :buildType="order.buildType"
      :id="order.id"
      @chosen="sendBuildType"
      v-model="order.buildType"
    />
    <pl-aperture-type
      :id="order.id"
      :constrNumber="order.constructions.length"
      @square="sendConstruction"
      @balkonLeft="sendConstruction"
      @balkonRight="sendConstruction"
      @balkonCenter="sendConstruction"
      @check="typeApertude"
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
    sendBuildType(payload) {
        this.$emit('update-build', payload)
    },
    sendConstruction(payload) {
      this.$emit('add-construction', payload)
    },
    typeApertude(check) {
      this.$emit('type-aperture', check)
    }
  }
}
</script>