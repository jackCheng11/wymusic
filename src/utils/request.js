import axios from 'axios'
// const axios = require('axios')
let request = axios.create({
  baseURL: 'http://localhost:3000'
})

export function reqBanner (cb, options) {
  request(Object.assign({
    url: '/banner',
    params: {
      type: 1
    },
    responseType: 'json'
  }, options)).then(data => {
    // console.log(data)
    cb(null, data.data)
  }).catch(err => {
    cb(err, null)
  })
}

export function reqNewMusic (cb, options) {
  request(Object.assign({
    url: '/personalized',
    params: {
      id: 3106585298
    }
  }, options)).then(data => {
    // console.log(data)
    cb(null, data.data)
  }).catch(err => {
    cb(err, null)
  })
}

export function reqAlbums (cb, options) {
  request(Object.assign({
    url: '/top/album'
  }, options)).then(data => {
    console.log(data)
    cb(null, data.data)
  }).catch(err => {
    cb(err, null)
  })
}

export function reqPlaylistDetail (cb, options) {
  request(Object.assign({
    url: '/playlist/detail'
  }, options)).then(data => {
    cb(null, data.data)
  }).catch(err => {
    cb(err, null)
  })
}

export function reqSongUrl (cb, options) {
  request(Object.assign({
    url: '/song/url'
  }, options)).then(data => {
    cb(null, data.data)
  }).catch(err => {
    cb(err, null)
  })
}

export function reqSongLyric (cb, options) {
  request(Object.assign({
    url: '/lyric'
  }, options)).then(data => {
    cb(null, data.data)
  }).catch(err => {
    cb(err, null)
  })
}

export function reqMvSong (cb, options) {
  request(Object.assign({
    url: '/mv/all'
  }, options)).then(data => {
    cb(null, data.data)
  }).catch(err => {
    cb(err, null)
  })
}

export function reqMvUrl (cb, options) {
  request(Object.assign({
    url: '/mv/url'
  }, options)).then(data => {
    cb(null, data.data)
  }).catch(err => {
    cb(err, null)
  })
}
