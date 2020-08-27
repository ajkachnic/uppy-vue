
import '@uppy/dashboard/dist/style.css'
import { Dashboard } from 'uppy-vue'

import Uppy from '@uppy/core'
import * as Webcam from '@uppy/webcam'

export default {
	template: `
<div id="app">
  <Dashboard :uppy="uppy" :plugins="plugins"/>
</div>`,
  name: 'App',
  components: {
    Dashboard
  },
  computed: {
    uppy: () => new Uppy().use(Webcam)
  },
  data() {
    return {
      plugins: ['Webcam']
    }
  },
  beforeDestroy () {
    this.uppy.close()
  }
}
