<template>
  <div id="show-panel">
    <p id="show-panel-title">
      {{title}}
      <span v-if="subtitle" class="show-panel-subtitle">| {{subtitle}}</span>
    </p>
    <div id="show-music">
      <template v-if="list">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <a href='javascript: void 0;' @click='hook1(item.id)'>
              <img :src="item.picUrl" alt />
              <p class="next">{{item.name}}</p>
            </a>
          </li>
        </ul>
      </template>
      <template v-if="PlaylistDetail">
        <PlaylistDetail :PlaylistDetail='PlaylistDetail' v-if='showPlaylistDetail' :flag='showPlaylistDetail' @changeFlag='hook3'></PlaylistDetail>
      </template>
    </div>
  </div>
</template>

<script>
import { reqPlaylistDetail } from '@/utils/request.js'
import PlaylistDetail from '@/components/Common/PlaylistDetail.vue'
export default {
  name: 'newMusic',
  props: ['title', 'subtitle', 'list'],
  data () {
    return {
      showPlaylistDetail: false,
      PlaylistDetail: undefined
    }
  },
  components: {
    PlaylistDetail
  },
  methods: {
    hook1 (id) {
      this.showPlaylistDetail = true
      reqPlaylistDetail((err, data) => {
        if (!err) {
          this.PlaylistDetail = data.playlist
        } else {
          console.log(err)
        }
      },
      {
        params: {
          id
        }
      })
    },
    hook3 () {
      this.showPlaylistDetail = false
    }
  }
}
</script>

<style>
#show-panel {
  width: 335px;
  margin: 20px auto 0;
}
#show-panel-title,
#show-panel-subtitle {
  margin: 0;
}
#show-panel-title {
  font-size: 20px;
}
.show-panel-subtitle {
  font-size: 15px;
}
#show-music > ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
}
#show-music > ul > li {
  float: left;
  width: 33.33333%;
}
#show-music > ul > li > a{
  text-decoration: none;
  color: black;
}
#show-music > ul > li  img {
  width: 96%;
  padding: 2%;
  display: block;
}
#show-music .next {
  font-size: 12px;
  height: 32px;
  line-height: 16px;
  overflow: hidden;
  margin: 4px 0 10px;
  padding: 0 2px;
}
</style>
