<template>
  <Base :pluginType="pluginType" :uppy="uppy" :uppyProps="props"/>
</template>

<script>
import Base from './Base.vue'
import ProgressBar from '@uppy/progress-bar'
import '@uppy/progress-bar/dist/style.css'

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
      pluginType: ProgressBar.default,
      defaultOptions: {
        id: 'vue:ProgressBar'
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
