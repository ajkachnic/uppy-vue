<template>
  <div id="app">
    <Dashboard :uppy="uppy"/>
  </div>
</template>

<script>
import { Dashboard } from 'uppy-vue'

import Uppy from '@uppy/core'

export default {
  name: 'App',
  components: {
    Dashboard
  },
  data () {
    return {
      uppy: new Uppy()
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
