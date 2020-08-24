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
      const options = Object.assign(
        { id: 'react:Dashboard' },
        this.props,
        { target: this.$refs.container }
      )
      uppy.use(DashboardPlugin, options)
      this.plugin = uppy.getPlugin(options.id)
    },
    uninstallPlugin () {
      const uppy = this.uppy
      uppy.removePlugin(this.plugin)
    }
  },
  beforeDestroy () {
    this.uninstallPlugin()
  },
  render (h) {
    return h('div', {
      ref: 'container'
    })
  }
}
