const StatusBarPlugin = require('@uppy/status-bar')

module.exports = {
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
      const options = Object.assign(
        { id: 'vue:StatusBar' },
        ...this.props,
        { target: this.$refs.container }
      )
      uppy.use(StatusBarPlugin, options)
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
