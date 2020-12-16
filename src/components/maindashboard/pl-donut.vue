<template>
    <div class="donut-diagram">
      <div class="canvas">
        <svg width="260" height="260" viewBox="0 0 36 36" class="donut" role="img">
          <circle class="donut-back" cx="50%" cy="50%" r="15.91549430918954"
            stroke="#F2F2F2"
            fill="transparent"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <circle class="donut-ring" cx="50%" cy="50%" r="15.91549430918954"
            :class="'donut__' + color(index)"
            :style="'stroke-dasharray:' + donut.persent + ', 100;'"
            fill="transparent"
            fill-opacity="0"
            stroke-width="3"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="donut-desc">
        <div class="donut-desc__title">{{ donut.title }}</div>
        <div class="donut-desc__persent">{{ donut.persent }}%</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'pl-donut',
  props: {
    donut: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    }
  },
  methods: {
    color(i) {
      if (i === 0) {
        return "skyblue"
      } else if (i === 1) {
        return "magenta"
      }
    }
  }
}
</script>