<template>
  <carousel
    :centerMode="true"
    :paginationEnabled="false"
    :perPage="1"
    :spacePadding="50"

    >
        <!-- @pageChange="initialLoad = false" -->
        <!-- :class="{ 'VueCarousel-slide-active': index === 0 && initialLoad}" -->
        <!-- :data-name="Object.keys(value)" -->
    <slide
      v-for="(value, index) in config"
      :key="index"
      :data-name="Object.keys(value)"
      @slideclick="handleSlideClick"
      >
      <div class="card type-construction">
          <div class="card-body">
            <img :src="Object.values(value)" alt="">
          </div>
        </div>
    </slide>
</carousel>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'
  import balk01 from '@/assets/img/window-config/balk-1.svg'
  import balk02 from '@/assets/img/window-config/balk-2.svg'
  import balk03 from '@/assets/img/window-config/balk-3.svg'

  export default {
    name: 'pl-construct-slider',
    components: {
    Carousel,
    Slide,
    // balk01,
    // balk02,
    // balk03
  },

    data() {
      return {
        isActive: true,
        initialLoad: true,
        config: [
          {first: balk01},
          {second: balk02},
          {third: balk03}
        ]
      }
    },
    computed: {
      
    },
    methods: {
      handleSlideClick(dataset) {
        console.log(dataset.name)
        this.$emit('config-check', dataset.name)
      },
    }
  }
</script>

<style lang="scss">

.slider-row {
  flex-wrap: nowrap;
}

.card {
  background-color: white;
  transition: all 0.5s ease-in-out;
  img {
    transition: all 0.5s ease-in-out;
    filter: invert(0);
    mix-blend-mode: normal;
  }
  svg path {
    fill:#05252F;
    transition: all 0.5s ease-in-out;
  }
}

.VueCarousel-slide-active {
  .card {
    background-color: #33C5F3;
    img {
    transition: all 0.5s ease-in-out;
    filter: invert(1);
    mix-blend-mode: color-dodge;
  }
    svg path {
      fill: white;
    }
  }
}


.VueCarousel-slide {
    padding-left: 15px;
    padding-right: 15px;
}

</style>