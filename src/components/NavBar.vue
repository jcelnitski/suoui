<template>
  <div id="nav" class="nav">
    <div class="nav-item">
      <router-link :to="{ name: 'drinks' }">
        <img class="link-pic" src="../assets/drinks.png">
      </router-link>
    </div>
    <br>
    <div class="nav-item">
      <router-link :to="{ name: 'food' }">
        <img class="link-pic" src="../assets/food.png">
      </router-link>
    </div>
    <br>
    <div class="nav-item">
      <router-link :to="{ name: 'at-home' }">
        <img class="link-pic" src="../assets/at-home.png">
      </router-link>
    </div>
  </div>
</template>

<script>
import ResizeText from 'vue-resize-text'

export default {
  directives: {
    ResizeText
  }
}
</script>

<style scoped>
.nav {
  background-color: #00AF66;
  display: flex;
  flex-flow: wrap;
  width: 15%;
  padding-top: 5%;
  margin-top: 5%;
  margin-left: 0;
}

.nav .nav-item {
  display: flex;
  flex-flow: wrap;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}

.link-pic {
  margin-left: 10%;
  width: 80%;
}
</style>
