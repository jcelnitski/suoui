<template>
  <div class="main">
    <mq-layout class="desktop" mq="desktop">
      <RestHUB v-if="id === 1"></RestHUB>
      <PSULink v-if="id === 2"></PSULink>
      <MobileStudy v-if="id === 3"></MobileStudy>
      <LEGOAR v-if="id === 4"></LEGOAR>
    </mq-layout>
    <mq-layout class="mobile" mq="mobile">
      <RestHUB v-if="id === 1"></RestHUB>
      <PSULink v-if="id === 2"></PSULink>
      <MobileStudy v-if="id === 3"></MobileStudy>
      <LEGOAR v-if="id === 4"></LEGOAR>
    </mq-layout>
  </div>
</template>

<script>
import RestHUB from './RestHUB.vue'
import PSULink from './PSULink.vue'
import LEGOAR from './LEGOAR.vue'
import MobileStudy from './MobileStudy.vue'

export default {
  components: {
    RestHUB,
    PSULink,
    LEGOAR,
    MobileStudy
  },
  props: ['id'],
  computed: {
    projSel: function(){
      if (this.id == 1){
        return 'resthub'
      }
      else if (this.id == 2){
        return 'psulink'
      }
      else if (this.id == 3){
        return 'mobile-study'
      }
      else if (this.id == 4){
        return 'lego-ar'
      }
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
}

.desktop {
  max-width: 80%;
  margin-left: 10%;
}

.mobile {
  max-width: 90%;
  margin-left: 5%;
}
</style>