<template>
  <div id="app">
    <test-dashboard :uppy="uppy"  :props="{ plugins }"/>
  </div>
</template>

<script>
import '@uppy/dashboard/dist/style.css'
import TestDashboard from 'uppy-vue/src/components/TestDashboard.js';

import Uppy from '@uppy/core'
import * as Webcam from '@uppy/webcam'

export default {
  name: 'App',
  components: {
    TestDashboard
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
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
