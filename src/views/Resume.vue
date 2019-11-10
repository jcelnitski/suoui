<template>
  <div>
    <mq-layout class="desktop" mq="desktop">
      <pdf src="Elnitski_Resume_Redacted.pdf" class="pdf"></pdf>
    </mq-layout>
    <mq-layout class="mobile" mq="mobile">
      <pdf src="Elnitski_Resume_Redacted.pdf" class="pdf"></pdf>
    </mq-layout>
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  }
}
</script>

<style>
.desktop {
  max-width: 50%;
  margin-left: 20%;
}

.mobile {
  max-width: 83%;
  margin-left: 0;
}

.pdf {
  margin: auto;
  width: 90%;
}
</style>