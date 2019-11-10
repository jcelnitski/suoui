<template>
  <div class="tile-layout">
    <Tile class="tile-format" v-for="subCat in subCats" :id="subCat.id" :name="subCat.name" :key="subCat.id">
    </Tile>
  </div>
</template>

<script>
import Tile from '@/components/Tile.vue'

export default {
  components: {
    Tile
  },
  props: ['subCat'],
  data() {
    return {
      subCat: this.subCat
    }
  }
}
</script>

<style scoped>
.tile-format {
  margin-left: 3%;
  margin-bottom: 0;
  max-height: 20% !important;
  width: 47%;
}
.tile-layout {
  display: flex;
  flex-flow: wrap;
  width: 95%;
}
</style>
