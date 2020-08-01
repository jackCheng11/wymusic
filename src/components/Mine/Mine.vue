<template>
  <div id="mine">
    <TopBar></TopBar>
    <div id="scroll-panel">
      <Banner></Banner>
      <NewMusic v-if="result" :list="result" :title="'推荐歌单'" :subtitle="'新歌'"></NewMusic>
      <NewMusic v-if="albums" :list="albums" :title="'新碟上架'" :subtitle="'新歌'"></NewMusic>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/Common/TopBar.vue'
import Banner from '@/components/Common/Banner.vue'
import NewMusic from '@/components/Common/NewMusic.vue'
import { reqNewMusic, reqAlbums } from '@/utils/request.js'
export default {
  name: 'mine',
  components: {
    TopBar,
    Banner,
    NewMusic
  },
  data () {
    return {
      result: undefined,
      albums: undefined
    }
  },
  mounted () {
    reqNewMusic((err, data) => {
      if (!err) {
        console.log(data)
        this.result = data.result.slice(0, 12)
        // console.log(this.result)
      } else {
        console.log(err)
      }
    })

    reqAlbums((err, data) => {
      if (!err) {
        // console.log(data)
        this.albums = data.albums.slice(0, 12)
      } else {
        console.log(err)
      }
    })
  }
}
</script>

<style>
#scroll-panel{
  width: 100%;
  position: absolute;
  top: 170px;
  bottom: 68px;
  overflow-y: auto;
}
</style>
