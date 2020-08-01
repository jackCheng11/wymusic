/* eslint-disabel */
import Swiper from 'swiper'

export function setSwiper (container, pagination) {
  // eslint-disable-next-line no-new
  new Swiper(container, {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2100,
      disableOnInteraction: false
    },
    pagination: {
      el: pagination
    },
    observer: true,
    observeParents: true
  })
}
