<template>
  <div class="chatbar">
    <div class="inputGroup">
      <input
        type="text"
        maxlength="256"
        @blur="changeBody('normal')"
        @focus="changeBody('eyesCovered')"
      />
      <button id="send" type="button">Send</button>
    </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "ChatBar",
    methods: {
      ...mapActions(['changeBody'])
    }
  }
</script>
