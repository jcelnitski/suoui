<template>
  <form action="https://formspree.io/mlerbjrq" class="form" method="POST">
    <div class="name">
      <label class="form-item">
        Name
      </label>
      <br>
      <input type="text-area" name="name">
    </div>
    <br>
    <div class="email">
      <label class="form-item">
        Email
      </label>
      <br>
      <input type="email" name="email">
    </div>
    <br>
    <div class="message">
      <label class="form-item">
        Message
      </label>
      <br>
      <textarea name="message"></textarea>
    </div>
    <input class="send-button" type="submit" value="Send">
  </form>
</template>

<script>
export default {
  data: function() {
    return {
    }
  }
}
</script>

<style>
.form {
  background-color: #595959;
  border-radius: 15px 15px 15px 15px;
  width: 40%;
  overflow: auto;
  padding-top: 1%;
  padding-bottom: 1%;
}

.form-item {
  color: white;
  padding: 2%;
  width: 90%;
}

.name {
  margin-left: 10%;
  width: 80%;
}

.email {
  margin-left: 10%;
  width: 80%;
}

.message {
  margin-left: 10%;
  width: 80%;
}

input {
  width:100%;
}

.send-button {
  background-color: #39b982;
  border-radius: 7px 7px 7px 7px;
  float: right;
  margin-right: 5%;
  margin-top: 2%;
  width: auto;
}
</style>