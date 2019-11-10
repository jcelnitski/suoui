<template>
  <div id="nav" class="nav">
    <router-link class="nav-item" :to="{ name: 'main' }">
      <img class="link-pic" src="../assets/home-button.jpg">
    </router-link>
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
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  margin-top: 0%;
  margin-left: 0;
  margin-right: auto;
  padding-bottom: 5%;
}
.nav > .mobile-brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 28pt;
  color: #39b982;
}
.nav > .mobile-brand > a {
  text-decoration: none;
}
.nav > .desktop-brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 50pt;
  color: #39b982;
}
.nav > .desktop-brand > a {
  text-decoration: none;
}

.nav .nav-item {
  box-sizing: border-box;
  margin-left: 10%;
  margin-right: auto;
  text-decoration: none;
}

.link-pic {
  margin-top: 60%;
  margin-left: -65%;
}
</style>
