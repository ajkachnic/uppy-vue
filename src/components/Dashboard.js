const DashboardPlugin = require('@uppy/dashboard')

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
    },
    plugins: {
      type: Array
    }
  },
  mounted () {
    this.installPlugin()
  },
  methods: {
    installPlugin () {
      const uppy = this.uppy
      const options = Object.assign(
        {
          id: 'vue:Dashboard',
          inline: true,
          plugins: this.plugins
        },
        this.props,
        { target: this.$refs.container }
      )
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
  },
  render (h) {
    return h('div', {
      ref: 'container'
    })
  }
}
