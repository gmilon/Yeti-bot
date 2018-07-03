<template>
  <div class="chatbar">
    <div class="inputGroup">
      <input
        type="text"
        ref="input"
        maxlength="256"
        v-model="intent"
        @input="updateCusror"
        @blur="changeBody('normal')"
        @focus="changeBody('eyesCovered')"
        @keyup.enter="send()"
      />
      <button id="send" type="button">Send</button>
    </div>
    </div>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex'
  export default {
    name: "ChatBar",
    data() {
      return {
        intent: ''
      }
    },
    methods: {
      ...mapActions(['changeBody']),
      ...mapMutations(['changeContent', 'setCursorPosition']),
      send() {
        const intentLength = this.intent.length;
        this.changeContent(this.intent);
        this.setCursorPosition(0);
        this.intent = '';
        this.changeBody('normal');
        setTimeout(() => {
          this.changeContent('')
        }, 1500+(intentLength*50))
      },
      updateCusror(e) {
        this.setCursorPosition(e.target.value.length)
      }
    }
  }
</script>
