<template>
  <div class="col-12">
    <div class="donut-diagram">
      <div class="canvas">
        <svg width="260" height="260" viewBox="0 0 36 36" class="donut" role="img">
          <circle class="donut-back" cx="50%" cy="50%" r="15.91549430918954"
            stroke="#F2F2F2"
            fill="transparent"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <circle class="donut-ring donut_blue" cx="50%" cy="50%" r="15.91549430918954"
            stroke="#33C5F3"
            fill="transparent"
            fill-opacity="0"
            stroke-width="3"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="donut-desc">
        <div class="donut-desc__title">Срастаемость</div>
        <div class="donut-desc__persent">85%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Donut',
}
</script>

<style>
.donut .donut-ring {
  stroke-dasharray: 85, 100;
}

</style>