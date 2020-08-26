<template>
  <div ref="container" />
</template>
<script>
import DashboardPlugin from '@uppy/dashboard'

export default {
  data () {
    return {
      plugin: null
    }
  },
  props: {
    uppy: {
      required: true
    },
    props: {
      type: Object
    }
  },
  mounted () {
    this.installPlugin()
  },
  methods: {
    installPlugin () {
      const uppy = this.uppy
      const options = {
        id: 'vue:Dashboard',
        inline: true,
        ...this.props,
        target: this.$refs.container
      }
      uppy.use(DashboardPlugin, options)
      this.plugin = uppy.getPlugin(options.id)
    },
    uninstallPlugin (uppy = this.uppy) {
      uppy.removePlugin(this.plugin)
    }
  },
  beforeDestroy () {
    this.uninstallPlugin()
  },
  watch: {
    uppy (current, old) {
      if (old !== current) {
        this.uninstallPlugin(old)
        this.installPlugin()
      }
    }
  }
}
</script>
