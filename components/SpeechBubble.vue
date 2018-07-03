<template>
  <div class="speech-bubble">
    <transition name="fade">
      <div v-show="getContent" class="box sb1">
        {{ getContent }}
      </div>
    </transition>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "SpeechBubble",
    computed: {
      ...mapGetters(['getContent'])
    }
  }
</script>
