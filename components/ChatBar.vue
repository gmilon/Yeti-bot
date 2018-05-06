<template>
  <div class="chatbar">
    <div class="inputGroup inputGroup1">
      <label for="email1">Email</label>
      <input type="text" id="email" class="email" maxlength="256"/>
      <p class="helper helper1">email@domain.com</p>
      <span class="indicator"></span>
    </div>
    <div class="inputGroup inputGroup2">
      <label for="password">Password</label>
      <input type="password" id="password" class="password"/>
    </div>
    <div class="inputGroup inputGroup3">
      <button id="login">Log in</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChatBar",
    methods: {
      handleFocus () {
        this.$store.yeti.dispatch('toggleSidebar')
      }
    }
  }
</script>
