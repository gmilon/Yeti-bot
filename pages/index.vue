<template>
  <section class="container">
    <div class="form">
      <speech-bubble/>
      <yeti/>
      <chat-bar/>
    </div>
  </section>
</template>

<script>
  import Yeti from '~/components/Yeti.vue'
  import ChatBar from '~/components/ChatBar.vue'
  import SpeechBubble from '~/components/SpeechBubble.vue'

  export default {
    components: {
      Yeti,
      ChatBar,
      SpeechBubble,
    },
  }
</script>
