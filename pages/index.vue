<template>
  <section class="container">
    <form>
      <yeti/>
      <chat-bar/>
    </form>
  </section>
</template>

<script>
  import Yeti from '~/components/Yeti.vue'
  import ChatBar from '~/components/ChatBar.vue'

  export default {
    components: {
      Yeti,
      ChatBar
    },
  }
</script>
