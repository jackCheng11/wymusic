<template>
  <div id="app">
      <Mine></Mine>
      <MenuSwitchPage></MenuSwitchPage>
      <AudioNode></AudioNode>
  </div>
</template>

<script>
import Mine from '@/components/Mine/Mine.vue'
import MenuSwitchPage from '@/components/Common/MenuSwitchPage.vue'
import AudioNode from '@/components/Common/AudioNode.vue'
export default {
  name: 'app',
  components: {
    Mine,
    MenuSwitchPage,
    AudioNode
  }
}
</script>

<style>

</style>
