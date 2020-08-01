<template>
  <div id="mvsong">
      <div id="mvsong-top">
          <button @click='hook'>取消</button>
      </div>
      <div id="mvmusic">
          <ul>
              <li v-for='(value, index) in count' :key="index" @click='HookMvUrl(value.id)'>
                  <template v-if="MvUrl" width='335'>
                      <video :src="MvUrl"></video>
                  </template>
                  <img :src="value.cover" alt="">
                  <p>{{value.artistName}}:<span>{{value.name}}</span></p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import { reqMvUrl } from '@/utils/request.js'
export default {
  name: 'mv-song',
  props: ['flag1', 'count'],
  data () {
    return {
      MvUrl: undefined
    }
  },
  methods: {
    hook () {
      this.flag1 = false
      this.$emit('changeFlag1', this.flag1)
    },
    HookMvUrl (id) {
      reqMvUrl((err, data) => {
        if (!err) {
          // console.log(data)
          this.MvUrl = data.data.url
          // console.log(data.data.url)
        } else {
          console.log(err)
        }
      }, {
        params: {
          id
        }
      })
    }
  }
}
</script>

<style>
#mvsong{
    width: 100%;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 60px;
    z-index: 9;
}
#mvmusic{
    width: 100%;
    position: absolute;
    top: 170px;
    bottom: 0;
    overflow-y: auto;
}
#mvmusic>ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
}
#mvmusic>ul>li{
    width: 335px;
    margin: 0 auto 0;
}
#mvmusic>ul>li>img{
    width: 335px;
    display: block;
    border-radius: 10px;
    overflow: hidden;
}
#mvmusic>ul>li p{
    display: inline-block;
    font-size: 13px;
    margin-top: 10px;
    font-weight: 500;
    display: flex;
}
#mvmusic>ul>li span{
    font-size: 11px;
    align-self: center;
    overflow: hidden;
}
</style>
