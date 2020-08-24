<template>
  <Base :pluginType="pluginType" :uppy="uppy" :uppyProps="props"/>
</template>

<script>
import Base from './Base.vue'
import * as Dashboard from '@uppy/dashboard'
import '@uppy/dashboard/dist/style.css'

export default {
  components: { Base },
  props: {
    uppy: {
      required: true
    },
    pluginOptions: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      required: false
    }
  },
  data () {
    return {
      pluginType: Dashboard.default,
      defaultOptions: {
        id: 'vue:Dashboard',
        inline: true,
        disabled: false
      }
    }
  },
  computed: {
    props () {
      return {
        plugins: this.plugins || [],
        ...this.defaultOptions,
        ...this.pluginOptions
      }
    }
  }
}
</script>

<style>

</style>
