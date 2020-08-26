const DragDropPlugin = require('@uppy/drag-drop')

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
        { id: 'vue:DragDrop' },
        this.props,
        { target: this.$refs.container }
      )
      uppy.use(DragDropPlugin, options)
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
