<template>
  <div class="main">
    <NavBar></NavBar>
    <mq-layout mq="desktop">
      <div class="desktop-slot">
        <div class="desktop-container">
          <h1>Drinks</h1>
          <TileList/>
        </div>
      </div>
    </mq-layout>
    <mq-layout mq="mobile">
      <div class="mobile-slot">
        <div class="mobile-about">
          <Headshot class="head"/>
          <br>
          <div class="desc">
            Select an option to the left to get started!
          </div>
        </div>
        <br>
        <div class="mobile-container">
          <h1>Drinks</h1>
          <TileList/>
        </div>
      </div>
    </mq-layout>
  </div>
  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TileList from '@/components/TileList.vue'
import Headshot from '@/components/Headshot.vue'

export default {
  components: {
    NavBar,
    TileList,
    Headshot
  }
}
</script>

<style>
.main {
  display: flex;
  width: 100%;
}

.desktop-slot {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}

.mobile-slot {
  flex-flow: wrap;
  justify-content: center;
}

.desktop-about {
  max-width: 40%;
  margin-left: 6%;
}

.mobile-about {
  max-width: 70%;
  margin: auto;
  padding-top: 2%;
}

.desc {
  background-color: #595959;
  border-radius: 10px 10px 10px 10px;
  font-size: 14pt;
  line-height: 1.5;
  padding: 10px;
}

.head {
  width: 90%;
  margin: auto;
}

.desktop-container {
  max-width: 50%;
  padding: 1%;
}

.mobile-container {
  width: 90%;
  padding: 1%;
  margin: auto;
}
</style>