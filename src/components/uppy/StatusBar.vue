<template>
  <Base :pluginType="pluginType" :uppy="uppy" :uppyProps="props"/>
</template>

<script>
import Base from './Base.vue'
import StatusBar from '@uppy/status-bar'
import '@uppy/status-bar/dist/style.css'

export default {
  components: { Base },
  props: {
    uppy: {
      required: true
    },
    pluginOptions: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      pluginType: StatusBar.default,
      defaultOptions: {
        id: 'vue:StatusBar'
      }
    }
  },
  computed: {
    props () {
      return {
        ...this.defaultOptions,
        ...this.pluginOptions
      }
    }
  }
}
</script>

<style>

</style>
