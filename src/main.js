import Vue from 'vue'
import Vuex from 'vuex'
import { reqSongUrl } from '@/utils/request.js'

import App from './App.vue'
import '@/utils/rem.js'
import '@/assets/css/main.css'
import 'swiper/css/swiper.css'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    musicURL: '',
    playStatus: 'stop'
  },
  mutations: {
    setMusicURL (state, payload) {
      state.musicURL = payload
    },
    setPlayStatus (state, payload) {
      state.playStatus = payload
    }
  },
  actions: {
    getMusicURL (context, payload) {
      Vue.nextTick(function () {
        context.commit('setPlayStatus', 'stop')
      })
      reqSongUrl((err, data) => {
        if (!err) {
          context.commit('setMusicURL', data.data[0].url)
          Vue.nextTick(function () {
            context.commit('setPlayStatus', 'play')
          })
        } else {
          console.log(err)
        }
      }, {
        params: {
          id: payload
        }
      })
    }
  }
})
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
