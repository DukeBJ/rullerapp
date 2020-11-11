<template>
  <div class="container">
    <TypeBuild/>
    <ApertureType/>
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
  data() {
    return {
      calculationPrice: [
      ],
    }
  }
}
</script>