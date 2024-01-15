<template>
  <audio :src="musicURL" id="audio-ctler"></audio>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'audioCtler',
  //   computed: {
  //     musicURL () {
  //       return this.$store.state.musicURL
  //     },
  //     playStatus () {
  //       return this.$store.state.playStatus
  //     }
  //   },
  computed: mapState(['musicURL', 'playStatus']),
  watch: {
    playStatus () {
      this.$nextTick(() => {
        document.querySelector('audio')[this.playStatus] && document.querySelector('audio')[this.playStatus]()
      })
    }
  }
}
</script>

<style>
</style>
