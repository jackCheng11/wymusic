<template>
  <div id="playlist-detail">
    <div id="music-topbar">
        <button @click="hook2()">取消</button>
        <div id="music-left">
            <img :src="PlaylistDetail.coverImgUrl" alt="">
        </div>
        <div id="music-right">
            <p>{{PlaylistDetail.name}}</p>
        </div>
    </div>
    <div id="music-item">
      <ul>
        <li v-for="(value, index) in PlaylistDetail.tracks" :key="index" @click="hook1(value.id)">
            {{value.name}}
        </li>
      </ul>
    </div>
    <div id="music-bar">
        <marquee scrollamount="4" >{{sgc}}</marquee>
    </div>
  </div>
</template>

<script>
import { reqSongLyric } from '@/utils/request.js'
// import { mapActions } from 'vuex'
export default {
  name: 'playListDetail',
  props: ['flag', 'PlaylistDetail'],
  data () {
    return {
      sgc: undefined
    }
  },
  methods: {
    hook2 () {
      this.flag = false
      this.$emit('changeFlag', this.flag)
    },
    // ...mapActions([
    //   'getMusicURL'
    // ]),
    getMusicURL (payload) {
      this.$store.dispatch('getMusicURL', payload)
    },
    hook1 (id) {
      reqSongLyric((err, data) => {
        if (!err) {
          console.log(data)
          this.sgc = data.lrc.lyric
          // console.log(data.lrc.lyric)
        } else {
          console.log(err)
        }
      }, {
        params: {
          id
        }
      })
      console.log(id)
      //   this.$store.dispatch('getMusicURL', id)
      this.getMusicURL(id)
      //   reqSongUrl((err, data) => {
      //     if (!err) {
      //     //   console.log(data)
      //       console.log(data.data[0].url)
      //       this.$store.commit('setMusicURL', data.data[0].url)
      //       this.$store.commit('setPlayStatus', 'play')
      //     } else {
      //       console.log(err)
      //     }
      //   }, {
      //     params: {
      //       id
      //     }
      //   })
    }
  }
}
</script>

<style>
#playlist-detail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: gray;
  z-index: 999;
}
#playlist-detail > #music-topbar > button{
    display: block;
    position: absolute;
    top: 35px;
    left: 10px;
}
#playlist-detail > #music-topbar > #music-left{
    width: 50%;
    height: 280px;
    float: left;
}
#playlist-detail > #music-topbar > #music-left > img{
    position: absolute;
    top: 70px;
    left: 37px;
    width: 135px;
    height: 165px;
    display: inline-block;
}
#playlist-detail > #music-topbar > #music-right{
     width: 50%;
    height: 280px;
    float: right;
}
#playlist-detail > #music-topbar > #music-right > p{
    margin-top: 140px;
    font-size: 14px;
}
#playlist-detail > #music-item{
    background-color: white;
    position: absolute;
    bottom: 80px;
    top: 280px;
    width: 100%;
    overflow-y: auto;
}
#playlist-detail> #music-item > ul {
  list-style-type: decimal;
  padding-left: 55px;
  margin: 0;
}
#playlist-detail > #music-item > ul > li {
  font-size: 15px;
  margin: 10px 0;
}
#music-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: aliceblue;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 -15px 20px rgba(0, 0, 0, 0.5);
}
#music-bar > marquee{
    width: 270px;
    height: 17px;
    line-height: 17px;
    font-size: 12px;
    overflow: hidden;
}
</style>
