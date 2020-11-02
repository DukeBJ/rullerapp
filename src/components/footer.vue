<template>
  <footer>
    <nav class="nav-bottom">
        <div class="nav-bottom__el">
          <router-link to="/schedule/">
            <div class="square-button">
              <span class="date"></span>
            </div>
          </router-link>
        </div>
        <div class="nav-bottom__el">
          <div class="square-button">
            <span class="square"></span>
          </div>
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
  name: 'Footer'
}
</script>