<template>
  <Base :pluginType="pluginType" :uppy="uppy" :uppyProps="props" :onMount="vm => {
    if(open) {
      vm.plugin.openModal()
    }
  }"/>
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
    open: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      pluginType: Dashboard.default,
      defaultOptions: {
        id: 'vue:DashboardModal',
        target: 'body'
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
