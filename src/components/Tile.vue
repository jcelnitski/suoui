<template>
  <div>
    <mq-layout mq="desktop">
      <router-link class="tile-link" :to="{ name: 'main', params: {id: this.id} }">
        <div v-resize-text="{ratio:1.5, minFontSize: '10px', maxFontSize: '50px', delay: 200}" class="tile -shadow">
            <h3 class="title">{{ this.name }}</h3>
        </div>
      </router-link>
    </mq-layout>
    <mq-layout mq="mobile">
      <router-link class="tile-link" :to="{ name: 'main', params: {id: this.id} }">
        <div v-resize-text="{ratio:1.5, minFontSize: '10px', maxFontSize: '70px', delay: 200}" class="tile -shadow">
            <h4 class="title">{{ this.name }}</h4>
        </div>
      </router-link>
    </mq-layout>
  </div>
  
</template>

<script>
import ResizeText from 'vue-resize-text'

export default {
  props: ['id', 'name'],
  data() {
    return {
    }
  },
  computed: {
    destination: function(){
      if (this.title == 'PSU Link'){
        return 'psulink'
      }
      else if (this.title == 'Mobile Shopping Study'){
        return 'mobile-study'
      }
      else if (this.title == 'LEGO AR Assistant'){
        return 'lego-ar'
      }
      else if (this.title == 'RestHUB'){
        return 'resthub'
      }
      else {
        return 'project-show'
      }
    }
  },
  directives: {
    ResizeText
  }
}
</script>

<style scoped>
.tile {
  color: white;
  background-image: url('https://globalassets.starbucks.com/assets/0f1fb4ec32324da88d7135470269a9f1.jpg');
  border-radius: 30px 30px 30px 30px;
  height: 100px;
  align-content: 0;
  line-height: 0px;
  padding: 20px;
  padding-bottom: 50%;
  margin-bottom: 24px;
  max-height: 15% !important;
  transition: all 0.2s linear;
  cursor: pointer;
  width: 80%;
  max-width: 150%;
}
.tile:hover {
  color: black;
  background-color: white;
}
.tile > .title {
  line-height: 1;
  margin-top: 0 !important;
  color: #39b982;
}
.tile-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
  padding: 2%;
}

.tile-layout {
  display: flex;
  width: 100%;
}

.eyebrow-desktop {
  font-size: 12px;
}

.eyebrow-mobile {
  font-size: 6px;
}
</style>
