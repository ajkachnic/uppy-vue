<template>
  <div>
    <div ref="container" />
  </div>
</template>

<script>
import Vue from 'vue'
import '@uppy/core/dist/style.css'

export default Vue.extend({
  name: 'Base',
  data () {
    return {
      plugin: null
    }
  },
  props: {
    uppy: {
      required: true
    },
    uppyProps: {
      type: Object,
      required: false
    },
    pluginType: {
      required: true
    },
    onMount: {
      type: Function,
      required: true
    }
  },
  methods: {
    create () {
      this.plugin && this.uninstall()
      this.uppy.use(this.pluginType, {
        target: this.$refs.container,
        ...this.uppyProps
      })
      this.plugin = this.uppy.getPlugin((this.uppyProps.id))
    },
    uninstall () {
      this.uppy.removePlugin(this.plugin)
    }
  },

  // Lifecycle hooks
  mounted () {
    this.create()
    this.onMount(this)
  },
  beforeDestroy () {
    this.uninstall()
  }
})
</script>
