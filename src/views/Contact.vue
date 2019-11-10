<template>
  <div class="main">
    <ContactCard class="contact-card"></ContactCard>
  </div>
</template>

<script>
import ContactCard from '../components/ContactCard.vue'

export default {
  components: {
    ContactCard
  },
  data: function() {
    return {
    }
  },
}
</script>

<style>
.main {
  padding-top: 5%;
}

.contact-card {
  margin-left: 30%;
}
</style>