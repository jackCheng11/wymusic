<template>
  <div id="MenuSwitchPage">
    <ul>
        <li><a href="#"><img src="@/assets/img/demo1.svg" alt=""><span>发现</span></a></li>
        <li @click='mvhook'><a href="#"><img src="@/assets/img/demo2.svg" alt=""><span>视屏</span></a></li>
        <template v-if="count">
          <MvSong v-if="showCover" :count='count' :flag1='showCover' @changeFlag1='hook1'></MvSong>
        </template>
        <li><a href="#"><img src="@/assets/img/demo3.svg" alt=""><span>我的</span></a></li>
        <li><a href="#"><img src="@/assets/img/demo4.svg" alt=""><span>云村</span></a></li>
        <li><a href="#"><img src="@/assets/img/demo5.svg" alt=""><span>账号</span></a></li>
    </ul>
  </div>
</template>

<script>
import { reqMvSong } from '@/utils/request.js'
import MvSong from '@/components/Common/MvSong.vue'
export default {
  name: 'MenuSwitchPage',
  props: [],
  components: {
    MvSong
  },
  data () {
    return {
      count: undefined,
      showCover: false
    }
  },
  methods: {
    mvhook () {
      this.showCover = true
      reqMvSong((err, data) => {
        if (!err) {
          // console.log(data)
          this.count = data.data.slice(0, 20)
          // console.log(data.data[0])
        } else {
          console.log(err)
        }
      })
    },
    hook1 (data) {
      this.showCover = data
    }
  }
}
</script>

<style>
#MenuSwitchPage {
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: white;
  z-index: 99;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 -15px 20px rgba(0, 0, 0, 0.5);
}
#MenuSwitchPage>ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
}
#MenuSwitchPage>ul>li{
    margin: 5px 0 0 0;
    display: inline-block;
}
#MenuSwitchPage>ul>li>a{
    text-decoration: none;
    color: black;
    font-size: 14px;
}
#MenuSwitchPage>ul>li>a>img{
    display: block;
    width: 33px;
}
#MenuSwitchPage>ul>li>a>span{
    display: block;
    display: flex;
    justify-content: space-around;
}
</style>
