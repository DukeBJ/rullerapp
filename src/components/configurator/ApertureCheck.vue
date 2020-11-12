<template>
  <div class="container">
    <TypeBuild
      :buildType="order.buildType"
      :id="order.id"
      @chosen="notifyParent"
      v-model="order.buildType"
    />
    <ApertureType
      
    />
  </div>
</template>

<script>
import ApertureType from '@/components/configurator/ApertureType.vue'
import TypeBuild from '@/components/configurator/TypeBuild.vue'

export default {
  name: 'ApertureCheck',
  components: {
    ApertureType,
    TypeBuild
  },
  props: ['order'],
  methods: {
            notifyParent(e) {
                this.$emit('update-build', e)
            }
  }
}
</script>