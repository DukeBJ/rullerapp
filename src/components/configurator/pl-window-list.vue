<template>
  <div class="col-12">
    <div class="card card-window">
      <div class="card-header">
        <div class="title">Окно №{{window}}</div>
        <div class="aperturetype">
          <iconApertureSquare
            v-if="aperture === 'square'"
          />
          <icon-aperture-balkon-right
            v-if="aperture === 'balkon-right'"
          />
          <icon-aperture-balkon-left
            v-if="aperture === 'balkon-left'"
          />
          <icon-aperture-balkon-center
            v-if="aperture === 'balkon-center'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import iconApertureSquare from '@/assets/img/icons/aperture_square.svg?inline'
  import iconApertureBalkonRight from '@/assets/img/icons/aperture_balkonright.svg?inline'
  import iconApertureBalkonLeft from '@/assets/img/icons/aperture_balkonleft.svg?inline'
  import iconApertureBalkonCenter from '@/assets/img/icons/aperture_balkoncenter.svg?inline'

export default {
  name: "pl-window-list",
  components: {
    iconApertureSquare,
    iconApertureBalkonRight,
    iconApertureBalkonLeft,
    iconApertureBalkonCenter
  },
  props: ['window', 'aperture']
}
</script>