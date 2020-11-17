<template>
  <footer class="nav-footer">
    <nav class="nav-bottom">
        <div class="nav-bottom__el">
          <router-link :to="{name: 'schedule'}">
            <div class="square-button">
              <span class="date"></span>
            </div>
          </router-link>
        </div>
        <div class="nav-bottom__el">
          <router-link :to="{name: 'atwork'}">
            <div class="square-button">
              <span class="square"></span>
            </div>
          </router-link>
        </div>
        <div class="nav-bottom__el">
          <div class="square-button">
            <span class="msg"></span>
          </div>
        </div>
        <div class="nav-bottom__el">
          <div class="square-button">
            <span class="info"></span>
          </div>
        </div>
    </nav>
  </footer>
</template>


<script>
export default {
  name: 'pl-footer'
}
</script>