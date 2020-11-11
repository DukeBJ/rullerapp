<template>
  <div class="container">
    <TypeBuild
      @update-buildtype="updaetBuildType"
    />
    <ApertureType
      @add-construction="addConstruction"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ApertureType from '@/components/configurator/ApertureType.vue'
import TypeBuild from '@/components/configurator/TypeBuild.vue'

export default {
  name: 'ApertureCheck',
  components: {
    ApertureType,
    TypeBuild
  },
  computed: {
    ...mapState('configurator', {
        order: 'order',
        service: 'service'
    })
  },
  methods: {
    ...mapActions('configurator', [
        'updaetBuildType',
        'addConstruction',
    ])
  },
}
</script>