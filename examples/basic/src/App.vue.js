
import { Dashboard, DashboardModal, DragDrop } from 'uppy-vue'

import Uppy from '@uppy/core'

import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'
import '@uppy/dashboard/dist/style.css'

export default {
	template: `
<div id="app">
  <h2>
    &lt;dashboard />
  </h2>
  <dashboard :uppy="uppy1"/>
  <h2>
    &lt;dashboard-modal />
  </h2>
  <button @click="toggle">open the modal</button>
  <dashboard-modal :uppy="uppy2" :open="open" :props='{
    onRequestCloseModal: toggle,
    closeModalOnClickOutside: true
  }'/>
  <h2>
    &lt;drag-drop />
  </h2>
  <drag-drop :uppy="uppy3"/>
</div>`,
  name: 'App',
  components: {
    Dashboard,
    DashboardModal,
    DragDrop,
  },
  computed: {
      uppy1: () => new Uppy(),
      uppy2: () => new Uppy(),
      uppy3: () => new Uppy()
  },
  data() {
    return {
      open: false
    }
  },
  beforeDestroy () {
    this.uppy.close()
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
