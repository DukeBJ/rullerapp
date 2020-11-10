<template>
  <div class="container">
    <TypeBuild/>
    <ApertureType/>
  </div>
</template>

<script>
import ApertureType from '@/components/ApertureType.vue'
import TypeBuild from '@/components/TypeBuild.vue'

export default {
  name: 'ConstructCheck',
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