<template>
  <div id="banner">
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for='(item, index) in banners' :key="index">
                  <img :src="item.pic" alt="">
              </div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
  </div>
</template>

<script>
import { reqBanner } from '@/utils/request.js'
import { setSwiper } from '@/utils/banner.js'
export default {
  name: 'banner',
  data () {
    return {
      banners: undefined
    }
  },
  mounted () {
    reqBanner((err, data) => {
      if (!err) {
        console.log(data)
        this.banners = data.banners
        this.$nextTick(() => {
          // eslint-disable-next-line
          setSwiper('.swiper-container', '.swiper-pagination')
        })
      } else {
        console.log(err)
      }
    })
  }
}
</script>

<style>
#banner{
    width: 335px;
    height: 130.277778px;
    margin: 0 auto 0;
    background-color: red;
    border-radius: 18px;
    overflow: hidden;
}
.swiper-container,
.swiper-wrapper,
.swiper-slide,
.swiper-slide img{
    width: 100%;
    height: 100%;
    display: block;
}

</style>
