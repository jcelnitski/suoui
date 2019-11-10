<template>
  <div>
    <h2>RestHUB</h2>
    <h4>Proposal</h4>
    <div class="container">
      <pdf class="pdf" src="Elnitski_Project_Proposal.pdf" :page="1"></pdf>
      <pdf class="pdf" src="Elnitski_Project_Proposal.pdf" :page="2"></pdf>
      <pdf class="pdf" src="Elnitski_Project_Proposal.pdf" :page="3"></pdf>
    </div>
    <br>
    <h4>Conceptual Design</h4>
    <div class="container">
      <pdf class="pdf" src="Elnitski_Conceptual_Design.pdf" :page="1"></pdf>
      <pdf class="pdf" src="Elnitski_Conceptual_Design.pdf" :page="2"></pdf>
      <pdf class="pdf" src="Elnitski_Conceptual_Design.pdf" :page="3"></pdf>
    </div>
    <br>
    <h4>Planning Estimate</h4>
    <div class="container">
      <pdf class="pdf" src="Elnitski_Project_Estimate.pdf" :page="1"></pdf>
      <pdf class="pdf" src="Elnitski_Project_Estimate.pdf" :page="2"></pdf>
      <pdf class="pdf" src="Elnitski_Project_Estimate.pdf" :page="3"></pdf>
      <pdf class="pdf" src="Elnitski_Project_Estimate.pdf" :page="4"></pdf>
      <pdf class="pdf" src="Elnitski_Project_Estimate.pdf" :page="5"></pdf>
      <pdf class="pdf" src="Elnitski_Project_Estimate.pdf" :page="6"></pdf>
    </div>
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
.container {
  margin-left: 5%;
  width: 90%;
}

.pdf {
  width: 100%;
}
</style>